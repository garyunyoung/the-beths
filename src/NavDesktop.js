import React from "react";
import Sticky from "./Sticky";
import "./NavDesktop.scss";

export default function NavDesktop() {
  return (
    <Sticky>
      <ul className="nav-desktop">
        <a className="nav-desktop__item" href="#merch">
          <li>merch</li>
        </a>
        <a className="nav-desktop__item" href="#watch">
          <li>watch</li>
        </a>
        <a className="nav-desktop__item" href="#tour">
          <li>tour</li>
        </a>
        <a className="nav-desktop__item" href="#contact">
          <li>contact</li>
        </a>
        <a className="nav-desktop__item" href="#home">
          <li>^</li>
        </a>
      </ul>
    </Sticky>
  );
}
