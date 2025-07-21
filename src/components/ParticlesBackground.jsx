 // src/components/ParticlesBackground.jsx
import React from "react";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#4f9a94" },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 1 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
