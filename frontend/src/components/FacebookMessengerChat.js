import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const FacebookMessengerChat = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="512114519309523"
        appId="188699816368668"
        htmlRef={window.location.pathname}
        greetingDialogDisplay="show"
        loggedInGreeting="Discută cu Anca, consultantul tău Usborne !"
        language="Romanian"
      />
    </div>
  );
};

export default FacebookMessengerChat;
