 // src/components/Projects.jsx
import React from "react";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projectData = [
    {
      title: "Weather App",
      description: "Get real-time weather updates for any city using OpenWeatherMap API.",
      image: "/images/weather-app.png",
      live: "https://your-live-url.com",
      code: "https://github.com/your-repo/weather-app",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS.",
      image: "/images/portfolio.png",
      live: "https://your-live-url.com",
      code: "https://github.com/your-repo/portfolio",
    },
    // Add more projects below as needed
  ];

  return (
    <section id="projects" className="bg-[#0f172a] text-white px-6 py-16 ml-60">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-teal-400 border-b-4 border-teal-500 inline-block pb-2">
          PROJECTS
        </h2>
      </div>

      {/* Project Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareColor="#14b8a6"
            glarePosition="all"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="transition-transform duration-300"
          >
            <div className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/50 transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-teal-500 hover:bg-teal-500 text-teal-400 hover:text-white px-4 py-2 rounded transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
