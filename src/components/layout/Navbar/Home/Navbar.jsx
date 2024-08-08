/* eslint-disable react/prop-types */
import NavItem from "../NavItem";
import LogoSVG from "../../../ui/LogoSVG";
import TwitterSVG from "../../../ui/TwitterSVG";
import GithubSVG from "../../../ui/GithubSVG";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = (props) => {
  return (
    <div
      className="flex flex-row justify-evenly items-center h-1/6 w-full sm:p-8 p-4"
    >
      <NavItem
        className="items-center justify-start h-full w-2/5"
        item={
          <div className="flex flex-row gap-2">
            <TwitterSVG className="h-7 w-7 dark:fill-darkMode-text fill-whiteMode-text" id={props.id}/>
            <GithubSVG className="h-7 w-7 dark:fill-darkMode-text fill-whiteMode-text" id={props.id}/>
          </div>
        }
      />
      <NavItem
        className="items-center justify-center w-1/5"
        item={
          <LogoSVG className="dark:fill-darkMode-text fill-whiteMode-text" />
        }
      />
      <NavItem
        className="items-center justify-end h-full w-2/5 p-5"
        item={<DarkModeToggle />}
        id={props.id}
      />
    </div>
  );
};

export default Navbar;
