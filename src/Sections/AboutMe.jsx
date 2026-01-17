// AboutMe.js
import React from "react";
import Button from "../Components/Button";

const AboutMe = () => {
  const handleResumeClick = () => {
    console.log("Button clicked"); 
    window.open("/Vivek_resume.pdf", "_blank"); 
  };

  return (
    <section id="aboutMe" className="flex flex-col">
      <h1 className="font-palanquin font-bold text-center text-5xl py-2">
        About <span className="text-blue-300">Me</span>
      </h1>

      <div
        data-aos="fade-up"
        className="flex max-lg:flex-col bg-black rounded-3xl my-5"
      >
        <div className="w-[0%] max-lg:w-full flex justify-center items-center py-10">
          
        </div>
        <div className="w-[100%] max-lg:w-full flex justify-center flex-col p-5">
          <h1 className="font-palanquin text-4xl font-bold">
            I'm Vivek Chaudhary
          </h1>
          <p className="font-bold text-blue-300 mt-5 font-palanquin">
            Full Stack Developer
          </p>
          <p className="font-montserrat mt-5 leading-normal text-slate-300">
            Hello! I’m Vivek Chaudhary, a Full-Stack Developer passionate about
            building seamless, user-friendly, and scalable digital experiences.
            I work with modern web technologies to develop responsive websites,
            APIs, and full-stack applications with a focus on performance, clean
            code, and real-world usability. With hands-on experience in
            frontend, backend, and AI-integrated projects, I enjoy turning ideas
            into working products that solve real problems. I love collaborating
            in fast-paced environments and continuously learning new tools and
            technologies to deliver meaningful solutions.
          </p>

          <div className="my-10">
            <Button
              label="Check Resume"
              onClick={handleResumeClick}
              className="btn"
              alt="Check Resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
