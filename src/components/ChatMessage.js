const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
        <img className="w-5" src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="user" />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage