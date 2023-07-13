import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../Components/Options";
import Quiz from "../Components/Quiz";


const configure = {
  botName: "Hotelbay",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      
    },
    {
      widgetName: "help",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "How can i cancle my booking?",
            answer:
              "Goto my bookings page click canlce button",
            id: 1,
          },
          {
            question: "Can i get refund",
            answer:
              "Refund i available for all room exept suite room in our premium segment.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default configure;
