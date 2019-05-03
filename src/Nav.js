import React from "react";
import Socials from "./Socials";
import "./Nav.scss";

export default function Nav(props) {
  return (
    <React.Fragment>
      <nav className={`nav ${props.open ? "nav--open" : ""} `}>
        <ul className={`nav__list`}>
          <NavItem text="merch" link="merch" toggleNav={props.toggleNav} />
          <NavItem text="watch" link="watch" toggleNav={props.toggleNav} />
          <NavItem text="tour" link="tour" toggleNav={props.toggleNav} />
          <NavItem text="contact" link="contact" toggleNav={props.toggleNav} />
          <li>
            <Socials className="nav__social" />
          </li>
          <NavItemGame img={props.img} toggleGame={props.toggleGame}/>
          <NavItem text="^" link="top" toggleNav={props.toggleNav} />
        </ul>
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
    <li>
      <a href="#game" onClick={props.toggleGame}>
        <img className={`${props.class} nav__tui`} src={`${props.img}tui.png`} alt="tui bird" />
      </a>
    </li>
  );
}
