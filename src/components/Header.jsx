import React from "react";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <div className="w-full absolute flex items-center justify-end py-8 md:pr-6 pr-4 ">
      <button className=" bg-black md:text-3xl text-2xl rounded-3xl px-6 py-1 font-[EROZI]  border-3 border-orange-50 hover:bg-zinc-500 cursor-pointer ">
        Hire Me
      </button>
      <button>
        <i className="ri-more-2-fill text-5xl md:ml-0 bg-black rounded-3xl" aria-label="Menu icon"></i>
      </button>
    </div>
  );
};

export default Header;
