import React from "react";
import "./Nav.css";

export default function Nav() {

  return (
    <div className="nav">
        <ul className="nav__list">
          <li className="nav__tour">tour</li>
          <li className="nav__merch">merch</li>
          <li className="nav__watch">watch</li>
          <li className="nav__contact">contact</li>
        </ul>
    </div>
  );
}