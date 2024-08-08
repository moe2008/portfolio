/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SliderButton = (props) => {
  return (
    <button
      onClick={() => {
        if (props.link) {
          window.open(props.link, "_blank");
        } else {
          console.error("Link is not provided");
        }
      }}
      className={`dark:text-darkMode-text sm:w-1/3 sm:text-sm text-xs text-darkMode-text rounded-none cursor-none ${props.classes}`}
    >
      {props.text}
    </button>
  );
};

export default SliderButton;
