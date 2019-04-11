import React from "react";
import Sticky from "./Sticky";
import "./BarDesktop.scss";
import logoBlack from "./images/logo-b.png";

export default function BarDesktop() {
  return (
    <Sticky>
      <div className="barDesktop">
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
          src={logoBlack}
          alt="the beths logo"
        />
        </a>
        <section className="barDesktop__nav">
          <a className="nav__item" href="#merch">
            <p>merch</p>
          </a>
          <a className="nav__item" href="#watch">
            <p>watch</p>
          </a>
          <a className="nav__item" href="#tour">
            <p>tour</p>
          </a>
          <a className="nav__item" href="#contact">
            <p>contact</p>
          </a>
        </section>
      </div>
    </Sticky>
  );
}
