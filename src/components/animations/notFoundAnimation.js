/* eslint-disable no-unused-vars */
import gsap from "gsap";

export const notFoundAnimation = () => {
  const blob = document.querySelector("#blob404");

  const animation2 = gsap.fromTo(
    "#blob404",
    {
      opacity: 0,
      scale: 0,
    },
    { scale: 1, opacity: 1, stagger: 0.5, duration: 1.2, ease: "bounce" }
  );

  const animation3 = gsap.fromTo(
    "#notFoundText",
    { opacity: 0, x: 10, y: 80 },
    { x: 0, y: 0, opacity: 1, stagger: 0.5, duration: 1.8 }
  );

  animation2.play();
  animation3.play();
};
