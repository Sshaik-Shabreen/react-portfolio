 import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="bg-white text-gray-800 px-6 py-10">
      <h2 className="text-4xl font-bold mb-6">Resume</h2>
      <p>
        <a
          href="https://drive.google.com/file/d/1vx5ZfvWcBPF58Z7vOFYWgR7vg8cD0WsW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-700 underline hover:text-teal-900 transition duration-200"
        >
          Click here to view my resume
        </a>
      </p>
    </section>
  );
};

export default Resume;
