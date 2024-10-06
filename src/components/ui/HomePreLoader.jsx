import LogoSVG from "./LogoSVG";

const HomePreLoader = () => {
  return (
    <div
      id="preloaderContainer"
      className="flex w-full h-full items-center justify-center"
    >
      <LogoSVG
        className="dark:fill-darkMode-text fill-whiteMode-text h-"
        height="w-80 h-80 md:h-96 md:w-96"
        id="LogoSVG"
        id2="LogoSVG2"
        id3="LogoSVG3"
      />
    </div>
  );
};

export default HomePreLoader;
