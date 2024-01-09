import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../redux/chatSlice";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.chatMessages);
  const [chatText, setChatText] = useState("");
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
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse border-b-0 no-scrollbar">
        {chatMessages.map((message,index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessage({
              name: "aman",
              message: chatText,
            })
          );
          setChatText("")
        }}
        className="ml-2 p-2 bg-slate-100 rounded-lg border border-black border-t-0 w-full"
      >
        <input
          value={chatText}
          onChange={(e) => {
            setChatText(e.target.value);
            console.log(chatText);
          }}
          className="pl-2 border w-96 border-black rounded-sm"
          type="text"
        />
        <button className="px-2 mx-2 bg-gray-500 text-white rounded-sm">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
