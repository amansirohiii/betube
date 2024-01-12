import { useSelector } from "react-redux";
import {formatCompactNumber} from "../utils/helper"
const VideoCard = ({info}) => {
    // const searchVideos= useSelector(store=>store.videos.searchVideos)
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
    // console.log(info?.length);

    if(info?.length>0) return null;
    const {snippet}= info;
    const {channelTitle, title, thumbnails, publishedAt}= snippet;

  return (
    <div className={` sm:w-72 my-2 ${isMenuOpen ? " " : "w-80 sm:w-[350px]"
    }`}>
        <img className='rounded-lg hover:drop-shadow-xl w-full' alt='thumbnail' src={thumbnails?.medium?.url} />
        <ul className='flex justify-start items-start'>
        <img className='rounded-full w-7 h-7 mt-2 mr-2' alt='thumbnail' src={thumbnails?.default?.url} />
        <div>
        <li className="font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">{title}</li>
        <li className='text-gray-500 text-[13px]'>{channelTitle}</li>

         {info.statistics && <li className='text-gray-500 text-[13px]'>{info?.statistics?.viewCount ? formatCompactNumber(info?.statistics?.viewCount) : 0} views  {(Math.abs(new Date(publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0)} days ago</li>}
        </div>

        </ul>
    </div>
  )
}

export default VideoCard