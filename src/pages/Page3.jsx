import React from "react";

// const Page3 = () => {
//   return (
//     <div className="relative h-screen bg-white">
//       <img
//         className="absolute z-[2] w-full h-[80%] object-contain"
//         src="/laptop-mockup.png"
//         alt="Laptop Mockup"
//       />
//       <video
//         loop
//         muted
//         autoPlay
//         playsInline
//         className="h-[50vh] w-[42vw] top-8 left-38 sm:left-146 object-cover z-[10] relative"
//         src="/file.mp4"
//       ></video>
//       <div className="h-0.5 opacity-50 top-[20%] sm:left-48 w-3/4 absolute z-0 bg-black"></div>
//       <div className="h-0.5 opacity-50 top-[40%] sm:left-30 w-5/6 absolute z-0 bg-black"></div>
//       <div className="h-0.5 opacity-50 top-[60%] sm:left-48  w-3/4 absolute z-0 bg-black"></div>
//     </div>
//   );
// };

const Page3 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* Container for the laptop mockup and video, positioned relative to its parent */}
      <div className="relative w-full max-w-4xl mx-auto h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {/*
          Laptop Mockup Image:
          - absolute positioning to stack it on top of other elements
          - w-full, h-full to fill the container and maintain aspect ratio
          - object-contain ensures the entire image is visible without being cropped
          - z-[2] to place it above the background lines and video
        */}
        <img
          className="absolute inset-0 w-full h-full object-contain z-[2]"
          src="/laptop-mockup.png"
          alt="Laptop Mockup"
        />
        {/*
          Video Element:
          - absolute positioning to precisely place it within the laptop screen
          - Percentage-based top, left, width, and height to scale with the container
          - z-[10] to ensure it is on top of the laptop screen
        */}
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute top-[23.5%] sm:top-[10%] left-[8%] sm:left-[10%] w-[85%] sm:w-[80%] h-[35%] sm:h-[50%] object-cover rounded-xl z-[10]"
          src="/file.mp4"
        ></video>

        {/*
          Responsive Background Lines:
          - Absolute positioning to place them behind the laptop mockup
          - Percentage-based top and width to scale
          - Uses responsive prefixes (sm, md, lg) for fine-grained control on different screen sizes
          - z-0 to keep them in the background
        */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[25%] left-[15%] w-[70%] h-0.5 opacity-50 bg-black sm:left-[20%] sm:w-[60%] md:w-[50%] md:left-[25%]"></div>
          <div className="absolute top-[50%] left-[10%] w-[80%] h-0.5 opacity-50 bg-black sm:left-[15%] sm:w-[70%] md:w-[60%] md:left-[20%]"></div>
          <div className="absolute top-[75%] left-[15%] w-[70%] h-0.5 opacity-50 bg-black sm:left-[20%] sm:w-[60%] md:w-[50%] md:left-[25%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
