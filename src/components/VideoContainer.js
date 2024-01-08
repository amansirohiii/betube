import { useEffect } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../redux/videosSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { setMenu } from "../redux/appSlice";
import Shimmer from "./Shimmer";


const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos=useSelector(store=>store.videos.popularVideos)
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  useEffect(()=>{
    getVideos();
    dispatch(setMenu(true))
  },[])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API+ process.env.REACT_APP_YOUTUBE_API);
    const json =await data.json();
    // console.log(json);
    dispatch(addPopularVideos(json.items));
  }
  if (!popularVideos.length) return <Shimmer />
  return (
    <div className={`flex flex-wrap justify-center ${!isMenuOpen ? "" : "ml-[280px]"}`}>
      {popularVideos.map((video)=> <Link to={"/watch?v="+video.id} key={video.id} ><VideoCard info={video}/></Link> )}

    </div>
  )
}

export default VideoContainer