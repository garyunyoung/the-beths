import React from "react";
import "./Game.scss";

export default function Game(props) {
  return (
    <section className={`game ${props.open ? "game--open" : ""} `}>
      <h1>placeholder game</h1>
    </section>
  );
}
