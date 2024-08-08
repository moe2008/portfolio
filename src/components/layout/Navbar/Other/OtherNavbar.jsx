/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DarkModeToggle from "../DarkModeToggle";
import BackButton from "../../../ui/BackButton";

const OtherNavbar = (props) => {
  return (
    <div className="w-full h-1/5 flex flex-row items-center justify-evenly p-2 sm:p-8">
      <div className="w-1/3 h-full flex items-center justify-start  z-40">
        <BackButton className="navItemAnim" />
      </div>
      <div className="w-1/3 h-full flex items-center justify-center  z-40">
        <h1 className="text-whiteMode-text dark:text-darkMode-text font-Technor text-xl sm:text-5xl navItemAnim">
          {props.name}
        </h1>
      </div>

      <div className="navItemAnim w-1/3 h-full flex items-center justify-end  z-40">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default OtherNavbar;
