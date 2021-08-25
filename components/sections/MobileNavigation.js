import React, { useState } from "react";
import Sticky from "../partials/Sticky";
import Socials from "../partials/Socials";
import { logo } from "../utilities/cloudinary.js";
import scss from "../../styles/MobileNavigation.scss";

export default function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const toggleGame = () => {
    props.toggleGame()
    closeMenu()
  }

  return (
    <Sticky>
      <header className="mobile-nav">
        <div className="mobile-nav__content">
          <MenuButton text="MENU" onClick={openMenu} />
        </div>
      </header>

      <nav className={`mobile-nav-menu ${isOpen ? "is-open" : ""}`}>
        <a className="mobile-nav-menu__logo" href="#" onClick={() => closeMenu()}>
          <img className="mobile-nav-menu__logo-image" src={logo} />
        </a>
        <MenuButton text="CLOSE" onClick={closeMenu} />
        <ul className="mobile-nav-menu__nav-items">
          <ExternalNavItem text="pre-order film" onClick={closeMenu} link="https://found.ee/film_nz2020" />
          <ExternalNavItem text="pre-order live lp/cd" onClick={closeMenu} link="https://found.ee/beths_nz2020" />
          <ExternalNavItem text="buy/stream jump rope gazers" onClick={closeMenu} link="https://smarturl.it/thebeths_jrg" />
          <InternalNavItem text="video" onClick={closeMenu} link="#watch" />
          <InternalNavItem text="store" onClick={closeMenu} link="#merch" />
          <InternalNavItem text="tour" onClick={closeMenu} link="#tour" />
          <ExternalNavItem text="blog" onClick={closeMenu} link="https://found.ee/thebeths_bensblog" />
          <ExternalNavItem text="patreon" onClick={closeMenu} link="https://www.patreon.com/thebeths" />
          <InternalNavItem text="contact" onClick={closeMenu} link="#contact" />
          <InternalNavItem text="🐦" onClick={toggleGame} link="#game" />
          <li>
            <Socials className="mobile-nav-menu__socials" width="18" color={"black"} />
          </li>
        </ul>
      </nav>
      <style jsx>{scss}</style>
    </Sticky>
  );
}

function ExternalNavItem(props) {
  return (
    <li className="mobile-nav-menu__nav-item">
      <a
        className="mobile-nav-menu__nav-item-link"
        href={`${props.link}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => props.onClick()}
      >
        {props.text}
      </a>
    </li>
  );
}

function InternalNavItem(props) {
  return (
    <li className="mobile-nav-menu__nav-item">
      <a
        className="mobile-nav-menu__nav-item-link"
        href={`${props.link}`}
        onClick={() => props.onClick()}
      >
        {props.text}
      </a>
    </li>
  );
}

function MenuButton(props) {
  return (
    <button
    className="mobile-nav-menu__menu-button"
    onClick={() => props.onClick()}
  >
    {props.text}
  </button>
  );
}