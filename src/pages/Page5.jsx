

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "remixicon/fonts/remixicon.css";

const Page5 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const serviceID = "service_uja2qpc";
    const templateID = "template_r3k6ioi";
    const userID = "lJ7kW-g_UbiXKpJ7s";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((err) => {
        console.error("Email send error:", err);
        setStatus("❌ Failed to send message. Try again later.");
      });
  };

  const SocialIcon = ({ path }) => (
    <svg
      className="w-8 h-8 sm:w-6 sm:h-6 text-gray-700 hover:text-gray-500 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d={path}></path>
    </svg>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-16">
        {/* Left side text */}
        {/* <div className="flex flex-col justify-start flex-1 max-w-xl">
          <h1 className="text-8xl sm:text-6xl xs:text-4xl font-extrabold leading-tight mb-10 text-[#1e3a8a]">
            LET&apos;S WORK <br /> TOGETHER
          </h1>
          <p className="text-xl sm:text-lg xs:text-base font-light mb-8 max-w-md text-[#374151]">
            WE&apos;RE OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND WE&apos;LL START A PRODUCTIVE COOPERATION.
          </p>
          <div className="text-lg sm:text-base font-semibold mb-8 text-[#374151]">
            CALL US: +1 837 652 8800
            <br />
            SAY HI: SUPPORT@BESTLOOKER.PRO
          </div>
          <div className="flex space-x-7">
            <a href="#" aria-label="Facebook" className="hover:text-gray-500">
              <SocialIcon path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.024 24 18.062 24 12.073z" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-500">
              <SocialIcon path="M22.28 6.068c-.732.324-1.52.542-2.355.638.84-.504 1.488-1.29 1.79-2.235-.788.468-1.672.808-2.606.994-.748-.796-1.812-1.29-2.996-1.29-2.264 0-4.098 1.834-4.098 4.098 0 .32.036.634.106.936-3.408-.172-6.434-1.804-8.458-4.288-.352.604-.556 1.308-.556 2.052 0 1.424.724 2.684 1.828 3.42-.67-.02-1.298-.206-1.848-.508v.052c0 1.984 1.412 3.642 3.292 4.02-.344.094-.708.146-1.076.146-.264 0-.52-.026-.772-.074.524 1.63 2.038 2.816 3.834 2.85-1.402 1.1-3.174 1.758-5.11 1.758-.334 0-.662-.02-1.04-.066 1.81 1.162 3.96 1.84 6.278 1.84 7.534 0 11.642-6.242 11.642-11.642 0-.178-.004-.354-.012-.53.796-.576 1.488-1.298 2.03-2.124z" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-500">
              <SocialIcon path="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6.25 18a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-.75.75zm3.75 0a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-.75.75zm3.75 0a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-.75.75zm3.75 0a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-.75.75z" />
            </a>
          </div>
        </div> */}

        <div className="flex flex-col justify-start flex-1 max-w-xl">
          {/* Big Heading */}
          <h1 className="text-7xl lg:text-8xl md:text-6xl sm:text-5xl xs:text-4xl font-extrabold leading-tight mb-12 text-black">
            LET&apos;S WORK <br /> TOGETHER
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-2xl md:text-xl sm:text-lg xs:text-base font-normal mb-10 max-w-md text-[#3b414b]">
            WE&apos;RE OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND
            WE&apos;LL START A PRODUCTIVE COOPERATION.
          </p>

          {/* Contact Info */}
          <div className="text-2xl md:text-xl sm:text-lg xs:text-base font-semibold mb-12 text-[#374151]">
            CALL ME: +880-01768558910
            <br />
            SAY HI: mesbahhim010@gmail.com
          </div>

          {/* Social Icons */}
          <div className="flex space-x-10 text-4xl text-black">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <i className="ri-facebook-circle-line"></i>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <i className="ri-twitter-fill"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>

        {/* Right side form */}
        <div className="flex-1 max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:gap-6 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="NAME"
                required
                className="flex-1 border border-gray-400 rounded-full px-8 py-5 placeholder-gray-500 text-3xl sm:text-2xl xs:text-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                required
                className="flex-1 border border-gray-400 rounded-full px-8 py-5 placeholder-gray-500 text-3xl sm:text-2xl xs:text-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-transparent"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="SUBJECT"
              required
              className="sm:w-[35vw] border border-gray-400 rounded-full px-8 py-5 placeholder-gray-500 text-3xl sm:text-2xl xs:text-xl text-gray-900 focus:outline-none focus:border-purple-600 bg-transparent"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              required
              rows={6}
              className="sm:w-[35vw] border border-gray-400 rounded-3xl px-8 py-8 placeholder-gray-500 text-3xl sm:text-2xl xs:text-xl text-gray-900 resize-none focus:outline-none focus:border-purple-600 bg-transparent"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-48 h-48 bg-black text-white font-extrabold rounded-full flex flex-col items-center justify-center text-2xl sm:text-xl xs:text-lg transform transition-transform hover:scale-105"
              >
                <span>SEND</span>
                <span>MESSAGE</span>
              </button>
            </div>
          </form>

          {status && (
            <p
              className={`mt-8 text-center font-semibold ${
                status.startsWith("✅")
                  ? "text-green-700"
                  : status.startsWith("❌") || status.startsWith("⚠️")
                  ? "text-red-600"
                  : "text-gray-700"
              } text-xl sm:text-lg xs:text-base`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page5;
