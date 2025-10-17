"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Example slide data
const slides = [
  {
    video: "/videos/hero4.mp4",
    title: "Empowering Women in Tech",
    subtitle:
      "Building a future where women of color thrive in technology and leadership.",
    buttonText: "Join the Movement",
    buttonLink: "/community",
  },
  {
    video: "/videos/hero5.mp4",
    title: "Connect. Learn. Grow.",
    subtitle:
      "From mentorship to events, we create spaces where innovation happens.",
    buttonText: "See Events",
    buttonLink: "/events",
  },
  {
    video: "/videos/hero6.mp4",
    title: "Together, We Rise",
    subtitle:
      "Celebrating diversity and driving impact through community and collaboration.",
    buttonText: "About Us",
    buttonLink: "/about",
  },
];

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-full">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Video Background */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg BaddiesFont">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.buttonLink}
                  className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition shadow-lg"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Next Section - Full Width */}
      <section className="bg-pink-100 py-16 w-full text-center CODE_SWITCH">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          WE DON’T CODE SWITCH…<br />WE SWITCH THE CODE
        </h2>
        <p className="text-lg md:text-2xl text-gray-800 max-w-3xl mx-auto mb-10">
  Baddies in Tech is powering the potential of women of color in
  technology. We&apos;re a career mobility platform and dedicated safe space
  for ambitious, career-driven women who want to conquer the tech world.
  Through access to educational and skill-building resources, networking
  and job opportunities, we help women of color start and scale
  successful careers in technology.
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/membership"
            className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition shadow-lg"
          >
            Become A Member
          </Link>
          <Link
            href="/employers"
            className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition shadow-lg"
          >
            Hire Tech Baddies
          </Link>
        </div>
      </section>

      {/* Info Sections - Full Width */}
      <section className="w-full bg-white py-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-12">
        <Link
          href="/about"
          className="block p-8 bg-gray-100 rounded-2xl shadow hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold mb-3 text-pink-600">About Us</h2>
          <p className="text-gray-700">
            Learn more about our mission and story.
          </p>
        </Link>

        <Link
          href="/events"
          className="block p-8 bg-gray-100 rounded-2xl shadow hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold mb-3 text-pink-600">Events</h2>
          <p className="text-gray-700">
            See upcoming events and workshops.
          </p>
        </Link>

        <Link
          href="/community"
          className="block p-8 bg-gray-100 rounded-2xl shadow hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold mb-3 text-pink-600">Community</h2>
          <p className="text-gray-700">
            Connect with other baddies in tech.
          </p>
        </Link>

        <Link
          href="/contact"
          className="block p-8 bg-gray-100 rounded-2xl shadow hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold mb-3 text-pink-600">Contact</h2>
          <p className="text-gray-700">Get in touch with us.</p>
        </Link>
      </section>
    </main>
  );
}
