// ParticlesComponent.tsx
"use client";
import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#0076a8", "#14195e", "#112f56"], // Light Blue, Purple, Green
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "none",
              },
              random: true,
              speed: 1.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 20, max: 100 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 backdrop-blur-lg"></div>
    </>
  );
};

export default ParticleBackground;
