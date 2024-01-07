import { useEffect } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../redux/videosSlice";


const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API+ process.env.REACT_APP_YOUTUBE_API);
    const json =await data.json();
    console.log(json);
    dispatch(addPopularVideos(json.items));
  }
  return (
    <div>

    </div>
  )
}

export default VideoContainer