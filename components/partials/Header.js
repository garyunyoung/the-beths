import React from "react";
import scss from "../../styles/Header.scss";

export default function Header(props) {
  return (
    <h2
      className={`header header--${props.header} ${
        props.open ? "header header--game is-open" : ""
      } `}
    >
      {props.open ? "GAME UNLOCKED" : props.header}
      <style jsx>{scss}</style>
    </h2>
  );
}
