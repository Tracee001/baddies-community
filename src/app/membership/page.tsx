"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Calendar, GraduationCap, Briefcase, Heart, BookOpen } from "lucide-react";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero7.jpg"
          alt="Membership Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          >
            Membership
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            variants={fadeUp}
            className="text-lg md:text-xl text-pink-400 font-semibold mb-4"
          >
            Join our growing community of women in tech
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.3 }}
            variants={fadeUp}
            className="text-lg md:text-2xl text-white max-w-2xl mx-auto drop-shadow"
          >
            Explore the benefits and find the membership option that’s right for you.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.4 }}
            variants={fadeUp}
            className="mt-8 flex justify-center gap-6"
          >
            <Link
              href="/membership/join"
              className="px-6 py-3 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition"
            >
              Join Now
            </Link>
            <Link
              href="/membership/benefits"
              className="px-6 py-3 border border-white text-white font-bold rounded-full hover:bg-white hover:text-pink-600 transition"
            >
              See Benefits
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section id="membership-tiers" className="py-20 container mx-auto px-6 md:px-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900"
        >
          Membership Options
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="border rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col"
          >
            <h3 className="text-xl font-bold text-pink-600">Free</h3>
            <p className="text-gray-600 mt-2 flex-grow">
              Get access to our community space and events.
            </p>
            <p className="text-3xl font-extrabold mt-4">₦0</p>
            <Link
              href="/membership/join"
              className="mt-6 inline-block w-full px-4 py-2 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-700 transition"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="border-2 border-pink-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col relative"
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
            <h3 className="text-xl font-bold text-pink-600">Premium</h3>
            <p className="text-gray-600 mt-2 flex-grow">
              Unlock all benefits, mentorship, and networking opportunities.
            </p>
            <p className="text-3xl font-extrabold mt-4">₦5,000/mo</p>
            <Link
              href="/membership/join"
              className="mt-6 inline-block w-full px-4 py-2 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-700 transition"
            >
              Join Premium
            </Link>
          </motion.div>

          {/* Lifetime Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="border rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col"
          >
            <h3 className="text-xl font-bold text-pink-600">Lifetime</h3>
            <p className="text-gray-600 mt-2 flex-grow">
              One-time payment for lifelong access and perks.
            </p>
            <p className="text-3xl font-extrabold mt-4">₦50,000</p>
            <Link
              href="/membership/join"
              className="mt-6 inline-block w-full px-4 py-2 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-700 transition"
            >
              Join Lifetime
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900"
          >
            Why Join Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Networking", desc: "Connect with inspiring women in tech worldwide.", icon: Users },
              { title: "Events & Workshops", desc: "Gain skills and knowledge from industry leaders.", icon: Calendar },
              { title: "Mentorship", desc: "Learn directly from experienced professionals.", icon: GraduationCap },
              { title: "Career Growth", desc: "Access exclusive job boards and resources.", icon: Briefcase },
              { title: "Community", desc: "Be part of a supportive and empowering network.", icon: Heart },
              { title: "Resources", desc: "Access curated guides, toolkits, and learning materials.", icon: BookOpen },
            ].map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.9, delay: idx * 0.2 }}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition text-center"
              >
                <benefit.icon className="mx-auto h-10 w-10 text-pink-600 mb-4" />
                <h3 className="font-bold text-pink-600">{benefit.title}</h3>
                <p className="text-gray-600 mt-2">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 w-full px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-3xl font-extrabold">
              Ready to <span className="text-pink-500">Join?</span>
            </h3>
            <p className="mt-2 text-gray-300 max-w-xl">
              Whether you’re looking for mentorship, networking, or resources,
              there’s a membership tier for you.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex gap-3 justify-center md:justify-end"
          >
            <Link
              href="/membership/join"
              className="px-5 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100"
            >
              Join Now
            </Link>
            <Link
              href="/membership/benefits"
              className="px-5 py-3 border border-white rounded-full font-semibold hover:bg-gray-900"
            >
              See Benefits
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
