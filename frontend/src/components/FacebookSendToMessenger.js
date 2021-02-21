import React from "react";
import MessengerSendToMessenger from "react-messenger-send-to-messenger";

const FacebookSendToMessenger = () => {
  return (
    (
      <MessengerSendToMessenger
        pageId="512114519309523"
        appId="188699816368668"
      />
    ),
    document.getElementById("demo")
  );
};

export default FacebookSendToMessenger;
