/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SliderButton = (props) => {
  return (
    <button
      className={`dark:text-darkMode-text sm:w-1/3 sm:text-sm text-xs text-darkMode-text rounded-none cursor-none ${props.classes}`}
    >
      {props.text}
    </button>
  );
};

export default SliderButton;
