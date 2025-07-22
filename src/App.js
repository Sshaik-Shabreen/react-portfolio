 // src/App.jsx
 import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="relative scroll-smooth flex min-h-screen bg-gray-50 text-gray-900">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      {/* Sidebar (Fixed Left) */}
      <aside className="fixed top-0 left-0 h-full w-[250px] bg-white shadow-md z-50">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-[250px] relative z-10">
        {/* Hero section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <main className="px-6">
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
          <section id="resume"><Resume /></section>
        </main>
      </div>
    </div>
  );
}

export default App;

// src/App.jsx
// import React from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// function App() {
//   const particlesInit = async (engine) => {
//     await loadSlim(engine);
//   };

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Particle Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         className="absolute inset-0 z-0"
//         options={{
//           fullScreen: { enable: false },
//           background: {
//             color: { value: "#0f172a" }, // dark background to make particles visible
//           },
//           particles: {
//             number: { value: 80 },
//             size: { value: 3 },
//             color: { value: "#ffffff" },
//             links: {
//               enable: true,
//               color: "#ffffff",
//               distance: 150,
//               opacity: 0.5,
//             },
//             move: {
//               enable: true,
//               speed: 1,
//             },
//           },
//         }}
//       />

//       {/* Sample content */}
//       <div className="relative z-10 text-white text-center pt-40 text-4xl">
//         Test Particles Background
//       </div>
//     </div>
//   );
// }

// export default App;
