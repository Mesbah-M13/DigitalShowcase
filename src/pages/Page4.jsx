// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "A personal portfolio built with React and Tailwind.",
//     liveUrl: "https://your-portfolio.com",
//     githubUrl: "https://github.com/username/portfolio",
//   },
//   {
//     title: "E-commerce App",
//     description: "Full-stack MERN e-commerce application.",
//     liveUrl: "https://your-shop.com",
//     githubUrl: "https://github.com/username/ecommerce",
//   },
//   {
//     title: "Chat Application",
//     description: "Real-time chat app using Socket.io and Node.js.",
//     liveUrl: "https://your-chatapp.com",
//     githubUrl: "https://github.com/username/chatapp",
//   },
// ];

// export default function Page4() {
//   const cardsRef = useRef([]);
//   const bgRef = useRef(null);

//   useEffect(() => {
//     // Animate cards
//     gsap.fromTo(
//       cardsRef.current,
//       { opacity: 0, y: 50, scale: 0.95 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.3,
//         ease: "power3.out",
//       }
//     );

//     // Animate background gradient
//     gsap.to(bgRef.current, {
//       backgroundPosition: "200% 50%",
//       duration: 10,
//       repeat: -1,
//       yoyo: true,
//       ease: "linear",
//     });
//   }, []);

//   return (
//     <div
//       ref={bgRef}
//       className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-[length:200%_200%]"
//     >
//       <h1 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardsRef.current[index] = el)}
//             className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <div>
//               <h2 className="text-2xl font-semibold mb-3 text-gray-800">
//                 {project.title}
//               </h2>
//               <p className="text-gray-600 mb-6">{project.description}</p>
//             </div>

//             <div className="flex gap-3 mt-auto">
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
//               >
//                 Live Preview
//               </a>
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// const projects = [
//   {
//     title: "Fresh Haystack",
//     description: "IT Company / Tech Product",
//     liveUrl: "#",
//     githubUrl: "#",
//     imageUrl:
//       "https://images.pexels.com/photos/17878513/pexels-photo-17878513.jpeg",
//   },
//   {
//     title: "Futuristic Template",
//     description: "Modern Business Portfolio / FOR SALE",
//     liveUrl: "#",
//     githubUrl: "#",
//     imageUrl:
//       "https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg",
//   },
//   {
//     title: "Project Alpha",
//     description: "Innovative web solution",
//     liveUrl: "#",
//     githubUrl: "#",
//     imageUrl: "https://placehold.co/800x600/6D28D9/FFFFFF?text=Project+3",
//   },
//   {
//     title: "Project Beta",
//     description: "Data visualization dashboard",
//     liveUrl: "#",
//     githubUrl: "#",
//     imageUrl:
//       "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg",
//   },
// ];

// const App = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans relative">
//       <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-20 text-center md:text-left">
//         My Projects
//       </h1>

//       <div className="flex flex-col">
//         {projects.map((project, index) => {
//           const isHovered = hoveredIndex === index;

//           return (
//             <div
//               key={index}
//               className="relative cursor-pointer group"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* The main project row */}
//               <div className="relative py-8 border-t border-b border-gray-700 transition-colors duration-300 group-hover:bg-gray-900">
//                 <div className="flex justify-between items-center relative z-10 px-4 md:px-8">
//                   {/* Title and Description */}
//                   <div className="flex flex-col">
//                     <h2
//                       className="text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-300"
//                       style={{
//                         color: isHovered ? "white" : "gray",
//                         transform: `translateY(${isHovered ? "-10px" : "0"})`,
//                       }}
//                     >
//                       {project.title}
//                     </h2>
//                     <p className="text-gray-400 text-sm mt-1 transition-all duration-300">
//                       {project.description}
//                     </p>
//                   </div>

//                   {/* Icon Links */}
//                   <div className="flex gap-4">
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-white text-white hover:text-black transition-all duration-300"
//                       style={{
//                         transform: `scale(${isHovered ? 1.1 : 1})`,
//                         opacity: isHovered ? 1 : 0.5,
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
//                         />
//                       </svg>
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-white text-white hover:text-black transition-all duration-300"
//                       style={{
//                         transform: `scale(${isHovered ? 1.1 : 1})`,
//                         opacity: isHovered ? 1 : 0.5,
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>

//                 {/* Image display */}
//                 <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
//                   <img
//                     src={project.imageUrl}
//                     alt={project.title}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const projects = [
  {
    title: "Fintech HomePage Clone",
    description: "IT Company / Tech Product",
    liveUrl: "https://easy-pay-website-figtoweb-xwhw.vercel.app/",
    githubUrl: "https://github.com/Mesbah-M13/easy-pay-website-figtoweb.git",
    imageUrl: "/fitnech.jpg",
  },
  {
    title: "Food Delivery Site",
    description: "Listing food items & add the foods to the cart",
    liveUrl: "https://coruscating-churros-241351.netlify.app/",
    githubUrl: "https://github.com/Mesbah-M13/food-delivery-site",
    imageUrl: "/food_delivery_site.jpg",
  },
  {
    title: "Personal Expense Tracker",
    description: "Budget tacking ",
    liveUrl: "https://roaring-marzipan-c459ce.netlify.app/",
    githubUrl: "https://github.com/username/fresh-haystack",
    imageUrl: "/tracker.jpg",
  },

  {
    title: "MovieFlow website to gain idea about upcoming and recent movies",
    description: "Modern Business Portfolio / FOR SALE",
    liveUrl: "https://movie-flow-6064ea.netlify.app/",
    githubUrl: "https://github.com/Mesbah-M13/movie-flow-frontend-project.git",
    imageUrl: "movieFlow_p2.jpg",
  },
  {
    title: "Dental Care Alpha",
    description: "Innovative dental care web solution",
    liveUrl: "https://courageous-hamster-32ba03.netlify.app/",
    githubUrl:
      "https://github.com/Mesbah-M13/dental-care-compound-home-page.git",
    imageUrl: "/dental_p3.jpg",
  },
];

const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans relative">
      <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-20 text-center md:text-left">
        My Projects
      </h1>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } gap-8 items-center group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-xl w-full h-auto object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text and Links */}
              <div className="w-full  md:w-1/2 space-y-4 text-center md:text-center">
                <h2 className="text-4xl font-extrabold uppercase tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-400">{project.description}</p>

                {/* Buttons */}
                <div
                  className={`flex  gap-4 mt-4 ${
                    isEven
                      ? "justify-start md:justify-center"
                      : "justify-end md:justify-center"
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                  >
                    Live Website
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-600 transition"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
