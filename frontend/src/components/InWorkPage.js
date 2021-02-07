import React from "react";
import inworkLogo from "../resources/images/in_work.png";
import { Image } from "react-bootstrap";

const InWorkPage = () => {
  return (
    <div class="container fluid px-0">
      <Image src={inworkLogo} fluid></Image>
    </div>
  );
};

export default InWorkPage;
