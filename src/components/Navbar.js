import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_MENU,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../redux/searchSlice";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions]= useState("");
  const [showSuggestions, setShowSuggestions] =useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector(state=>state.search)
  // console.log(searchQuery)
  useEffect(() => {
    const timer =  setTimeout(() => {
      // console.log(searchQuery);
      if(searchCache[searchQuery]){
        setShowSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSearchSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  if(!searchSuggestions) return null;
  return (
    <div className="grid grid-flow-col p-5 ">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src={HAMBURGER_MENU}
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <img className="w-auto mx-4" src={YOUTUBE_LOGO} alt="betube-logo" />
      </div>
      <div className="col-span-10 pl-72">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onFocus={e=>setShowSuggestions(true)}
          onBlur={e=>setShowSuggestions(false)}
          className="pl-3 border border-gray-400 w-1/2 h-8 rounded-l-full"
          type="text"
          name=""
          id=""
        />
        <button className="border border-gray-400 h-8 rounded-r-full px-2 border-l-0 bg-gray-100">
          🔍
        </button>
        {showSuggestions&& searchSuggestions.length>1 && <div className="py-2 absolute bg-white w-[31.5rem] rounded-lg shadow-lg border border-gray-200 ">
          <ul>
            {searchSuggestions.map((item)=>
              <li key={item} className="hover:bg-gray-100 shadow-sm py-2 px-3">🔍 {item}</li>
            )}


          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
