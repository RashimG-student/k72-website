import React, { useEffect } from "react";
import Video from "./Video";
import gsap from "gsap";

const HomeHeader = () => {
useEffect(() => {
  const ellipse = document.querySelector(".ellipsea");
  const length = ellipse.getTotalLength();

  gsap.set(ellipse, {
    strokeDasharray: `${length * 0.3} ${length}`,
    strokeDashoffset: 0,
  });

  gsap.to(ellipse, {
    strokeDashoffset: -length,
    duration: 1.5,
    repeat: -1,
     repeatDelay: 1.5,
    ease: "power2.inOut",
  });
}, []);

  return (
    <div className="uppercase font-[font1] text-[9.5vw] leading-[8.5vw] pt-[1vw]">
      <div className="flex items-center justify-center">
        The spark for
      </div>

      <div className="flex items-center justify-center">
        all
        <div className="w-[16vw] h-[16vh] rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>

      <div className="flex items-center justify-center relative">
        creative

        <svg
          className="absolute w-[110%] h-[200%] pointer-events-none"
          viewBox="0 0 100 40"
        >
          <ellipse
            className="ellipsea"
            cx="50"
            cy="20"
            rx="55"
            ry="10"
            fill="none"
            stroke="#DFFF4F"
            strokeWidth="0.3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeHeader;