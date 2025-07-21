 // src/components/Hero.jsx
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#5e9c92] text-white px-6 py-20 min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <ParticlesBackground />

      <motion.div
        className="max-w-5xl text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm{" "}
          <span className="bg-teal-900 px-3 py-1 rounded inline-block">
            Shaik Shabreen.
          </span>
        </motion.h1>

        {/* Typing Effect for Tech Stack */}
        <motion.div
          className="text-yellow-300 text-xl md:text-2xl mb-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Java", 2000,
              "React", 2000,
              "Node.js", 2000,
              "MySQL", 2000,
              "MongoDB", 2000,
              "Tailwind CSS", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Self-driven, quick starter, passionate programmer with a curious mind
          who enjoys solving complex and challenging real-world problems.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-5 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: FaLinkedin, color: "hover:text-blue-600", link: "#" },
            { icon: FaGithub, color: "hover:text-gray-300", link: "#" },
            { icon: FaBook, color: "hover:text-black", link: "#" },
            { icon: FaFacebook, color: "hover:text-blue-500", link: "#" },
            { icon: FaInstagram, color: "hover:text-pink-500", link: "#" },
            { icon: FaTwitter, color: "hover:text-sky-400", link: "#" },
            { icon: FaWhatsapp, color: "hover:text-green-400", link: "#" },
            { icon: FaEnvelope, color: "hover:text-yellow-300", link: "#" },
            { icon: FaCalendarAlt, color: "hover:text-yellow-500", link: "#" },
          ].map(({ icon: Icon, color, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className={`text-3xl cursor-pointer transition ${color}`} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-[#5e9c92] transition font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Read More
          </motion.button>
          <a href="#contact">
            <motion.button
              className="border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-[#5e9c92] transition font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
