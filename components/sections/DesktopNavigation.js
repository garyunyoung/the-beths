import React, { useState } from "react";
import MobileSocials from "../partials/MobileSocials";
import Socials from "../partials/Socials";
import scss from "../../styles/MobileNavigation.scss";

export default function DesktopNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDesktop, setIsOpenDesktop] = useState(false);
  const toggleMenuDesktop = () => setIsOpenDesktop(!isOpenDesktop)
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleGame = () => {
    props.toggleGame()
    closeMenu()
  }

  return (
    <React.Fragment>
      <header className="desktop-navigation">
        <div className="desktop-navigation__content">

          <Socials className="desktop-navigation-socials" width="18" color={"black"} />

          <nav className='desktop-navigation-menu'>
            <ul className="desktop-navigation-menu__nav-items">
              {/* <ExternalNavItem text="Film" onClick={closeMenu} link="https://found.ee/film_nz2020" />
          <ExternalNavItem text="Live Album" onClick={closeMenu} link="https://found.ee/beths_nz2020" />
          <ExternalNavItem text="Jump Rope Gazers" onClick={closeMenu} link="https://smarturl.it/thebeths_jrg" /> */}
              <InternalNavItem text="Watch" onClick={closeMenu} link="#watch" />
              <InternalNavItem text="Merch" onClick={closeMenu} link="#merch" />
              <InternalNavItem text="Tour" onClick={closeMenu} link="#tour" />
              <ExternalNavItem text="Blog" onClick={closeMenu} link="https://found.ee/thebeths_bensblog" />
              <ExternalNavItem text="Patreon" onClick={closeMenu} link="https://www.patreon.com/thebeths" />
              <InternalNavItem text="Contact" onClick={closeMenu} link="#contact" />
              <InternalNavItem text="???" onClick={toggleGame} link="#game" />
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
        onClick={() => props.onClick()}
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
      className={props.className}
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  );
}