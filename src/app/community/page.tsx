"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  doc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";

interface Message {
  id: string;
  senderName: string;
  senderEmail: string;
  text: string;
  createdAt?: Timestamp;
}

interface TypingUser {
  id: string;
  name: string;
  email: string;
}

const getAvatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || "User"
  )}&background=F472B6&color=fff&bold=true`;

export default function CommunityPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Listen for messages
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Fixed Typing Users Listener
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "typing"), (snapshot) => {
      const typingList = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<TypingUser, "id">;
        return { id: doc.id, ...data };
      });
      setTypingUsers(typingList);
    });
    return () => unsubscribe();
  }, []);

  // Auto-scroll when new messages appear
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !name.trim() || !email.trim()) return;

    await addDoc(collection(db, "messages"), {
      senderName: name,
      senderEmail: email,
      text: newMessage,
      createdAt: serverTimestamp(),
    });

    setNewMessage("");
    await deleteDoc(doc(db, "typing", email)).catch(() => {});
  };

  // Handle typing status
  const handleTyping = async (value: string) => {
    setNewMessage(value);

    if (!name.trim() || !email.trim()) return;

    // User starts typing
    await setDoc(doc(db, "typing", email), {
      id: email,
      name,
      email,
    });

    // Clear after 2 seconds of no input
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(
      async () => await deleteDoc(doc(db, "typing", email)).catch(() => {}),
      2000
    );
  };

  const othersTyping = typingUsers.filter((user) => user.email !== email);

  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-pink-50 to-white text-gray-900">
      {/* Header */}
      <header className="bg-pink-600 text-white py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-10">
        <h1 className="text-xl font-semibold">💬 Baddies Community Chat</h1>
        <div className="flex gap-3 text-sm">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-2 py-1 rounded bg-white text-gray-800 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 rounded bg-white text-gray-800 outline-none"
          />
        </div>
      </header>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No messages yet. Start chatting 💬
          </p>
        ) : (
          messages.map((msg) => {
            const isMe = msg.senderEmail === email;
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex items-end gap-2 ${
                  isMe ? "justify-end flex-row-reverse" : "justify-start"
                }`}
              >
                <img
                  src={getAvatar(msg.senderName)}
                  alt={msg.senderName}
                  className="w-8 h-8 rounded-full object-cover border border-pink-200"
                />
                <div
                  className={`max-w-xs md:max-w-sm rounded-2xl px-4 py-2 shadow-sm ${
                    isMe
                      ? "bg-pink-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {!isMe && (
                    <p className="text-xs font-semibold mb-1">
                      {msg.senderName}
                    </p>
                  )}
                  <p className="text-sm break-words">{msg.text}</p>
                  {msg.createdAt?.toDate && (
                    <p
                      className={`text-[10px] mt-1 ${
                        isMe ? "text-pink-100" : "text-gray-500"
                      } text-right`}
                    >
                      {format(msg.createdAt.toDate(), "h:mm a")}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })
        )}

        {/* Typing Indicator */}
        <AnimatePresence>
          {othersTyping.length > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="text-xs text-gray-500 italic mt-2 ml-10"
            >
              💬 {othersTyping.map((u) => u.name).join(", ")}{" "}
              {othersTyping.length === 1 ? "is typing..." : "are typing..."}
            </motion.p>
          )}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="bg-white border-t border-gray-200 p-4 flex gap-3 sticky bottom-0"
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => handleTyping(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700 transition"
        >
          Send
        </button>
      </form>
    </main>
  );
}
