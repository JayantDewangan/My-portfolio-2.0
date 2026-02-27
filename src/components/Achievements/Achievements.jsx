import React from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section
      id="achievements"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 lg:mt-16 text-white"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-[#8245ec]">Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f0c29] p-6 rounded-2xl border border-[#8245ec]/30 shadow-[0_0_15px_rgba(130,69,236,0.1)] hover:shadow-[0_0_20px_rgba(130,69,236,0.3)] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#8245ec]/20 p-3 rounded-xl border border-[#8245ec]/50">
                <span className="text-2xl">{item.icon || "🏆"}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                <p className="text-sm font-semibold text-[#8245ec] mb-2">{item.issuer}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
