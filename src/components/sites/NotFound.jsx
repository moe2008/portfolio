import React, { useEffect } from "react";
import Blob from "../ui/Blob";
import { notFoundAnimation } from "../animations/notFoundAnimation";
import DarkModeToggle from "../layout/Navbar/DarkModeToggle";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    notFoundAnimation();
  }, []);

  return (
    <div className="flex flex-col relative w-screen h-screen bg-gray-300 dark:bg-darkMode-bg">
      <div className="absolute right-8 top-4">
      <DarkModeToggle />
      </div>
      
      <Blob id="blob404" />
      <div className="m-auto absolute top-40p left-1/2 -translate-y-2/4 -translate-x-1/2 flex flex-col gap-4">
        <h1
          className="text-8xl sm:text-9xl tracking-wide font-Supreme select-none dark:text-darkMode-text text-whiteMode-text"
          id="notFoundText"
        >
          404
        </h1>
        <h2
          id="notFoundText"
          className="dark:text-darkMode-text text-whiteMode-text"
        >
          Page not found
        </h2>
        <Link id="notFoundText" to="/w" className="">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
