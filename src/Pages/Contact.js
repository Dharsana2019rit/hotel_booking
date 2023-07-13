import React from "react";
import Chatbot from "react-chatbot-kit";

import configure from "./configure";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";


function Contact() {
  return (
    <div className="chat">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={configure}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default Contact;