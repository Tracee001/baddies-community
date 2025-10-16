"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";

interface Message {
  id: string;
  senderName: string;
  senderEmail: string;
  text: string;
  createdAt?: any;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CommunityPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 🔥 Real-time listener
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 🪄 Auto-scroll to the bottom when messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✉️ Send new message
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
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-pink-600 text-white">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          💬 Baddies Community Chat
        </motion.h1>
      </section>

      {/* Chat Section */}
      <section className="py-10 px-6 max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Chat Room 💖
          </h2>

          {/* User Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500"
            />
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-gray-50 mb-4">
            {loading ? (
              <p className="text-gray-500 text-center">Loading chat...</p>
            ) : messages.length === 0 ? (
              <p className="text-gray-500 text-center">
                No messages yet. Start chatting!
              </p>
            ) : (
              messages.map((msg) => {
                const isMe = msg.senderEmail === email;
                return (
                  <div
                    key={msg.id}
                    className={`mb-3 flex ${
                      isMe ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-sm rounded-lg p-3 shadow-sm ${
                        isMe
                          ? "bg-pink-600 text-white rounded-br-none"
                          : "bg-gray-200 text-gray-900 rounded-bl-none"
                      }`}
                    >
                      {!isMe && (
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          {msg.senderName}
                        </p>
                      )}
                      <p className="text-sm">{msg.text}</p>
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
                  </div>
                );
              })
            )}
            <div ref={bottomRef} />
          </div>

          {/* Send Message */}
          <form onSubmit={sendMessage} className="flex gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-pink-500"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition"
            >
              Send
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
