import React, { Component } from "react";
import { FacebookProvider, MessageUs } from "react-facebook";

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="188699816368668">
        <MessageUs messengerAppId="188699816368668" pageId="512114519309523" />
      </FacebookProvider>
    );
  }
}
