import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../redux/videosSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { setMenu } from "../redux/appSlice";


const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos=useSelector(store=>store.videos.popularVideos)
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  const [nextPageToken, setNextPageToken] =useState("");
  useEffect(()=>{
    getVideos();
    dispatch(setMenu(true))
  },[])
  useEffect(()=>{
    window.addEventListener('scroll', infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    }

  },[nextPageToken])
  const getVideos=async()=>{
    const url = nextPageToken !== "" ? `${YOUTUBE_VIDEOS_API+process.env.REACT_APP_YOUTUBE_API}&pageToken=${nextPageToken}` : YOUTUBE_VIDEOS_API+ process.env.REACT_APP_YOUTUBE_API;
    const data=await fetch(url);
    const json =await data.json();
    setNextPageToken(json?.nextPageToken);
    // console.log(json);
    dispatch(addPopularVideos(json.items));
  }
  const infiniteScroll = () => {
    if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
      getVideos();
    }
  }

  if (!popularVideos?.length) return <Shimmer />

  return (
    <div className={`flex flex-wrap justify-center ${!isMenuOpen ? "" : "ml-[280px]"}`}>
      {popularVideos?.map((video)=> <Link onClick={e=>window.scrollTo(0,0)} to={"/watch?v="+video?.id} key={video?.id} ><VideoCard info={video}/></Link> )}

    </div>
  )
}

export default VideoContainer