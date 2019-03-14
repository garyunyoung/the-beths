import React from "react";
import Nav from "./Nav";
import "./Bar.css";
import logoBlack from "./images/logo-b.jpg";

export default function Bar() {
  return (
    <div className="bar">
      <img className="bar__logo" src={logoBlack} />
      <Nav />
    </div>
  );
}
