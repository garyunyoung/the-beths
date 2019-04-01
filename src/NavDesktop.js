import React from "react";
import Sticky from "./Sticky";
import "./NavDesktop.scss";

export default function NavDesktop() {
  return (
    <Sticky>
      <ul id="home-desktop" className="nav-desktop">
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
        <a className="nav-desktop__item" href="#home-desktop">
          <li>^</li>
        </a>
      </ul>
    </Sticky>
  );
}
