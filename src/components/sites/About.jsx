/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import Asset from "../ui/Asset";
import { useEffect } from "react";
import { aboutAnimation } from "../animations/aboutAnimation";
import AboutNavbar from "../layout/Navbar/Other/OtherNavbar";
import { AboutHeader } from "../layout/AboutHeader";
import SkillSet from "../layout/Navbar/About/SkillSet";

const Projects = () => {
  useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <>
      <div className="w-screen min-h-screen sm:min-h-96 flex flex-col items-center bg-gray-300 dark:bg-darkMode-bg pb-8">
        <AboutNavbar name="About"/>
        <AboutHeader />
      </div>
      <SkillSet />
      <Asset />
    </>
  );
};

export default Projects;
