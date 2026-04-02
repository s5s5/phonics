"use client";
import { useEffect } from "react";

const useFirework = () => {
  useEffect(() => {
    import("mouse-firework").then((firework) => {
      firework.default({
        excludeElements: ["a", "button", "h2"],
        particles: [
          {
            shape: "star",
            move: ["emit", "rotate"],
            easing: "easeOutExpo",
            colors: ["#FACC15", "#ff4d00", "#6366F1", "#FACC15"],
            number: 16,
            duration: [1200, 1800],
            shapeOptions: {
              radius: [16, 32],
              spikes: 5,
            },
          },
          {
            shape: "star",
            move: ["diffuse", "rotate"],
            easing: "easeOutExpo",
            colors: ["#FFF"],
            number: 2,
            duration: [1200, 1800],
            shapeOptions: {
              radius: 20,
              alpha: 0.5,
              lineWidth: 6,
              spikes: 5,
            },
          },
        ],
      });
    });
  }, []);
};

export default useFirework;
