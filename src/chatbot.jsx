import { useState } from "react";
import ChatbotContainer from "./ChatbotContainer";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="chatbot-uji" className="cbt-fixed cbt-bottom-20 cbt-right-20">
        <button
          className="cbt-w-26 cbt-bg-gray-300 hover:cbt-bg-gray-600 cbt-py-3 cbt-px-10 cbt-rounded-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          COBA Chatbot
        </button>
      </div>
      {isOpen && <ChatbotContainer />}
    </>
  );
}

export default Chatbot;
