import React, { useEffect, useRef, useState } from "react";
import { education } from "../../constants";

const Education = () => {
  const itemRefs = useRef([]);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);

            // Animate timeline line height
            if (lineRef.current) {
              const percent =
                ((index + 1) / education.length) * 100;
              lineRef.current.style.height = `${percent}%`;
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient scroll-mt-28 -mt-15"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Static line */}
        <div className="absolute left-6 sm:left-1/2 top-0 h-full w-0.5 bg-white/20 sm:-translate-x-1/2" />

        {/* Animated line */}
        <div
          ref={lineRef}
          className="absolute left-6 sm:left-1/2 top-0 w-0.5 bg-white sm:-translate-x-1/2 transition-all duration-700"
          style={{ height: "0%" }}
        />

        {/* Entries */}
        <div className="space-y-24">
          {education.map((edu, index) => {
            const isActive = index <= activeIndex;

            return (
              <div
                key={edu.id}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-12 items-start pl-12 sm:pl-0"
              >
                {/* Card */}
                <div
                  className={`w-full ${
                    index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"
                  }`}
                >
                  <div
                    className={`bg-gray-900/80 backdrop-blur-md border rounded-2xl p-6 transition-all duration-700
                    ${
                      isActive
                        ? "border-[#8245ec] shadow-[0_0_25px_rgba(130,69,236,0.6)] translate-y-0 opacity-100"
                        : "border-white/10 translate-y-10 opacity-0"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-gray-400">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.date}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-400 font-semibold">
                      Grade: {edu.grade}
                    </p>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline Circle */}
                <div
                  className="
                    absolute
                    left-6
                    top-6
                    sm:left-1/2
                    sm:top-1/2
                    -translate-x-1/2
                    sm:-translate-y-1/2
                    z-10
                  "
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 border-4 flex items-center justify-center transition-all duration-700
                    ${
                      isActive
                        ? "border-[#8245ec] shadow-[0_0_20px_rgba(130,69,236,0.8)] scale-110"
                        : "border-white/30 scale-90"
                    }`}
                  >
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
