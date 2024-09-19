import React from 'react'
import { SRMU, CPI } from '../assets/images'

const Education = () => {
  return (
    <section id='education' className='flex flex-col items-center'>
        <h1 className='text-center text-5xl font-bold font-palanquin'>Education</h1>
        <p className='text-center text-slate-300 mt-5 '>My education has been a journey of self-discovery and growth. My educationl detail are as follows</p>
        <div data-aos="fade-up" className='max-w-[840px] mt-7 bg-black p-5 rounded-xl border-[1px] border-blue-300'>
            <div>
                
                <h1 className='font-bold text-lg font-palanquin leading-normal'>Shri Ramswaroop Memorial University, Lucknow </h1>
                <p className='text-sm font-bold font-palanquin'>Bachelor of Technology - <span className='text-slate-300 font-montserrat'>BTech, Computer Science and Engineering</span></p>
                <p className='text-sm font-montserrat text-slate-300'>July 2021 - Aug 2025</p>
            </div>
            <p className='mt-3 text-sm font-montserrat text-slate-300'>I am currently pursuing a Bachelor's degree in Compter Science and Engineering at Shri Ramswaroop Memorial University, Lucknow. I have completed 6 semesters. I have taken courses in Data Structures & Algorithm, FullStack Web Developer.</p>
        </div>
        <div data-aos="fade-up" className='max-w-[840px] mt-7 bg-black p-5 rounded-xl border-[1px] border-blue-300'>
            <div>
                
                <h1 className='font-bold text-lg font-palanquin leading-normal'>H R Inter College, Sant Kabir Nagar</h1>
                <p className='text-sm font-bold font-palanquin'>UP Board(XII)</p>
                <p className='text-sm font-montserrat text-slate-300'>2021</p>
            </div>
            <p className='mt-3 text-sm font-montserrat text-slate-300'>I completed my class 12 inter in 2021 at H R Inter College, Sant Kabir Nagar. where I studied Science with Computer Application.</p>
        </div>
        <div data-aos="fade-up" className='max-w-[840px] mt-7 bg-black p-5 rounded-xl border-[1px] border-blue-300'>
            <div>
            
                <h1 className='font-bold text-lg font-palanquin leading-normal'>H R Inter College, Sant Kabir Nagar</h1>
                <p className='text-sm font-bold font-palanquin'>UP Board(X)</p>
                <p className='text-sm font-montserrat text-slate-300'>2019</p>
            </div>
            <p className='mt-3 text-sm font-montserrat text-slate-300'>I completed my class 10 high school in 2019 H R Inter College, Sant Kabir Nagar. where I studied Science with Computer Application.</p>
        </div>
    </section>
  )
}

export default Education