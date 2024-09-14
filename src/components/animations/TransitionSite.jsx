/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
const TransitionSite = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-300 dark:bg-darkMode-bg">
      <SwitchTransition>
        <Transition
          key={location.pathname}
          appear
          timeout={500}
          onEnter={(node) => {
            gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
            gsap
              .timeline({
                paused: true,
              })
              .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
              .to(node, { scale: 1, duration: 0.25 })
              .play();
          }}
          onExit={(node) => {
            gsap
              .timeline({ paused: true })
              .to(node, { scale: 0.6, duration: 0.2 })
              .to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
              .play();
          }}
        >
          {children}
        </Transition>
      </SwitchTransition>
    </div>
  );
};

export default TransitionSite;
