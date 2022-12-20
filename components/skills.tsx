import React from 'react'
import s from'../styles/skills.module.css'



const Skills = () => {
  return (
    <div className='bg-black text-white'>
      <div className='min-h-screen max-w-5x mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold'>
          <div className='leading-[1.15]'>
            <div className={s.skillText}>
            we're experts in samsung, <span className='text-red-100'>apple</span>,  <span className='text-red-300'>xiaomi</span>, asus, <span className='text-blue-200'>oneplus</span>, etc every brand and every model's mobile <span className='text-yellow-400'>phone repair.</span><br/>
            <div className='mr-auto ml-auto text-center'>
            <span className={`${s.skillText} mt-[200px]  text-[50px] text-center inline-block after:content-['_']  text-white font-mono -100 -200 `}>
              SELECT YOUR MOBILE BRAND 
            </span>
            </div>
      
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills
