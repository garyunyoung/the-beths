import React from "react";
import SocialsDesktop from "../partials/SocialsDesktop";
import scss from "../../styles/Navigation.scss";

export default function NavigationDesktop(props) {
  const toggleGame = () => {
    props.toggleGame()
  }

  return (
    <React.Fragment>
      <header className="desktop-navigation">
        <div className="desktop-navigation__content">
          <SocialsDesktop className="desktop-navigation-socials" width="18" color={"black"} />
          <nav className='desktop-navigation-menu'>
            <ul className="desktop-navigation-menu__nav-items">
              <ExternalNavItem text="Film" link="https://found.ee/film_nz2020" />
              <InternalNavItem text="Watch" link="#watch" />
              <InternalNavItem text="Merch" link="#merch" />
              <InternalNavItem text="Tour" link="#tour" />
              <ExternalNavItem text="Blog" link="https://found.ee/thebeths_bensblog" />
              <ExternalNavItem text="Patreon" link="https://www.patreon.com/thebeths" />
              <InternalNavItem text="Contact" link="#contact" />
              <GameNavItem text="???" onClick={toggleGame} link="#game" />
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>{scss}</style>
    </React.Fragment>
  );
}

function ExternalNavItem(props) {
  return (
    <li className="desktop-navigation-menu__nav-item">
      <a
        className="desktop-navigation-menu__nav-item-link"
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
    <li className="desktop-navigation-menu__nav-item">
      <a
        className="desktop-navigation-menu__nav-item-link"
        href={`${props.link}`}
      >
        {props.text}
      </a>
    </li>
  );
}

function GameNavItem(props) {
  return (
    <li className="desktop-navigation-menu__nav-item">
      <a
        className="desktop-navigation-menu__nav-item-link"
        href={`${props.link}`}
        onClick={() => props.onClick()}
      >
        {props.text}
      </a>
    </li>
  );
}