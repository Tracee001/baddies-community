"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamData = [
  {
    name: "Mykah Hardin",
    role: "Marketing Director",
    photo: "/images/mykah.jpg",
    bio: "With over ten years of experience in traditional and product marketing roles, Mykah leads the marketing team and helps amplify our message.",
  },
  {
    name: "Albrina Mendes",
    role: "Partnerships & Programming Director",
    photo: "/images/albrina.jpg",
    bio: "Albrina builds partnerships and programs that unlock access to opportunities for women of color.",
  },
  {
    name: "Angela Chen",
    role: "Chief of Staff",
    photo: "/images/angela.jpg",
    bio: "Angela brings event production and project management experience to ensure our programs run smoothly.",
  },
];

function getValueBlurb(value: string): string {
  switch (value) {
    case "Bold":
      return "Baddies challenge the status quo and fearlessly navigate the tech landscape.";
    case "Authentic":
      return "Our members bring their whole selves to the tech table.";
    case "Dynamic":
      return "Adapting and thriving in a constantly changing industry.";
    case "Determined":
      return "Driven by ambition, Baddies push through challenges.";
    case "Innovative":
      return "Creativity drives our community to introduce fresh ideas.";
    case "Empowered":
      return "BiT is a space for women to lift each other up.";
    default:
      return "";
  }
}

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen   flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Baddies in Tech group"
          fill
          className="object-cover relative top-6"
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
            OUR STORY: BUILT FOR YOU
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            variants={fadeUp}
            className="text-lg md:text-2xl text-white max-w-2xl mx-auto drop-shadow"
          >
            Empowering women of color to start and scale successful careers in technology.
          </motion.p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-pink-50 py-16 w-full text-center px-4">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="text-lg md:text-2xl text-gray-800 max-w-4xl mx-auto"
        >
          Baddies in Tech started with the vision of creating a space where women of color feel seen,
          supported, and empowered in tech. Our founder knows firsthand the challenges of being ‘the only one in the room’—the isolating experience that many women of color technologists face daily.
          She built BiT as a haven for women who want to break barriers, forge authentic connections,
          and build careers that support both their professional and personal aspirations.
        </motion.p>
      </section>

      {/* ALLIE'S STORY */}
      <section className="w-full bg-gray-100 py-16 md:py-24 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            variants={fadeUp}
            className="w-full max-w-lg"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
              ALLIE’S STORY
            </h1>
            <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
              As a Ghanaian-American immigrant, “medical doctor” was the career path...
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              An impromptu Instagram selfie, tagged #baddiesintech, was the answer to her “lonely-only” problem...
            </p>
          </motion.div>

          {/* Story Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, delay: 0.2 }}
            variants={fadeUp}
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hero1.jpg"
              alt="Allie's Story"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-gray-100 py-20 w-full px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Mission Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/mission.jpg"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="max-w-prose"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Our Mission & Vision
              </h2>
              <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
                We’re on a mission to create a more inclusive and diverse tech industry...
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Bold", icon: "/icons/bold.svg", color: "bg-pink-100" },
              { name: "Authentic", icon: "/icons/authentic.svg", color: "bg-purple-100" },
              { name: "Dynamic", icon: "/icons/dynamic.svg", color: "bg-indigo-100" },
              { name: "Determined", icon: "/icons/determined.svg", color: "bg-green-100" },
              { name: "Innovative", icon: "/icons/innovative.svg", color: "bg-yellow-100" },
              { name: "Empowered", icon: "/icons/empowered.svg", color: "bg-blue-100" },
            ].map((value, idx) => (
              <motion.div
                key={value.name}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col justify-start bg-white rounded-xl shadow-sm px-4 py-6 min-h-[180px]
                transition-transform transform hover:-translate-y-1 hover:shadow-md duration-300 ease-out"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${value.color}`}>
                    <Image src={value.icon} alt={value.name} width={16} height={16} />
                  </div>
                  <h3 className="text-sm md:text-base font-extrabold text-gray-900">
                    {value.name}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {getValueBlurb(value.name)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-full py-16 px-6 md:px-12 bg-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 uppercase"
          >
            Meet the Baddies Behind the Movement
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-gray-800 max-w-3xl mx-auto"
          >
            Our team is made up of passionate professionals...
          </motion.p>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.map((member, idx) => (
              <motion.article
                key={member.name}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.9, delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center p-8 bg-white rounded-[40px] border-2 border-black"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-black -mt-16 bg-white">
                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="mt-6 text-xl font-extrabold text-gray-900 uppercase">
                  {member.name}
                </h4>
                <p className="text-sm font-semibold text-gray-700 mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 w-full px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-bold">Get Involved</h3>
            <p className="mt-2 text-gray-200 max-w-xl">
              Whether you’re a woman in tech looking for support, a mentor eager to give back, or a
              partner committed to diversity, there’s a place for you here.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex gap-3"
          >
            <a href="#join" className="px-5 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-100">
              Join
            </a>
            <a href="#hire" className="px-5 py-3 border border-white rounded-md font-semibold hover:bg-gray-900">
              Hire
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
