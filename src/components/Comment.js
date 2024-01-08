import { USER_ICON } from "../utils/constants";

const Comment = ({data}) => {
    if(!data) return null;
    const {name, text, replies} = data;
  return (
    <div className=" flex w-auto shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img className="h-6" src={USER_ICON} alt="user" />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment