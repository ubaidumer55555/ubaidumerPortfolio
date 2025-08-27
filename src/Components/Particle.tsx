import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#ffffff", // White color for stars
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right", // move stars to right
            speed: 0.05,
          },
          size: {
            value: 1, // Adjust size for better visibility
          },
          opacity: {
            value: { min: 0.1, max: 1 }, // Set a base opacity level
            animation: {
              enable: true,
              sync: false,
              speed: 1,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
