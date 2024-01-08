import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // const isMenuOpen=useSelector(state=>state.app.isMenuOpen)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu(false));
  }, []);
  return (
    <div className="px-20 bg-white col-span-10 pt-6 flex mt-[40px] flex-col">
      <div className="flex ">
        <div className="">
          <iframe
            className="rounded-lg m-5"
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-[20px]">
          <LiveChat />
        </div>
      </div>

      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
