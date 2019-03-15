import React from "react";
import hyamlc from "./images/hyamlc.png";
import "./Nav.css";


export default function Nav(props) {
  return (
    <div className={`nav ${props.open ? 'nav--open' : ""} `}>
      <ul className={`nav__list`}>
        <li className="nav__item nav__item--tour">
          <a className="nav__link" href="#tour">
            tour
          </a>
        </li>
        <li className="nav__item nav__item--merch">
          <a className="nav__link" href="#merch">
            merch
          </a>
        </li>
        <li className="nav__item nav__item--watch">
          <a className="nav__link" href="#watch">
            watch
          </a>
        </li>
        <li className="nav__item nav__item--contact">
          <a className="nav__link" href="#contact">
            contact
          </a>
        </li>
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
        <li><img className="nav__dag" src={hyamlc}/></li>
      </ul>
    </div>
  );
}
