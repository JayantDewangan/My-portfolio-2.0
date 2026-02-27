import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
    <>
      <section id='skills' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans  scroll-mt-28 .clip-path-custom'>
        {/* Section Title :  */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl sm:text-4xl font-bold'>SKILLS</h2>
          <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
          <p className='text-gray-400 mt-4 text-lg font-semibold'>A collection of my technical skills and expertise honed through various projects and experiences.</p>
        </div>

        {/* Skills Categories :  */}
        <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
          {
            SkillsInfo.map((category)=>(
              <div key={category.title} className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>{category.title}</h3>
                {/* Skills item - 3 per row on larger screens */}
                <Tilt 
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                    {
                      category.skills.map((skills)=>(
                        <div key={skills.name} className='flex flex-col items-center justify-center gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center'>
                          <img src={skills.logo} alt={skills.name} className='w-6 h-6 sm:w-8 sm:h-8'/>
                          <span className='text-xs sm:text-xs text-gray-300'>
                            {skills.name}
                          </span>
                        </div>
                      ))
                    }
                  </div>
                </Tilt>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Skills
