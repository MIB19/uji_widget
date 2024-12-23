import { useEffect, useState } from "react";
import ChatbotContainer from "./ChatbotContainer";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="chatbot-button-container">
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
