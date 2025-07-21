 // src/components/About.jsx
import React from "react";

function About() {
  return (
    <section id="about" className="py-12 text-gray-800 min-h-screen">
      {/* Header */}
      <div className="bg-teal-700 text-white px-6 py-4 w-full">
        <h2 className="text-4xl font-light tracking-wide">ABOUT</h2>
      </div>

      {/* Content */}
      <div className="mt-10 max-w-4xl mx-auto text-[1.125rem] leading-8 space-y-6">
        <p>
          I am a Computer Science and Engineering student at
          <strong className="text-teal-900"> IIIT RGUKT RK Valley University</strong>. 
          I am a self-driven, quick starter, passionate programmer with a curious mind 
          who enjoys solving complex and challenging real-world problems. I am currently 
          working on a project in the field of Web Development and also working on a 
          project in Machine Learning.
        </p>

        <p>
          I passed my High School from
          <strong className="text-teal-900"> GHS Bangarupalyam</strong> 
          and SEE from
          <strong className="text-teal-900"> GHS Bangarupalyam</strong>. I am very interested 
          in sharing knowledge gained from sources and life experiences. I have some coding 
          knowledge and am very interested in computer science. I am an avid reader and 
          an excellent problem-solver.
        </p>

        <div className="space-y-2">
          <p><strong>Languages:</strong> Java, JavaScript, C, HTML, CSS</p>
          <p><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</p>
          <p><strong>Libraries:</strong> NumPy, Pandas, OpenCV</p>
          <p><strong>Frameworks:</strong> Flask, Django, Node.js, Keras, TensorFlow, PyTorch, Bootstrap, Apache Beam</p>
          <p><strong>Tools & Technologies:</strong> Git, Docker, GCP, Heroku, JIRA</p>
        </div>

        <p>
          Looking for an opportunity to work in a challenging position combining my skills 
          in Software Engineering, which provides professional development, interesting 
          experiences, and personal growth.
        </p>
      </div>
    </section>
  );
}

export default About;
