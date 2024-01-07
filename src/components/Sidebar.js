import { useSelector } from "react-redux"

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48 h-screen">
        <ul>
            <li> Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>YouTube Music</li>
        </ul>
        <h1 className="font-bold mt-4">You</h1>
        <ul>
            <li>Your Channel</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Downloads</li>
        </ul>
        <h1 className="font-bold mt-4">Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
        </ul>
    </div>
  )
}

export default Sidebar