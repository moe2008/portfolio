/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import content from "../../assets/dp.png";
import SliderButton from "./SliderButton";
import ChakraUI from "../../assets/Icons/ChakraUI";
import ReactIcon from "../../assets/Icons/ReactIcon";
import Firebase from "../../assets/Icons/Firebase";
import NextJS from "../../assets/Icons/NextJs";
import Sanity from "../../assets/Icons/Sanity";
import TailwindIcon from "../../assets/Icons/TailwindIcon";
import PropTypes from "prop-types";
import StripeIcon from "../../assets/Icons/StripeIcon";

const Slides = (props) => {
  const twClasses = "sm:h-8 sm:w-8 h-4 w-4 fill-white";
  return (
    <div className="slide flex flex-col bg-slideBg dark:bg-slideBg">
      <div className="sliderHeader h-1/4 text-darkMode-text flex items-center justify-center">
        <h1 className="font-Technor text-xl sm:text-4xl">{props.projectName}</h1>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="h-full imgContainer">
          <img src={content} className="sm:w-2/3" />
          <div className="colorOverlay"></div>
        </div>
      </div>
      <div className="flex flex-row h-1/4 items-center">
        <div className="w-1/2 h-full flex justify-center">
          <span className="flex items-center justify-evenly w-full">
            {props.react && <ReactIcon class={twClasses} />}
            {props.chakra && <ChakraUI class={twClasses} />}
            {props.firebase && <Firebase class={twClasses} />}
            {props.stripe && <StripeIcon class={twClasses}/>}
            {props.nextjs && <NextJS class={twClasses} />}
            {props.sanity && <Sanity class={twClasses} />}
            {props.tailwind && <TailwindIcon class={twClasses} />}
          </span>
        </div>
        <div className="w-1/2 flex flex-row justify-evenly items-center dark:text-whiteMode-text">
          <SliderButton text="Visit Github" classes="bg-accentColors-lila" />
          <SliderButton text="Live Demo" classes="bg-accentColors-green" />
        </div>
      </div>
    </div>
  );
};

Slides.propTypes = {
  projectName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  react: PropTypes.bool,
  chakra: PropTypes.bool,
  firebase: PropTypes.bool,
  sanity: PropTypes.bool,
  tailwind: PropTypes.bool,
  nextjs: PropTypes.bool,
  stripe: PropTypes.bool,
};

Slides.defaultProps = {
  react: false,
  nextjs: false,
  chakra: false,
  firebase: false,
  sanity: false,
  tailwind: false,
  stripe: false,
};

export default Slides;
