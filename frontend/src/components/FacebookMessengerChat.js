import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const FacebookMessengerChat = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="512114519309523"
        appId="188699816368668"
        htmlRef={window.location.pathname}
        shouldShowDialog="true"
        minimized="True"
        loggedInGreeting="Discută cu Anca, consultantul tău Usborne, pentu a primi cele mai potrivite recomandări de cărți pentru copilul tău !"
      />
    </div>
  );
};

export default FacebookMessengerChat;
