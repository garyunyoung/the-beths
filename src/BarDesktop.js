import React from "react";
import Sticky from "./Sticky";
import "./BarDesktop.scss";

export default function BarDesktop(props) {
  return (
    <Sticky>
      <nav className="barDesktop">
        <section className="barDesktop__socials">
          <a
            href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="socials__icon socials__icon--spotify fab fa-spotify" />
          </a>
          <a
            href="https://www.facebook.com/thebethsnz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="socials__icon socials__icon--facebook fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/lizstokedstokes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="socials__icon socials__icon--instagram fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/lizstokedstokes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="socials__icon socials__icon--twitter fab fa-twitter" />
          </a>
          <a
            href="https://thebethsnz.bandcamp.com/music"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="socials__icon socials__icon--bandcamp fab fa-bandcamp" />
          </a>
        </section>
        <a className="nav__item" href="#">
          <img
            className="barDesktop__logo"
            src={`${props.img}logo.png`}
            alt="the beths logo"
          />
        </a>
        <nav className="barDesktop__nav">
          <a className="nav__item" href="#merch">
            merch
          </a>
          <a className="nav__item" href="#watch">
            watch
          </a>
          <a className="nav__item" href="#tour">
            tour
          </a>
          <a className="nav__item" href="#contact">
            contact
          </a>

          <a className="nav__item" href="#game" onClick={props.toggleGame}>
            <img
              className="nav__tui cld-responsive"
              src={`${props.img}tui.png`}
              alt="tui bird"
            />
          </a>
        </nav>
      </nav>
    </Sticky>
  );
}
