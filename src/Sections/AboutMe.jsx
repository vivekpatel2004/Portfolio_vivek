// AboutMe.js
import React from 'react';
import Button from '../Components/Button'; // Ensure this path is correct

const AboutMe = () => {
  const handleResumeClick = () => {
    console.log("Button clicked");  // Debug log to ensure the function is triggered
    window.open('/Portfolio_vivek/cv_vivek.pdf', '_blank');// Opens the PDF in a new tab
  };

  return (
    <section id='aboutMe' className='flex flex-col'>
      <h1 className='font-palanquin font-bold text-center text-5xl py-2'>
        About <span className='text-blue-300'>Me</span>
      </h1>
      
      <div data-aos="fade-up" className='flex max-lg:flex-col bg-black rounded-3xl my-5'>
        <div className='w-[0%] max-lg:w-full flex justify-center items-center py-10'>
          {/* Add any content or images here if needed */}
        </div>
        <div className='w-[100%] max-lg:w-full flex justify-center flex-col p-5'>
          <h1 className='font-palanquin text-4xl font-bold'>I'm Vivek Chaudhary</h1>
          <p className='font-bold text-blue-300 mt-5 font-palanquin'>Frontend Developer</p>
          <p className='font-montserrat mt-5 leading-normal text-slate-300'>
            Hello! I’m Vivek Chaudhary, a passionate web developer with a keen interest in creating seamless, user-friendly, and visually appealing digital experiences. I specialize in building responsive websites and applications using the latest web technologies, focusing on performance, accessibility, and clean code. With a strong foundation in frontend development, I have worked on various projects, ranging from simple landing pages to full-stack applications. I thrive in fast-paced environments and love collaborating with teams to create innovative solutions that meet both user and business needs.
          </p>
          <div className='my-10'>
            <Button label="Check Resume" onClick={handleResumeClick} className='btn' alt="Check Resume"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
