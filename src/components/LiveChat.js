import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../redux/chatSlice";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.chatMessages);
  const [chatText, setChatText] = useState("");
  const [chatName, setName] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addChatMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="w-screen sm:w-96 h-56 sm:h-[500px] sm:mt-0 mt-10 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse border-b-0 no-scrollbar">
        {chatMessages.map((message,index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessage({
              name: chatName,
              message: chatText,
            })
          );
          setChatText("")
        }}
        className="sm:w-96 p-2 bg-slate-100 rounded-lg border border-black border-t-0 w-screen flex justify-between"
      >
         <input
          value={chatName}
          onChange={(e) => {
            setName(e.target.value);
            console.log(chatText);
          }}
          className="pl-2 border w-1/4 mr-1 sm:w-4/4 border-black rounded-sm"
          type="text" placeholder="Name"
        />
        <input
          value={chatText}
          onChange={(e) => {
            setChatText(e.target.value);
            console.log(chatText);
          }}
          className="pl-2 border w-3/4 sm:w-4/4 border-black rounded-sm"
          type="text" placeholder="Message"
        />
        <button className="px-2 mx-2 bg-gray-500 text-white rounded-sm">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
