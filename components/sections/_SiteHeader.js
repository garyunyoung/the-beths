import React, { useState } from "react";
import Sticky from "../partials/Sticky";
import Socials from "../partials/Socials";
import { logo } from "../utilities/cloudinary.js";
import scss from "../../styles/SiteHeader.scss";

export default function SiteHeader(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleGame = () => {
    props.toggleGame()
    closeMenu()
  }

  return (
    <Sticky>
      <header
        className={`site-header ${isOpen ? "site-header--show-border" : ""}`}
      >
        <Socials
          className="site-header-socials-desktop"
          width="20"
          color={"black"}
        />
        <a className="site-header__logo" href="#" onClick={() => closeMenu()}>
          <img src={logo} />
        </a>
        <div className="site-header__nav site-header__nav--desktop">
          <NavItem
            text="video"
            desktop="true"
            closeMenu={closeMenu}
            link="#watch"
          />
          <NavItem
            text="store"
            desktop="true"
            closeMenu={closeMenu}
            link="#merch"
          />
          <NavItem
            text="tour"
            desktop="true"
            closeMenu={closeMenu}
            link="#tour"
          />
          <li className={`site-menu__nav-item site-menu__nav-item--desktop`}>
            <a
              className="site-menu__nav-item-link site-menu__nav-item-link--desktop"
              href="https://found.ee/thebeths_bensblog"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <li className={`site-menu__nav-item site-menu__nav-item--desktop`}>
            <a
              className="site-menu__nav-item-link site-menu__nav-item-link--desktop"
              href="https://www.patreon.com/thebeths"
              target="_blank"
              rel="noopener noreferrer"
            >
              patreon
            </a>
          </li>
          <NavItem
            text="contact"
            desktop="true"
            closeMenu={closeMenu}
            link="#contact"
          />
          <li className="site-menu__nav-item site-menu__nav-item--desktop">
            <a href="#game" onClick={toggleGame}>
              <span className="site-menu__nav-item-link site-menu__nav-item-link--desktop">
                🐦
              </span>
            </a>
          </li>
        </div>
        <div className="site-header__nav">
          <button
            className="site-header__menu-toggle"
            onClick={() => toggleMenu()}
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>
      <nav className={`site-menu ${isOpen ? "site-menu--is-open" : ""}`}>
        <ul className="site-menu__nav">
          <NavItem text="watch film" closeMenu={closeMenu} link="https://found.ee/film_nz2020" />
          <NavItem text="buy/stream live lp/cd" closeMenu={closeMenu} link="https://found.ee/beths_nz2020" />
          <NavItem text="video" closeMenu={closeMenu} link="#watch" />
          <NavItem text="store" closeMenu={closeMenu} link="#merch" />
          <NavItem text="tour" closeMenu={closeMenu} link="#tour" />
          <li className={`site-menu__nav-item`}>
            <a
              className="site-menu__nav-item-link"
              href="https://found.ee/thebeths_bensblog"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <li className={`site-menu__nav-item`}>
            <a
              className="site-menu__nav-item-link"
              href="https://www.patreon.com/thebeths"
              target="_blank"
              rel="noopener noreferrer"
            >
              patreon
            </a>
          </li>
          <NavItem text="contact" closeMenu={closeMenu} link="#contact" />
          <li className="site-menu__nav-item">
            <a href="#game" onClick={toggleGame}>
              <span className="site-menu__nav-item-link">🐦</span>
            </a>
          </li>
          <li>
            <Socials className="site-menu-socials" width="18" color={"black"} />
          </li>
        </ul>
      </nav>
      {/* <MailingListDropdown/> */}
      <style jsx>{scss}</style>
    </Sticky>
  );
}

export function NavItem(props) {
  return (
    <li
      className={`site-menu__nav-item site-menu__nav-item--${props.text} ${
        props.desktop ? "site-menu__nav-item--desktop" : ""
      }`}
    >
      <a
        className={`site-menu__nav-item-link ${
          props.desktop ? "site-menu__nav-item-link--desktop" : ""
        }`}
        href={`${props.link}`}
        onClick={() => props.closeMenu()}
      >
        {props.text}
      </a>
    </li>
  );
}
