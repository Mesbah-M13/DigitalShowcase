// import React, { useRef, useState } from "react";
// // import TiltText from "../components/TiltText";
// import Page1Bottom from "../components/Page1Bottom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import TiltText from "../components/TiltText";

// // const Page1 = () => {
// //   const refForTilt = useRef(null);

// //   const [xVal, setXVal] = useState(0);
// //   const [yVal, setYVal] = useState(0);

// //   const mouseMoving = (e) => {
// //     setXVal((e.clientX - refForTilt.current.getBoundingClientRect().x -refForTilt.current.getBoundingClientRect().width/2)/20);
// //     setYVal((e.clientY - refForTilt.current.getBoundingClientRect().y -refForTilt.current.getBoundingClientRect().height/2)/10);

// //     refForTilt.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
// //   };
// // useGSAP(function () {
// //   gsap.to(refForTilt.current,{
// //     transform: `rotateX(${yVal}deg) rotateY(${xVal}deg) `,
// //     duration:2,
// //     ease:  "elastic.out(1,0.3)",
  
// //   })
// // },[xVal,yVal])

// //   return (
// //     <div
// //       onMouseMove={(e) => {
// //         mouseMoving(e);
// //       }}
// //       className="bg-white h-screen p-4 "
// //     >
// //       <div
// //         className=" w-full 
// //           h-[60vh] 
// //           sm:h-[70vh] 
// //           md:h-[80vh] 
// //           lg:h-[90vh] 
// //           rounded-3xl 
// //           shadow-2xl 
// //           shadow-black 
// //           bg-cover 
// //           bg-center 
// //           md:bg-[url('/photo.jpg')]
// //           "
// //       >
// //         <div
// //           id="page1-in"
// //           className="bg-black md:mt-2 md:h-full md:w-2/4 rounded-l-3xl "
// //         >
// //           <img
// //             className=" top-4 left-10"
// //             src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_79,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png"
// //             alt=""
// //           />
// //           <TiltText refOnTilt={refForTilt}/>
// //           <Page1Bottom />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default Page1;


import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";

const Page1 = () => {
  const refForTilt = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    const rect = refForTilt.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;

    setXVal(x);
    setYVal(y);

    refForTilt.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  };

  useGSAP(() => {
    gsap.to(refForTilt.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 2,
      ease: "elastic.out(1, 0.3)",
    });
  }, [xVal, yVal]);

  return (
    <div
      onMouseMove={mouseMoving}
      className="bg-white min-h-screen p-4 sm:p-6 md:p-8 lg:p-12"
    >
      <div
        className="w-full 
          h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] 
          rounded-3xl 
          shadow-2xl shadow-black 
          bg-cover bg-center 
          bg-[url('/photo.jpg')]"
      >
        <div
          id="page1-in"
          className="bg-black h-full w-full md:w-2/4 rounded-l-3xl relative flex flex-col justify-center px-6 sm:px-10"
        >
          <img
            className="absolute top-4 left-4 sm:left-10 w-20 h-auto"
            src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_79,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png"
            alt="Logo"
          />

          <TiltText refOnTilt={refForTilt} />
          <Page1Bottom />
        </div>
      </div>
    </div>
  );
};

export default Page1;
