import { useState } from "react";
import ChatbotContainer from "./ChatbotContainer";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="chatbot-uji" className="chatbot-button-container">
        <button
          style={{ color: "white", backgroundColor: "gray" }}
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
