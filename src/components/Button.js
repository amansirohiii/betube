import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";

const Button = ({name}) => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
    const handleButtonClick = () => {
        dispatch(setSearchQuery(name));
      };

  return (
    <div>
    <button onClick={handleButtonClick} className={`sm:px-5 px-2 py-1 m-2 bg-gray-100 rounded-lg hover:bg-gray-200 whitespace-nowrap ${!isMenuOpen? "sm:text-lg" :"sm:text-sm"} `}> {name} </button>
</div>
  )
}

export default Button;
