// Copyright 2024 the JSR authors. All rights reserved. MIT license.
import { useEffect } from "preact/hooks";

declare global {
  const particlesJS: {
    load: (id: string, path: object, callback: () => void) => void;
  };
}

const config = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 2100,
      },
    },
    "color": {
      "value": "#3d86e6",
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 5,
        "color": "#ffffff",
      },
      "polygon": {
        "nb_sides": 3,
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false,
      },
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false,
      },
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#9bcaf5",
      "opacity": 0.5,
      "width": 1,
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200,
      },
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab",
      },
      "onclick": {
        "enable": true,
        "mode": "push",
      },
      "resize": true,
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1,
        },
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3,
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
      },
      "push": {
        "particles_nb": 4,
      },
      "remove": {
        "particles_nb": 2,
      },
    },
  },
  "retina_detect": true,
};

export function HeroParticles() {
  useEffect(() => {
    const reducedMotionQuery = globalThis.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const prefersReducedMotion = reducedMotionQuery.matches;
    if (prefersReducedMotion) config.particles.move.speed = 0;

    particlesJS.load(
      "particles-js",
      config,
      () => {
        const canvas = document.querySelector(
          ".particles-js-canvas-el",
        ) as HTMLCanvasElement;
        canvas.style.opacity = "1";
        canvas.ariaHidden = "true";
      },
    );
  }, []);

  return <></>;
}
