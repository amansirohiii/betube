import { useDispatch, useSelector } from "react-redux";
import { BACKEND_SEARCH_API} from "../utils/constants";
import { toggleMenu } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../redux/searchSlice";
import hamBurgerIcon from "../assets/hamburger.svg";
import youtubeIcon from "../assets/youtube.svg";
import bellIcon from "../assets/bell.svg";
import micIcon from "../assets/mic.svg";
import createIcon from "../assets/create.svg";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);
  console.log(searchSuggestions);
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log(searchQuery);
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(BACKEND_SEARCH_API+ searchQuery
      );
      const json = await response.json();
      setSearchSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  if (!searchSuggestions) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white select-none">
      <div className="flex flex-row justify-between items-center px-4 py-3">
        <div className="flex flex-row items-center">
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 cursor-pointer">
            <img
              className="h-6 mt-2 ml-2"
              onClick={toggleMenuHandler}
              src={hamBurgerIcon}
              alt="hamBurgerIcon"
            />
          </div>
          <img className="w-auto mx-4" src={youtubeIcon} alt="betube-logo" />
        </div>
        <div className="relative">
          <div className="flex flex-row relative">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onFocus={(e) => setShowSuggestions(true)}
              onBlur={(e) => setShowSuggestions(false)}
              className="border rounded-l-full w-[572px] h-10 pl-5 outline-none"
              type="text"
              placeholder="Search"
              name=""
              id=""
            />
            <button className="border rounded-r-full w-16 h-10 bg-gray-100">
              <img
                alt="search-icon"
                className="h-5 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
              />
            </button>
            <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer">
              <img className="mt-2 ml-2" alt="mic-icon " src={micIcon} />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute hover:bg-gray-200 hover:rounded-full w-9 h-9 right-[8.2rem] top-[2px]"
              >
                X
              </button>
            )}
          </div>
          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="absolute bg-white w-[560px] max-h-[400px] shadow-lg border rounded-lg overflow-y-auto left-3 top-10 z-50 text-left">
              <ul className="py-3">
                {searchSuggestions.map((item) => (
                  <li
                    key={item}
                    className="my-1 p-1 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      className="mr-5 h-4 ml-3 inline-block"
                      alt="search-icon"
                      src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-row-reverse justify-around">
          <div className="w-10 h-10 ml-5 cursor-pointer">
            <img
              className="mt-1 ml-2 h-7 rounded-full"
              alt="user-icon"
              src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            />
          </div>
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer relative">
            <img className="mt-2 ml-2" alt="bell-icon " src={bellIcon} />
            <div className="absolute bg-red-700 text-white w-6 h-5 rounded-2xl border-2 border-white top-[3px] left-5 text-xs text-center">
              9+
            </div>
          </div>
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer">
            <img className="mt-2 ml-2" alt="create-icon " src={createIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
