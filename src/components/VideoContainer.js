import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../redux/videosSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { setMenu } from "../redux/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((store) => store.videos.popularVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const searchVideos = useSelector((store) => store.videos.searchVideos);
  const [nextPageToken, setNextPageToken] = useState("");
  useEffect(() => {
    getVideos();
    dispatch(setMenu(false));
    console.log(window.innerWidth);
      if (window.innerWidth >= 1300) {
        dispatch(setMenu(true));
    };

  }, []);

  // useEffect(()=>{
  //   window.addEventListener('scroll', infiniteScroll, true);
  //   return () => {
  //     window.removeEventListener('scroll', infiniteScroll, true);
  //   }

  // },[nextPageToken])
  const getVideos = async () => {
    // const url = nextPageToken !== "" ? `${YOUTUBE_VIDEOS_API+process.env.REACT_APP_YOUTUBE_API}&pageToken=${nextPageToken}` : YOUTUBE_VIDEOS_API+ process.env.REACT_APP_YOUTUBE_API;
    const data = await fetch(
      YOUTUBE_VIDEOS_API + process.env.REACT_APP_YOUTUBE_API
    );
    const json = await data.json();
    setNextPageToken(json?.nextPageToken);
    // console.log(json);
    dispatch(addPopularVideos(json.items));
  };
  // const infiniteScroll = () => {
  //   if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300) {
  //     getVideos();
  //   }
  // }
  const videosToRender = searchVideos?.length ? searchVideos : popularVideos;

  if (!videosToRender?.length) return <Shimmer />;
  const transformVideo = (video) => {
    // Check if the video object comes from searchVideos or popularVideos
    const videoId = video.id?.videoId || video.id; // Assuming video.id has different structures

    // Return the transformed video object with a unified structure for id
    return {
      ...video,
      id: videoId,
    };
  };
  return (
    <div
      className={`flex flex-wrap justify-evenly sm:ml-[280px] ${
        !isMenuOpen ? "" : ""
      }`}
    >
      {videosToRender?.map((video) => {
        const transformedVideo = transformVideo(video);
        return (
          <Link
            onClick={(e) => window.scrollTo(0, 0)}
            to={"/watch?v=" + transformedVideo.id}
            key={transformedVideo.id}
          >
            <VideoCard info={transformedVideo} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
