import React from "react";
import "./Nav.css";

export default function Nav() {
  const openNav = () => {
    document.querySelector('.nav__list').classList.toggle('nav__list--open');
    let navIcon = document.querySelector('.nav__icon');
        navIcon.textContent = navIcon.textContent === navIcon.dataset.textSwap ?
          navIcon.dataset.textOriginal : 
          navIcon.dataset.textSwap;
    };
  return (
    <div className="nav">
      <p className="nav__icon" onClick={openNav} data-text-swap="x" data-text-original="=">
        =
      </p>
        <ul className="nav__list">
          <li className="nav__tour">tour</li>
          <li className="nav__merch">merch</li>
          <li className="nav__watch">watch</li>
          <li className="nav__contact">contact</li>
        </ul>
    </div>
  );
}