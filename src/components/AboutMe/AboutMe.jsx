import React from "react";
import Tilt from "react-parallax-tilt";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 lg:mt-16 text-white"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          About <span className="text-[#8245ec]">Me</span>
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] rounded-full"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left Side: Stats/Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/3 flex flex-col gap-6"
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            className="bg-white dark:bg-[#0f0c29] p-6 rounded-2xl border border-gray-200 dark:border-[#8245ec]/30 shadow-md dark:shadow-[0_0_15px_rgba(130,69,236,0.2)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(130,69,236,0.4)] transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <div className="text-[#8245ec] text-4xl mb-4"><FaGraduationCap /></div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Education</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">B.Tech in CSE</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">KIIT University</p>
          </Tilt>

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            className="bg-white dark:bg-[#0f0c29] p-6 rounded-2xl border border-gray-200 dark:border-[#8245ec]/30 shadow-md dark:shadow-[0_0_15px_rgba(130,69,236,0.2)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(130,69,236,0.4)] transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <div className="text-[#8245ec] text-4xl mb-4"><FaLaptopCode /></div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Experience</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Full Stack Projects</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">MERN Stack & Real-World Solutions</p>
          </Tilt>
        </motion.div>

        {/* Right Side: Description */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-2/3 text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-justify sm:text-left"
        >
          <p>
            Hello! I'm <strong className="text-[#8245ec]">Jayant Dewangan</strong>, a focused and detail-oriented Full-Stack Developer with a strong passion for building scalable and efficient web applications. My journey into programming grew from a curiosity about how systems work into a deep commitment to creating accessible, well-documented, and impactful technical resources.
          </p>
          <p>
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have been actively refining my expertise in Node.js, modern server architecture, and workflow optimization. Whether it’s designing responsive interfaces, crafting reusable components, or architecting robust backend services, I enjoy the challenge of turning complex ideas into clear, functional solutions.
          </p>
          <p>
            Beyond development, I dedicate time to simplifying technical concepts for learners, creating beginner-friendly documentation, and exploring algorithms and system design with a focus on originality and clarity. When I’m not coding, you’ll often find me experimenting with new frameworks, visualizing recursion problems, or diving into strategy-based video games.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
