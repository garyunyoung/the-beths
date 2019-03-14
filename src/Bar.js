import React from "react";
import Nav from "./Nav";
import "./Bar.css";
import logoBlack from "./images/logo-b.jpg";

export default function Bar() {
  const openNav = () => {
    document.querySelector(".nav__list").classList.toggle("nav__list--open");
    let navIcon = document.querySelector(".bar__nav-icon");
    navIcon.textContent =
      navIcon.textContent === navIcon.dataset.textSwap
        ? navIcon.dataset.textOriginal
        : navIcon.dataset.textSwap;
  };
  return (
    <React.Fragment>
      <div className="bar">
        <img className="bar__logo" src={logoBlack} />
        <p
          className="bar__nav-icon"
          onClick={openNav}
          data-text-swap="x"
          data-text-original="="
        >
          =
        </p>
      </div>
      <Nav />
    </React.Fragment>
  );
}
