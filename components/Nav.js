import React from "react";
import Socials from "./Socials";
import { tui } from "./cloudinary";
import scss from "../styles/Nav.scss";

export default function Nav(props) {
  return (
    <React.Fragment>
      <nav className={`nav ${props.open ? "nav--open" : ""} `}>
        <ul className={`nav__list`}>
          <NavItem text="merch" link="merch" toggleNav={props.toggleNav} />
          <NavItem text="pre-order" link="watch" toggleNav={props.toggleNav} />
          <NavItem text="videos" link="watch" toggleNav={props.toggleNav} />
          <NavItem text="tour" link="tour" toggleNav={props.toggleNav} />
          <li className={`nav__item nav__item--blog`}>
            <a
              className="nav__link"
              href="https://breakfastandtravelupdates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <NavItem text="contact" link="contact" toggleNav={props.toggleNav} />
          <NavItemGame toggleGame={props.toggleGame} />
          <li>
            <Socials className="nav__social" width="24" color={"black"} />
          </li>
        </ul>
        <style jsx>{scss}</style>
      </nav>
    </React.Fragment>
  );
}

export function NavItem(props) {
  return (
    <li className={`nav__item nav__item--${props.text}`}>
      <a
        className="nav__link"
        href={`#${props.link}`}
        onClick={props.toggleNav}
      >
        {props.text}
      </a>
    </li>
  );
}

export function NavItemGame(props) {
  return (
    <li className="nav__item nav__item--tui">
      <span className="nav__link">game</span>
      <a href="#game" onClick={props.toggleGame}>
        <img className={`${props.class} nav__tui`} src={tui} alt="tui bird" />
      </a>
    </li>
  );
}
