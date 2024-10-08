/* eslint-disable no-unused-vars */
import React from "react";
import iam from "../../assets/aboutimg.jpg";

export const AboutHeader = () => {
  return (
    <div className="w-full min-h-4/5 overflow-x-hidden flex items-center flex-col lg:flex-row justify-between text-whiteMode-text dark:text-darkMode-text font-Technor gap-6 sm:gap-0 sm:p-4">
      <div className="h-full flex flex-col justify-center lg:w-1/2 w-2/3 order-2 lg:order-1 text-xs text-left gap-5 sm:gap-4 ml-4 mr-4 pt-8">
        <h1 className="text-5xl gradientText aboutText">MODEV</h1>
        <h1 className="text-3xl text-whiteMode-text dark:text-darkMode-text aboutText">
          Full Stack Developer
        </h1>
        <h1 className="text-2xl text-whiteMode-text dark:text-darkMode-text font-Supreme aboutText">
          I specialize in modern Fullstack Development using the MERN stack,
          creating dynamic web applications with seamless user experiences. My
          expertise also extends to crafting engaging animations with GSAP,
          bringing websites to life with smooth, interactive motion. Let's build
          something exceptional together.
        </h1>
      </div>
      <div className="order-1 lg:order-2 h-full w-[70%] md:w-1/2 lg:w-2/5 flex items-center justify-center">
        <img
          src={iam}
          className="lg:h-1/3 h-1/3 sm:max-w-[85%] hero-image imgContainer order-1 sm:order-2 "
        />
      </div>
    </div>
  );
};
