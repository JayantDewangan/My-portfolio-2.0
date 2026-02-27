import React, { useState } from "react";
import { projects } from "../../constants";
import { LuGithub } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Work = () => {

  const [ selectedProject, setSelectedProject ] = useState(null);

  function handleOpenModel(project){ 
    setSelectedProject(project);
  }

  function handleCloseModel(project){
    setSelectedProject(null);
  }

  return (
    <>
      <section
        id="work"
        className="scroll-mt-28 pb-24 -mt-10 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      >
        {/* SECTION TITLE :  */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
          </p>
        </motion.div>

        {/* PROJECT GRID : */}
        <div className="grid gap-12 grod-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {
            projects.map((project, index)=>(
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
                className="border border-gray-200 dark:border-white bg-white dark:bg-gray-900 backdrop-blur-md rounded-2xl shadow-lg dark:shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
                onClick={()=>{handleOpenModel(project)}}
              >
                <div className="p-4">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl border border-gray-100 dark:border-none"/>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 mb-4 pt-5 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    {project.tags.map((tag,index)=>(
                      <span key={index} className="inline-block bg-purple-100 dark:bg-[#251f38] text-xs font-semibold text-purple-700 dark:text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          }       
        </div>

        {/* Model Container :  */}
        {
          selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/90 p-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-gray-200 dark:border-gray-800">
                <div className="flex justify-end p-4">
                  <button onClick={handleCloseModel} className="text-gray-900 dark:text-white text-3xl font-bold hover:text-purple-500 cursor-pointer">
                    &times;
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="w-full flex justify-center bg-gray-50 dark:bg-gray-900 px-4">
                    <img src={selectedProject.image} alt={selectedProject.title} className="lg:w-full w-[95%] object-contain rounded-xl border border-gray-200 dark:border-none"/>
                  </div>
                  <div className="p-6">
                    <h3 className="lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-md">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400 mb-6 lg:text-base text-xs"> 
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag,index)=>(
                          <span key={index} className="bg-purple-100 dark:bg-[#251f38] text-xs font-semibold text-purple-700 dark:text-purple-500 rounded-full px-2 py-1 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="w-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 border border-gray-300 dark:border-none hover:bg-gray-200 dark:hover:bg-purple-800 px-4 py-2 lg:px-6 lg:py-2 rounded-xl lg:text-xl text-sm font-semibold text-center cursor-pointer transition-colors">View Code</a>

                      <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="w-1/2 bg-purple-600 text-white hover:bg-purple-700 dark:hover:bg-purple-800 px-4 py-2 lg:px-6 lg:py-2 rounded-xl lg:text-xl text-sm font-semibold text-center cursor-pointer transition-colors">Live Preview</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        <div className="flex justify-center mt-23">
          <a href="https://github.com/JayantDewangan?tab=repositories" target="_blank" className="text-white cursor-pointer px-5 py-5 bg-purple-700 rounded-full flex justify-center items-center gap-3 hover:bg-purple-800 transition-transform hover:-translate-y-1 hover:gap-4">
            <span className="text-xl"><LuGithub /></span> <span className="font-medium">View More on GitHub</span> <span><FaArrowRightLong /></span>
          </a>
        </div>
        
      </section>
    </>
  );
};

export default Work;
