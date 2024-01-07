import { HAMBURGER_MENU, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8" src={HAMBURGER_MENU} alt="menu" />
        <img className="w-auto mx-4" src={YOUTUBE_LOGO} alt="betube-logo" />
      </div>
      <div className="col-span-10 text-center">
        <input className="border border-gray-400 w-1/2 h-8 rounded-l-full" type="text" name="" id="" />
        <button className="border border-gray-400 h-8 rounded-r-full px-2 border-l-0 bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
