import { useRef } from "react";
import Button from "./Button"
import letScrollIcon from "../assets/left-scroll.svg";
import rightScrollIcon from "../assets/right-scroll.svg";

const ButtonList = () => {
    const scrollRef = useRef(null);

    const prev = () => {
      requestAnimationFrame(() => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(scrollRef.current.children[0]).width
        );
        scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
      });
    };

    const next = () => {
      requestAnimationFrame(() => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(scrollRef.current.children[0]).width
        );
        scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
      });
    };
    const buttonList=["All", "Music", "Movie musicals", "Mixes", "Indian pop music", "Computer Programming", "Filmi", "Trains", "Street food", "Aircrafts"," Live", "Trucks", "History"]
    // , "News", "Tourist destinations"
    return (
        <div className="flex  ml-[300px] z-40 bg-white pb-2 ">
          <button
            onClick={prev}
            className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100  "
          >
            <img alt="leftScrollBtn" className="inline-block" src={letScrollIcon} />
          </button>
          <div ref={scrollRef} className="max-w-[86%] overflow-x-hidden flex  mx-5">
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