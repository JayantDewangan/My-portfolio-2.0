import React from "react";
import { menuItems } from "../../navConfig";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="py-8 -mt-7 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-500">
            Jayant Dewangan
          </h2>

          {/* Navigation links :  */}
          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex flex-wrap justify-center space-x-4 mt-4">
            <a
              href="https://github.com/codingmastr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/jayant.031/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-600 text-sm font-semibold mt-6 flex justify-center items-center">
            © {new Date().getFullYear()} Jayant Dewangan. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
