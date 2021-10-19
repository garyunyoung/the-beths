import React, { useState } from "react";
import Sticky from "../partials/Sticky";
import MobileSocials from "../partials/MobileSocials";
import scss from "../../styles/MobileNavigation.scss";

export default function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(!false)

  const toggleGame = () => {
    props.toggleGame()
    closeMenu()
  }

  return (
    <Sticky>
      <header className="mobile-navigation">
        <div className="mobile-navigation__content">
          <MenuButton text="☰ MENU" onClick={toggleMenu} />
          <MobileSocials className="mobile-navigation-socials" width="18" color={"black"} />
        </div>
      </header>

      <nav className={`mobile-navigation-menu ${isOpen ? "is-open" : ""}`}>
        <ul className="mobile-navigation-menu__nav-items">
          <ExternalNavItem text="Watch Film" onClick={closeMenu} link="https://found.ee/film_nz2020" />
          <ExternalNavItem text="Live Album" onClick={closeMenu} link="https://found.ee/beths_nz2020" />
          <ExternalNavItem text="Jump Rope Gazers" onClick={closeMenu} link="https://smarturl.it/thebeths_jrg" />
          <InternalNavItem text="Watch" onClick={closeMenu} link="#watch" />
          <InternalNavItem text="Merch" onClick={closeMenu} link="#merch" />
          <InternalNavItem text="Tour" onClick={closeMenu} link="#tour" />
          <ExternalNavItem text="Breakfast Blog" onClick={closeMenu} link="https://found.ee/thebeths_bensblog" />
          <ExternalNavItem text="Patreon" onClick={closeMenu} link="https://www.patreon.com/thebeths" />
          <InternalNavItem text="Secret Game? 👀" onClick={toggleGame} link="#game" />
          <InternalNavItem text="Contact" onClick={closeMenu} link="#contact" />
        </ul>
      </nav>
      <style jsx>{scss}</style>
    </Sticky>
  );
}

function ExternalNavItem(props) {
  return (
    <li className="mobile-navigation-menu__nav-item">
      <a
        className="mobile-navigation-menu__nav-item-link"
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
    <li className="mobile-navigation-menu__nav-item">
      <a
        className="mobile-navigation-menu__nav-item-link"
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
      className="mobile-navigation-menu__menu-button"
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  );
}