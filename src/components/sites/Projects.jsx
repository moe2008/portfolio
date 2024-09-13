/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import SiteWrapper from "../layout/SiteWrapper";
import OtherNavbar from "../layout/Navbar/Other/OtherNavbar";
import gsap from "gsap";
import Slides from "../ui/Slides";
import useContentfulData from "../../helpers/useContentfulData";

const About = () => {
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const targetRef = useRef(0);
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);
  const markerWrapperRef = useRef(null);
  const activeSlideRef = useRef(null);

  const { entries, loading, error } = useContentfulData();

  useEffect(() => {
    let target = 0;
    let current = 0;
    let ease = 0.075;

    const slider = document.querySelector(".slider");
    const sliderWrapper = sliderWrapperRef.current;
    const markerWrapper = markerWrapperRef.current;
    const activeSlide = document.querySelector(".active-slide");

    if (!slider || !sliderWrapper || !markerWrapper || !activeSlide) {
      return;
    }

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

      gsap.set(sliderWrapper, {
        x: -current,
      });

      let moveRatio = current / maxScroll;

      let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
      let markerMove = 70 + moveRatio * markerMaxMove;
      gsap.set(markerWrapper, {
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
  });

  return (
    <SiteWrapper>
      <OtherNavbar name="Projects" />
      <div className="marker-wrapper" ref={markerWrapperRef}>
        <div className="marker bg-black dark:bg-white">
          <div className="grab"></div>
        </div>
        <div className="active-slide text-whiteMode-text dark:text-darkMode-text">
          1/10
        </div>
      </div>
      <div className="slider">
        <div className="slider-wrapper" ref={sliderWrapperRef}>
          <div className="text-black dark:text-white opacity-70">Scroll</div>

          {!loading &&
            entries.map((project) => (
              <Slides
                key={project.fields.name}
                projectName={project.fields.name}
                img={project.fields.image.fields.file.url}
                react={project.fields.techStack.react}
                chakra={project.fields.techStack.chakra}
                firebase={project.fields.techStack.firebase}
                stripe={project.fields.techStack.stripe}
                nextjs={project.fields.techStack.next}
                tailwind={project.fields.techStack.tailwind}
                gitlink={project.fields.gitlink}
                demolink={project.fields.demolink}
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
