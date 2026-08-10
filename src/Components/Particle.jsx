import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

async function particlesInit(engine) {
  await loadSlim(engine);
}

const particleOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        width: 1500,
      },
    },
    color: {
      value: "#ffffff",
    },
    links: {
      enable: false,
      opacity: 0.03,
    },
    move: {
      direction: "right",
      enable: true,
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      value: { min: 0.1, max: 1 },
      animation: {
        enable: true,
        sync: false,
        speed: 1,
      },
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
    },
  },
  detectRetina: true,
};

function Particle() {
  return (
    <ParticlesProvider init={particlesInit}>
      <Particles id="tsparticles" options={particleOptions} />
    </ParticlesProvider>
  );
}

export default Particle;
