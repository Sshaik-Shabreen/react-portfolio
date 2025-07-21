 import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const SkillItem = ({ icon, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <Tilt
      glareEnable={true}
      glareColor="#14b8a6"
      glarePosition="all"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="w-24"
    >
      <div className="flex flex-col items-center m-4 p-4 bg-white rounded-lg shadow-md hover:shadow-teal-500/50 transition duration-300">
        <img src={icon} alt={label} className="h-12 w-12" />
        <span className="mt-2 text-sm text-center font-medium text-gray-700">
          {label}
        </span>
      </div>
    </Tilt>
  </motion.div>
);

export default SkillItem;
