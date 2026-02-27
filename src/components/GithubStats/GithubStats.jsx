import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import VoxelDog from "./VoxelDog";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const GithubStats = () => {
  const { theme } = useTheme();
  return (
    <section
      id="github-stats"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans -mt-12"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-0 relative z-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          GitHub <span className="text-[#8245ec]">Stats</span>
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
          Here is my open-source contribution graph over the past year.
        </p>
      </motion.div>

      <VoxelDog />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#0f0c29] rounded-2xl border border-gray-200 dark:border-[#8245ec]/30 shadow-md dark:shadow-[0_0_15px_rgba(130,69,236,0.2)] md:p-10 relative z-10 max-w-5xl mx-auto mt-4"
      >
        <div className="overflow-x-auto w-full flex justify-center pb-4 custom-scrollbar">
          <GitHubCalendar
            username="JayantDewangan"
            colorScheme={theme === "dark" ? "dark" : "light"}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#4a1c8f", "#6b2aa8", "#8245ec", "#a855f7"],
            }}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
          />
        </div>

        {/* GitHub stats cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 w-full max-w-3xl">
          <a
            href="https://github.com/JayantDewangan"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`https://github-readme-stats-eight-theta.vercel.app/api?username=JayantDewangan&show_icons=true&theme=omni&bg_color=${theme==='dark' ? '0f0c29' : 'ffffff'}&text_color=${theme==='dark' ? 'fff' : '1f2937'}&icon_color=8245ec&border_color=8245ec&hide_border=false`}
              alt="JayantDewangan's GitHub Stats"
              className="max-h-48"
            />
          </a>
          <a
            href="https://github.com/JayantDewangan"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=JayantDewangan&layout=compact&theme=omni&bg_color=${theme==='dark' ? '0f0c29' : 'ffffff'}&text_color=${theme==='dark' ? 'fff' : '1f2937'}&title_color=8245ec&border_color=8245ec&hide_border=false`}
              alt="Top Languages"
              className="max-h-48"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GithubStats;
