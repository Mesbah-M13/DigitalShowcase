import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to("#bottomImg", {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div className="relative flex items-center justify-between bottom-0 left-0 py-36 px-12 w-full ">
      <div className="-mt-40 sm:mt-0 -ml-10 sm:ml-0">
        <h2 className=" text-lg sm:text-2xl">
          Next-gen front-end for future-ready brands
        </h2>
      </div>
      <div id="bottomImg" className="absolute right-26 sm:-right-20">
        <img
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
