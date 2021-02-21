import React from "react";
import MessengerSendToMessenger from "react-messenger-send-to-messenger";

const FacebookSendToMessenger = () => {
  return (
    <div id="messenger">
      MESSENGER
      <MessengerSendToMessenger
        pageId="512114519309523"
        appId="188699816368668"
      />
    </div>
  );
};

export default FacebookSendToMessenger;
