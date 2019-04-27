import React from "react";
import "./Header.scss";

export default function Header(props) {
  return (
    <h1
      className={`header header--${props.header} ${
        props.open ? "header header--game--open" : ""
      } `}
    >
      {props.header}
    </h1>
  );
}
