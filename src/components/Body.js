import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className=''>
        <Sidebar />
        <Outlet/>
    </div>
  )
}

export default Body