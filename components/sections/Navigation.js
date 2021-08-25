import React from "react";
import Sticky from "../partials/Sticky";
import Socials from "../partials/Socials";
import { logo } from "../utilities/cloudinary.js";
import scss from "../../styles/Navigation.scss";

export default function Navigation(props) {
  const toggleGame = () => {
    props.toggleGame()
  }

  return (
    <Sticky>
      <header className="navigation">
        <nav className="navigation__content">
          <ul className="navigation__nav">
            <Socials className="navigation__socials" width="20" color={"black"} />
            <a className="navigation__logo" href="#" onClick={() => closeMenu()}>
              <img className="navigation__logo-image" src={logo} />
            </a>
            <span className="navigation__nav-itmes">
              <ExternalNavItem text="pre-order film" link="https://found.ee/film_nz2020" />
              <ExternalNavItem text="pre-order live lp/cd" link="https://found.ee/beths_nz2020" />
              <InternalNavItem text="video" link="#watch" />
              <InternalNavItem text="store" link="#merch" />
              <InternalNavItem text="tour" link="#tour" />
              <ExternalNavItem text="blog" link="https://found.ee/thebeths_bensblog" />
              <ExternalNavItem text="patreon" link="https://www.patreon.com/thebeths" />
              <InternalNavItem text="contact" link="#contact" />
              <GameNavItem text="🐦" onClick={toggleGame} link="#game" />
            </span>
          </ul>
        </nav>
      </header>
      <style jsx>{scss}</style>
    </Sticky>
  );
}

function ExternalNavItem(props) {
  return (
    <li className="navigation__nav-item">
      <a
        className="navigation__nav-item-link"
        href={`${props.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.text}
      </a>
    </li>
  );
}

function InternalNavItem(props) {
  return (
    <li className="navigation__nav-item">
      <a
        className="navigation__nav-item-link"
        href={`${props.link}`}
      >
        {props.text}
      </a>
    </li>
  );
}

function GameNavItem(props) {
  return (
    <li className="navigation__nav-item">
      <a
        className="navigation__nav-item-link"
        href={`${props.link}`}
        onClick={() => props.onClick()}
      >
        {props.text}
      </a>
    </li>
  );
}
