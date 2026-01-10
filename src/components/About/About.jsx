import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Profile.png";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 scroll-mt-28"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center lg:gap-14">
          {/* Left side */}
          <div className="md:w-150 text-center md:text-left mt-8 md:mt-0">
            {/* Greeting  : */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>
            {/* Name : */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Jayant Dewangan
            </h2>
            {/* Skills heading with typing effect : */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <Typewriter
                words={[
                  "Computer Science Engineer",
                  "Fullstack Developer",
                  "AI/ML Enthusiast",
                  "Coder",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h3>
            {/* About me paragraph : */}
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
              I am a full-stack developer driven by a passion for building
              scalable web applications. Skilled in both front-end and back-end
              development, I specialize in the MERN stack and other modern
              technologies to create seamless user experiences and efficient
              solutions.
            </p>
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1nu7IOnMNGhBCGQb7rL7fmlXREhhyk2jd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              MY RESUME
            </a>
          </div>

          {/* RIGHT SIDE :  */}
          <div className="md:w-95 justify-center md:justify-end">
            <Tilt 
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope>
              <img
                src={profileImage}
                alt="Jayant Dewangan"
                className="
                  w-48 h-48            /* small screens */
                  sm:w-56 sm:h-56      /* slightly bigger */
                  md:w-72 md:h-72      /* medium screens */
                  lg:w-80 lg:h-80      /* large screens */
                  rounded-full
                  object-cover
                  ring-4 ring-[#8245ec]
                  drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]
                  md: -mt-7.5
                "
              />
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
