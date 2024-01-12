import { useRef } from "react";
import Button from "./Button"
import letScrollIcon from "../assets/left-scroll.svg";
import rightScrollIcon from "../assets/right-scroll.svg";
import { useSelector } from "react-redux";

const ButtonList = () => {
    const scrollRef = useRef(null);
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    const prev = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: -150,
            behavior: "smooth",
          });
        }
      };

      const next = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: 150,
            behavior: "smooth",
          });
        }
      };
    const buttonList=["All", "Music", "Movie musicals", "Mixes", "Indian pop music", "Computer Programming", "Filmi", "Trains", "Street food", "Aircrafts"," Live", "Trucks", "History"]
    // , "News", "Tourist destinations"
    return (
        <div className={`flex w-screen sm:w-auto z-40 bg-white pb-2 select-none ${
          !isMenuOpen ? "" : "sm:pl-[300px]"
        }`}
      >
          <button
            onClick={prev}
            className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100  "
          >
            <img alt="leftScrollBtn" className="inline-block" src={letScrollIcon} />
          </button>
          <div ref={scrollRef} className="max-w-[65%] sm:max-w-[86%] overflow-x-scroll no-scrollbar flex  sm:mx-5 mx-2">
          {buttonList.map((buttonName, index)=><Button key={index} name={buttonName}/> )}
          </div>
          <button
            onClick={next}
            className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100  "
          >
            <img
              alt="rightScrollBtn"
              className="inline-block"
              src={rightScrollIcon}
            />
          </button>
        </div>
      );
    };


export default ButtonList