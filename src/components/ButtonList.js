import Button from "./Button"

const ButtonList = () => {
    const buttonList=["All", "Music", "Movie musicals", "Mixes", "Indian pop music", "Computer Programming", "Filmi", "Trains", "Street food", "Aircrafts"," Live", "Trucks", "History"]
    // , "News", "Tourist destinations"
  return (
    <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
       {buttonList.map((buttonName, index)=><Button key={index} name={buttonName}/> )}
    </div>
  )
}

export default ButtonList