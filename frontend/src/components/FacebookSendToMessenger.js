import React, { Component } from "react";
import { FacebookProvider, SendToMessenger } from "react-facebook";

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="188699816368668">
        <SendToMessenger
          messengerAppId="188699816368668"
          pageId="512114519309523"
        />
      </FacebookProvider>
    );
  }
}
