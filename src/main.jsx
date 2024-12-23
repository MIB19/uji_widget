import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Chatbot from "./chatbot.jsx";

createRoot(document.getElementById("chatbot-uji")).render(
  <StrictMode>
    <Chatbot />
  </StrictMode>
);
