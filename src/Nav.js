import React from "react";
import NavItem from "./NavItem";
import hyamlc from "./images/hyamlc.png";
import "./Nav.scss";

export default function Nav(props) {
  return (
    <div className={`nav ${props.open ? "nav--open" : ""} `}>
      <ul className={`nav__list`}>
        <NavItem item="merch" toggleNav={props.toggleNav}/>
        <NavItem item="tour" toggleNav={props.toggleNav}/>
        <NavItem item="watch" toggleNav={props.toggleNav}/>
        <NavItem item="contact" toggleNav={props.toggleNav}/>
        <li className="nav__social">
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
        </li>
        <li>
          <img className="nav__dag" src={hyamlc} />
        </li>
      </ul>
    </div>
  );
}
