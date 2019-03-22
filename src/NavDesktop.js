import React from "react";
import Sticky from "./Sticky";
import "./NavDesktop.scss";

export default function NavDesktop() {
  return (
    <Sticky>
      <ul className="nav-desktop">
        <li className="nav-desktop__item">merch</li>
        <li className="nav-desktop__item">watch</li>
        <li className="nav-desktop__item">tour</li>
        <li className="nav-desktop__item">contact</li>
        <li className="nav-desktop__item">^</li>
      </ul>
    </Sticky>
  );
}
