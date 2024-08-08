/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import SiteWrapper from "../layout/SiteWrapper";
import OtherNavbar from "../layout/Navbar/Other/OtherNavbar";
import gsap from "gsap";
import Slides from "../ui/Slides";
import { Projects } from "../../helpers/Projects";

const About = () => {
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const targetRef = useRef(0);

  useEffect(() => {
    let target = 0;
    let current = 0;
    let ease = 0.075;

    const slider = document.querySelector(".slider");
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const markerWrapper = document.querySelector(".marker-wrapper");
    const activeSlide = document.querySelector(".active-slide");

    let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function updateActiveSlideNumber(markerMove, markerMaxMove) {
      const partWidth = markerMaxMove / 5;
      let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
      currentPart = Math.min(5, currentPart);
      activeSlide.textContent = `${currentPart}/5`;
    }

    function update() {
      current = lerp(current, target, ease);

      gsap.set(".slider-wrapper", {
        x: -current,
      });

      let moveRatio = current / maxScroll;

      let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
      let markerMove = 70 + moveRatio * markerMaxMove;
      gsap.set(".marker-wrapper", {
        x: markerMove,
      });

      updateActiveSlideNumber(markerMove, markerMaxMove);

      requestAnimationFrame(update);
    }

    function handleWheel(e) {
      target += e.deltaY;
      target = Math.max(0, target);
      target = Math.min(maxScroll, target);
    }

    function handleTouchStart(e) {
      startXRef.current = e.touches[0].clientX;
      startYRef.current = e.touches[0].clientY;
      targetRef.current = target;
    }

    function handleTouchMove(e) {
      const dx = e.touches[0].clientX - startXRef.current;
      const dy = e.touches[0].clientY - startYRef.current;

      target = targetRef.current - dx;
      target = Math.max(0, target);
      target = Math.min(maxScroll, target);
    }

    window.addEventListener("wheel", handleWheel);
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);

    update();

    return () => {
      window.removeEventListener("wheel", handleWheel);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <SiteWrapper>
      <OtherNavbar name="Projects"/>
      <div className="marker-wrapper">
        <div className="marker bg-black dark:bg-white">
          <div className="grab"></div>
        </div>
        <div className="active-slide text-whiteMode-text dark:text-darkMode-text">
          1/10
        </div>
      </div>
      <div className="slider">
        <div className="slider-wrapper">
          <div className="text-black dark:text-white opacity-70">Scroll</div>
          {Projects.map((project) => (
            <Slides
              key={project.name}
              projectName={project.name}
              pic={project.pic}
              react={project.techstack.react}
              nextjs={project.techstack.nextjs}
              chakra={project.techstack.chakra}
              sanity={project.techstack.sanity}
              stripe={project.techstack.stripe}
              tailwind={project.techstack.tailwind}
              firebase={project.techstack.firebase}
            />
          ))}
          <div className="text-black dark:text-white opacity-70">End</div>
        </div>
      </div>
      <div />
    </SiteWrapper>
  );
};

export default About;
