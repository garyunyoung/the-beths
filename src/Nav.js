import React from "react";
import tui from "./images/tui.png";
import "./Nav.scss";

export default function Nav(props) {
  return (
    <React.Fragment>
      <div className={`nav ${props.open ? "nav--open" : ""} `}>
        <ul className={`nav__list`}>
          <NavItem text="merch" link="merch" toggleNav={props.toggleNav} />
          <NavItem text="watch" link="watch" toggleNav={props.toggleNav} />
          <NavItem text="tour" link="tour" toggleNav={props.toggleNav} />
          <NavItem text="contact" link="contact" toggleNav={props.toggleNav} />

          <div className="nav__social">
            <a
              className="nav__social--link"
              href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="nav__social--link--spotify fab fa-spotify" />
            </a>
            <a
              className="nav__social--link"
              href="https://www.facebook.com/thebethsnz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="nav__social--link--facebook fab fa-facebook-f" />
            </a>
            <a
              className="nav__social--link"
              href="https://www.instagram.com/lizstokedstokes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="nav__social--link--instagram fab fa-instagram" />
            </a>
            <a
              className="nav__social--link"
              href="https://twitter.com/lizstokedstokes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="nav__social--link--twitter fab fa-twitter" />
            </a>
            <a
              className="nav__social--link"
              href="https://thebethsnz.bandcamp.com/music"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="nav__social--link--bandcamp fab fa-bandcamp" />
            </a>
          </div>

          <a href="#game" onClick={props.toggleGame}>
            <img className="nav__tui" src={tui} alt="tui bird" />
          </a>

          <NavItem text="^" link="top" toggleNav={props.toggleNav} />
        </ul>
      </div>
    </React.Fragment>
  );
}

function NavItem(props) {
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
