import React, { useState } from "react";
import Sticky from "./_sticky";
import Socials from "./_socials";
import { logo, tui } from "./cloudinary";
import { Icon } from "./icons";

import scss from "../styles/SiteHeader.scss";

export default function SiteHeader(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Sticky>
      <header className="site-header">
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
            text="pre-order"
            desktop="true"
            closeMenu={closeMenu}
            link=""
          />
          <NavItem
            text="merch"
            desktop="true"
            closeMenu={closeMenu}
            link="merch"
          />
          <NavItem
            text="watch"
            desktop="true"
            closeMenu={closeMenu}
            link="watch"
          />
          <NavItem
            text="tour"
            desktop="true"
            closeMenu={closeMenu}
            link="tour"
          />
          <li className={`site-menu__nav-item site-menu__nav-item--desktop`}>
            <a
              className="site-menu__nav-item-link site-menu__nav-item-link--desktop"
              href="https://breakfastandtravelupdates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <NavItem
            text="contact"
            desktop="true"
            closeMenu={closeMenu}
            link="contact"
          />
          <NavItem
            text="✉️"
            desktop="true"
            closeMenu={closeMenu}
            link="contact"
          />
          <li className="site-menu__nav-item site-menu__nav-item--desktop">
            <span className="site-menu__nav-item-link site-menu__nav-item-link--desktop">
              🐦
            </span>
            <a href="#game" onClick={props.toggleGame} />
          </li>
        </div>
        <div className="site-header__nav">
          <button
            className="site-header__menu-toggle"
            onClick={() => toggleMenu()}
          >
            {isOpen ? "x" : "//"}
          </button>
        </div>
      </header>
      <nav className={`site-menu ${isOpen ? "site-menu--is-open" : ""}`}>
        <ul className="site-menu__nav">
          <NavItem text="music" closeMenu={closeMenu} link="" />
          <NavItem text="videos" closeMenu={closeMenu} link="watch" />
          <NavItem text="tour" closeMenu={closeMenu} link="tour" />
          <NavItem text="store" closeMenu={closeMenu} link="store" />
          <li className={`site-menu__nav-item`}>
            <a
              className="site-menu__nav-item-link"
              href="https://breakfastandtravelupdates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <NavItem text="contact" link="contact" />
          <li className="site-menu__nav-item">
            <span className="site-menu__nav-item-link">game</span>
            <a href="#game" onClick={props.toggleGame} />
          </li>
          <li>
            <Socials className="site-menu-socials" width="18" color={"black"} />
          </li>
        </ul>
      </nav>
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
        href={`#${props.link}`}
        onClick={() => props.closeMenu()}
      >
        {props.text}
      </a>
    </li>
  );
}
