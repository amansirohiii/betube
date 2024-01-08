import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { setMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const [searchParams]= useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setMenu(false));
    },[])
  return (
    <div className="ml-32">
      <iframe className="rounded-lg m-5"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
