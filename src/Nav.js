import React from "react";
import "./Nav.css";

export default function Nav() {

  return (
    <div className="nav">
        <ul className="nav__list">
          <li className="nav__item nav__item--tour"><a className="nav__link" href="#tour">tour</a></li>
          <li className="nav__item nav__item--merch"><a className="nav__link" href="#merch">merch</a></li>
          <li className="nav__item nav__item--watch"><a className="nav__link" href="#watch">watch</a></li>
          <li className="nav__item nav__item--contact"><a className="nav__link" href="#contact">contact</a></li>
        </ul>
    </div>
  );
}