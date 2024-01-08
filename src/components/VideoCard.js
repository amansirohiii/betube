const VideoCard = ({info}) => {
    if(!info) return null;
    // console.log(info);
    const {snippet, statistics}= info;
    const {channelTitle, title, thumbnails}= snippet;
    const {viewCount}= statistics;
  return (
    <div className="p-2 m-2 w-80 ">
        <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumbnail" />
        <ul>
            <li className="font-bold my-2 line-clamp-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{Math.round(viewCount/1000)}K views</li>
        </ul>
    </div>
  )
}

export default VideoCard