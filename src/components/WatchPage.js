import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    const [searchParams]= useSearchParams();
    const isMenuOpen=useSelector(state=>state.app.isMenuOpen)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setMenu(false));
    },[])
  return (
    <div className={`${!isMenuOpen ? 'px-20 ' : 'px-20 backdrop-blur-sm bg-white'} col-span-10 pt-6 flex w-full mt-[40px] flex-col`}>

      <iframe className="rounded-lg m-5"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
          <div>
          <CommentsContainer/>
          </div>

    </div>
  );
};

export default WatchPage;
