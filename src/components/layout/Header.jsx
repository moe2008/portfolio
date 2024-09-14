/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Blob from "../ui/Blob";
import { useRef } from "react";
import gsap from "gsap";
import handLight from "../../assets/handLightMode.svg";
import handDark from "../../assets/handDarkMode.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const scopeContainer = useRef();

  const onNavItemEnter = (e) => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    gsap.to("#cursor", {
      duration: 0.7,
      css: {
        backgroundImage: isDarkMode ? `url(${handDark})` : `url(${handLight})`,
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "3rem",
        width: "3rem",
        filter: "blur(0.5px)",
      },
    });
    gsap.to(e.target, {
      duration: 0.3,
      scale: 1.2,
      ease: "Power0.easeInOut",
    });
  };

  const onNavItemLeave = () => {
    gsap.to("#cursor", {
      duration: 0.7,
      css: {
        backgroundImage: "",
        height: "2rem",
        width: "2rem",
        filter: "blur(2px)",
      },
    });
    gsap.to(".scaleAnim", {
      duration: 0.3,
      scale: 1.0,
      ease: "Power0.easeInOut",
    });
  };

  return (
    <div className="flex flex-col relative w-full h-full">
      <Blob id={props.id} />
      <div
        className="m-auto absolute top-40p left-1/2 -translate-y-2/4 -translate-x-1/2"
        ref={scopeContainer}
      >
        <h1
          className="text-8xl sm:text-9xl tracking-wide font-Supreme select-none dark:text-darkMode-text text-whiteMode-text"
          id="text"
        >
          modev
        </h1>
      </div>
      <div className="flex absolute top-70p left-1/2 -translate-y-2/4 -translate-x-1/2 gap-4 sm:gap-12 font-Technor">
        <div className="p-2" id={props.id}>
          <Link to="/about">
            <h1
              className="text-3xl sm:text-4xl select-none dark:text-darkMode-text text-whiteMode-text scaleAnim cursor-none"
              onMouseEnter={onNavItemEnter}
              onMouseLeave={onNavItemLeave}
              id={props.id}
            >
              About
            </h1>
          </Link>
        </div>
        <div className="p-2" id={props.id}>
          <Link to="/projects">
            <h1
              className="text-3xl sm:text-4xl select-none dark:text-darkMode-text text-whiteMode-text scaleAnim cursor-none"
              onMouseEnter={onNavItemEnter}
              onMouseLeave={onNavItemLeave}
              id={props.id}
            >
              Projects
            </h1>
          </Link>
        </div>
        <div className="p-2">
          <Link to="/contact">
            <h1
              className="text-3xl sm:text-4xl select-none dark:text-darkMode-text text-whiteMode-text scaleAnim cursor-none"
              onMouseEnter={onNavItemEnter}
              onMouseLeave={onNavItemLeave}
              id={props.id}
            >
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
