import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-[#8245ec] text-white rounded-full shadow-[0_0_15px_rgba(130,69,236,0.6)] hover:bg-[#a855f7] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
