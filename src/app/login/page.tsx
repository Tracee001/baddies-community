"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [firebaseReady, setFirebaseReady] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setFirebaseReady(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password)
      return setError("Email and password are required.");

    if (!firebaseReady)
      return setError("Firebase is not ready yet. Please try again.");

    try {
      // ✅ Keep user logged in
      await setPersistence(auth, browserLocalPersistence);

      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess(true);
      setTimeout(() => router.push("/community"), 1500);
    } catch (err: any) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-pink-600 text-white">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Welcome Back
        </motion.h1>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 max-w-md mx-auto">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8 text-pink-600"
        >
          Login to Your Account
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md"
        >
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 font-medium"
            >
              {error}
            </motion.p>
          )}
          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-medium"
            >
              ✅ Login successful! Redirecting...
            </motion.p>
          )}

          {/* Email */}
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-pink-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!firebaseReady}
            className={`w-full py-3 text-white font-bold rounded-lg transition ${
              firebaseReady
                ? "bg-pink-600 hover:bg-pink-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {firebaseReady ? "Login" : "Loading..."}
          </button>

          {/* Link */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a
              href="/join"
              className="text-pink-600 font-semibold hover:underline"
            >
              Join Now
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}

