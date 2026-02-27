import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaBug } from "react-icons/fa";
import { menuItems } from "../../navConfig";
import { useTheme } from "../../context/ThemeContext";


const Navbar = ({ onStartBugGame }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Smooth scrollfunction
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  // Check scroll and change navbar background :
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "bg-white/80 dark:bg-[#050414]/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex justify-between items-center">
          {/* LOGO :  */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-gray-900 dark:text-white">Jayant</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-gray-900 dark:text-white">Dewangan</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* DEKSTOP MENU :  */}
          <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 items-center">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-[#8245ec] text-[18px] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* SOCIAL MEDIA ICONS & THEME TOGGLE : */}
          <div className="hidden md:flex space-x-4 items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-[#8245ec] dark:hover:text-[#8245ec] transition-colors p-2"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <a
              href="https://github.com/JayantDewangan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jayant-dewangan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* MOBILE MENU ICONS :  */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-[#8245ec] dark:hover:text-[#8245ec] transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* ABSOLUTE RIGHT SIDE WIDGETS FOR DESKTOP (Out of flow) */}
        <div className="hidden lg:flex absolute top-6 right-[2vw] flex-col items-end space-y-2 z-50">
          {/* LIVE CLOCK */}
          <div className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-[#1a163a] px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 font-mono shadow-sm w-[120px]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
              {time.toLocaleTimeString('en-US', { hour12: false })}
            </span>
          </div>
          
          {/* HIDDEN BUG GAME TRIGGER - SYSTEM STATUS PILL */}
          <button 
            onClick={onStartBugGame}
            className="group relative flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all duration-300 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 overflow-hidden w-[120px] shadow-sm"
            title="Start Diagnostics"
          >
            <div className="flex items-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-600 dark:text-gray-400">Sys: OK</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-2 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0 text-red-500">
              <FaBug size={12} className="animate-pulse" />
              <span>DEBUG</span>
            </div>
          </button>
        </div>

        {/* MOBILE MENU ITEMS :  */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/95 dark:bg-[#050414]/95 backdrop-blur-xl z-50 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-800 dark:text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`hover:text-[#8245ec] dark:hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec] dark:text-[#7547c5] font-bold" : ""
                  }`}
                >
                  <button
                    className="cursor-pointer"
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/JayantDewangan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#8245ec] dark:hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jayant-dewangan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#8245ec] dark:hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>

              <div className="flex items-center justify-center space-x-4 w-full">
                {/* MOBILE LIVE CLOCK */}
                <div className="flex items-center space-x-2 bg-gray-200 dark:bg-[#1a163a] px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 font-mono shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {time.toLocaleTimeString('en-US', { hour12: false })}
                  </span>
                </div>
                
                {/* HIDDEN BUG GAME TRIGGER - SYSTEM STATUS PILL */}
                <button 
                  onClick={onStartBugGame}
                  className="group relative flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 overflow-hidden w-[105px] shadow-sm"
                  title="Start Diagnostics"
                >
                  <div className="flex items-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-8">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-gray-600 dark:text-gray-400">Sys: OK</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-2 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0 text-red-500">
                    <FaBug size={14} className="animate-pulse" />
                    <span>DEBUG</span>
                  </div>
                </button>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
