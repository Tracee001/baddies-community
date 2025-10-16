"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const coaches = [
  {
    name: "Shanae Brown",
    title: "Leadership & Executive Coach",
    blurb:
      "Build a robust career growth strategy, strengthen executive presence and navigate workplace dynamics with confidence.",
    image: "/images/coaches/shanae.jpg",
    book: "/career/book-shanae",
  },
  {
    name: "Cristina Costa",
    title: "Career Clarity Coach",
    blurb:
      "Uncover transferable skills, reframe your narrative, and design a step-by-step plan to land the role you want.",
    image: "/images/coaches/cristina.jpg",
    book: "/career/book-cristina",
  },
  {
    name: "Ashley Chance",
    title: "Resume & Job Search Coach",
    blurb:
      "Refine your resume, optimize your job search strategy, and approach recruiters with confidence.",
    image: "/images/coaches/ashley.jpg",
    book: "/career/book-ashley",
  },
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
      >
        <Image
          src="/images/hero12.jpg"
          alt="Career hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Your Tech Career Starts Here 
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Empowering you with tailored career services — from resume help to interview coaching and a job board built for women of color.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/job-search-genius"
              className="inline-block bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-pink-700 transition"
            >
              Try Job Search Genius
            </Link>

            <Link
              href="/career/resume-review"
              className="inline-block border border-white/40 text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-pink-600 transition"
            >
              Get a Free Resume Review
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/testimonial-valeria.jpg"
                alt="Valeria testimonial"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg font-semibold text-pink-600">
                Valeria C — CRO Specialist
              </h3>
              <p className="mt-2 text-lg text-gray-800">
                Baddies in Tech helped me refine my skills and grow confidence.
                The coaching and community connections gave me the courage to
                step into leadership roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER COACHING */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
            Career Coaching: Personalized Guidance for Your Next Step
          </h2>
          <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto">
            Sometimes a conversation is all it takes. Our 1-on-1 coaches provide tailored support —
            whether you’re pivoting into tech, aiming for leadership, or navigating career balance.
          </p>

          <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
            {coaches.map((c, idx) => (
              <motion.article
                key={c.name}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-t-4 border-pink-500 transition"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{c.name}</h3>
                    <p className="text-sm text-pink-600 font-semibold">{c.title}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{c.blurb}</p>

                <div className="mt-6">
                  <Link
                    href={c.book}
                    className="inline-block bg-gray-900 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-pink-600 transition"
                  >
                    Book Time with {c.name.split(" ")[0]}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* JOB BOARD */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="md:flex md:items-center md:gap-10">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-extrabold text-gray-900">
                Looking for Your Next Role?
              </h3>
              <p className="mt-4 text-gray-700">
                Our job board connects you with roles at companies committed to inclusion and innovation.
                Whether it’s your first tech job or your next big leap — we’ve got you covered.
              </p>

              <div className="mt-6 flex gap-4">
                <button className="bg-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-700 transition">
                  Join Job Board Waitlist
                </button>
                <Link
                  href="/resume-bank"
                  className="text-gray-800 border border-gray-200 py-3 px-6 rounded-full hover:bg-gray-100 transition font-semibold"
                >
                  Submit Your Resume
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image
                src="/images/job-board-preview.jpg"
                alt="Job board preview"
                width={800}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Ready to take the next step?
          </h3>
          <p className="mt-4 text-gray-700">
            Join coaching, get your resume reviewed, or try Job Search Genius.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/career/resume-review"
              className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition font-semibold"
            >
              Get Resume Help
            </Link>
            <Link
              href="/membership"
              className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition font-semibold"
            >
              Join Baddie+ Membership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
