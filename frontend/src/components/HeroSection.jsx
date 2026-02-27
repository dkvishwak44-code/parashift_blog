import React from 'react'
import Hero_Image from '../assets/desktop_hero_img.webp';
import mob_hero_img from "../assets/mob_hero_img.webp";

const HeroSection = () => {
  return (
    <div className='w-full h-full bg-white'>
      <div className="relative w-full overflow-hidden h-147.5">
        <img src={Hero_Image} alt="" className='w-full h-147.5 object-cover md:block hidden' />
        <img src={mob_hero_img} alt="" className='w-full h-147.5 object-cover md:hidden! block' />
        <div className='absolute lg:bottom-15 lg:left-12.5 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-10 md:left-10 bottom-10 left-5 text-white'>
          <div className='w-30 border-gray-400 border px-1 py-2 mb-4 bg-[#0000001F] '>Home / media</div>
          <div className=' lg:text-7xl md:text-6xl text-5xl '>
            <div className=''>
              <h1 className='mb-3'>Latest _________</h1>
              <h1> from Horizon </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
