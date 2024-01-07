import { useEffect } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../redux/videosSlice";
import VideoCard from "./VideoCard";


const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos=useSelector(store=>store.videos.popularVideos)
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API+ process.env.REACT_APP_YOUTUBE_API);
    const json =await data.json();
    // console.log(json);
    dispatch(addPopularVideos(json.items));
  }
if (!popularVideos) return null;
  return (
    <div className="flex flex-wrap">
      {popularVideos.map((video)=> <VideoCard key={video.id} info={video}/>)}

    </div>
  )
}

export default VideoContainer