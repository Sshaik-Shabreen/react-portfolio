 // src/components/Sidebar.jsx
import React from "react";
import {
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import { Link } from "react-scroll"; // ✅ Import from react-scroll
import avatar from "../assets/avatar.png";

function Sidebar() {
  return (
    <aside className="w-60 bg-white shadow-lg h-screen fixed flex flex-col p-6 text-gray-800 space-y-6">
      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt="Profile"
          className="rounded-full w-24 h-24 shadow object-cover border-2 border-gray-300"
        />
        <h2 className="mt-4 font-semibold text-lg">Shaik Shabreen</h2>
      </div>

      <nav className="space-y-4 text-sm font-medium">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center gap-2 hover:text-teal-600 cursor-pointer"
        >
          <FaUser /> About
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center gap-2 hover:text-teal-600 cursor-pointer"
        >
          <FaProjectDiagram /> Projects
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center gap-2 hover:text-teal-600 cursor-pointer"
        >
          <FaCode /> Skills
        </Link>

        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center gap-2 hover:text-teal-600 cursor-pointer"
        >
          <FaGraduationCap /> Education
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center gap-2 hover:text-teal-600 cursor-pointer"
        >
          <FaEnvelope /> Contact
        </Link>

        <Link
          to="resume"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center gap-2 hover:text-teal-600 cursor-pointer"
        >
          <FaFileAlt /> Resume
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
