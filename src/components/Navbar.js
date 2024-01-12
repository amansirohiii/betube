import { useDispatch, useSelector } from "react-redux";
import { BACKEND_SEARCH_API } from "../utils/constants";
import { setShowSuggestions, toggleMenu } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { setCacheResults, setSearchQuery } from "../redux/searchSlice";
import hamBurgerIcon from "../assets/hamburger.svg";
import youtubeIcon from "../assets/youtube.svg";
import bellIcon from "../assets/bell.svg";
import micIcon from "../assets/mic.svg";
import createIcon from "../assets/create.svg";
import { Link, useNavigate } from "react-router-dom";
import { addSearchVideos, removeSearchVideos } from "../redux/videosSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchSuggestions, setSearchSuggestions] = useState("");
  // const [showSuggestions, setShowSuggestions] = useState(false);
  const showSuggestions = useSelector((state) => state.app.showSuggestions);
  const searchQuery= useSelector(store=>store.search.searchQuery);
  // const searchVideos = useSelector(state=>state.videos.searchVideos)
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.cacheResults);
  // console.log(searchSuggestions);
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log(searchQuery);
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
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
      const response = await fetch(BACKEND_SEARCH_API + searchQuery);
      const json = await response.json();
      setSearchSuggestions(json[1]);
      dispatch(
        setCacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchResults = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
        process.env.REACT_APP_YOUTUBE_API +
        "&q=" +
        searchQuery
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addSearchVideos(json.items));
  };

  // if(!searchQuery.length) dispatch(removeSearchVideos())

  if (!searchSuggestions) return null;
  return (
    <div className="fixed w-screen top-0 left-0 right-0 z-50 bg-white select-none">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:px-4 py-3 px-2">
        <div className="flex flex-row items-center mb-2 sm:mb-0">
          <div
            onClick={toggleMenuHandler}
            className="w-10 h-10 hover:rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <img
              className="h-6 mt-2 ml-2"
              src={hamBurgerIcon}
              alt="hamBurgerIcon"
            />
          </div>
          <Link to="/">
            <img className="w-auto mx-[7.5rem] sm:mx-4" src={youtubeIcon} alt="betube-logo" />
          </Link>
        </div>
        <div className="relative">
          <form
            className="flex flex-row relative justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (!searchQuery.length) return null;
              getSearchResults(searchQuery);
              dispatch(setShowSuggestions(false));
              navigate("/");
            }}
          >
            <input
              onChange={(e) => {
                dispatch(setSearchQuery(e.target.value));
                if (!e.target.value.length) dispatch(removeSearchVideos());
              }}
              value={searchQuery}
              onFocus={(e) => dispatch(setShowSuggestions(true))}
              // onBlur={(e) => dispatch(setShowSuggestions(false))}
              className="border rounded-l-full w-2/3 sm:w-[572px] h-10 pl-5 outline-none"
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
            <div className="hidden sm:flex justify-center w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer">
              <img className="mt-2 ml-2" alt="mic-icon " src={micIcon} />
            </div>
            {searchQuery && (
              <button
                onClick={() => {
                  dispatch(setSearchQuery(""))
                  dispatch(removeSearchVideos());
                }}
                className="absolute hover:bg-gray-200 hover:rounded-full w-9 h-9 right-[8.2rem] top-[2px]"
              >
                X
              </button>
            )}
          </form>
          {showSuggestions && searchSuggestions.length > 0 && (
  <div className="absolute bg-white w-[560px] max-h-[400px] shadow-lg border rounded-lg overflow-y-auto left-3 top-10 z-50 text-left">
    <ul className="py-3">
      {searchSuggestions.map((item) => (
        <li
          key={item}
          className="my-1 p-1 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            dispatch(setSearchQuery(item))
            getSearchResults(item);
            dispatch(setShowSuggestions(false))
          }}
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
        <div className="hidden sm:flex sm:flex-row-reverse justify-around">
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
