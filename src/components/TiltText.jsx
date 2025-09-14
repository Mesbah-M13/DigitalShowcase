import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltElement" ref={props.refOnTilt} className=" mt-40 sm:mt-16 px-6 mx-10 ">
      {/* Line 1 */}
      <h1 className="text-2xl mt-40 -ml-15 sm:ml-0 sm:mt-0 sm:text-5xl md:text-6xl font-[font2] uppercase leading-tight">
        I am a{" "}
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Front End
        </span>
      </h1>

      {/* Line 2 */}
      <h1 className="-ml-15 sm:ml-0 md:text-[20vh] text-[10vh] uppercase font-[EROZI] leading-none mt-4">
        Developer
      </h1>

      {/* Line 3 */}
      <h2 className="-ml-14 sm:ml-0 text-xl md:text-4xl font-semibold mt-2">To Hire</h2>
    </div>
  );
};

export default TiltText;

