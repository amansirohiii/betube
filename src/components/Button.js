import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";

const Button = ({name}) => {
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        dispatch(setSearchQuery(name));
      };

  return (
    <div>
    <button onClick={handleButtonClick} className='px-5 py-1 m-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm whitespace-nowrap'> {name} </button>
</div>
  )
}

export default Button;
