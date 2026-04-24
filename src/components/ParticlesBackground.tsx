import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.6 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: ["#22d3ee", "#a855f7", "#ec4899"] },
          links: {
            color: "#a855f7",
            distance: 140,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 70 },
          opacity: { value: { min: 0.2, max: 0.6 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
