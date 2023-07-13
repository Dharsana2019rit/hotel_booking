import React from "react";

import './option.css'

const Options = (props) => {
  const options = [
    {
      text: "help",
      handler: props.actionProvider.help,
      id: 1,
    },
    { text: "Booking", handler: () => {}, id: 2 },
    { text: "Refund", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
