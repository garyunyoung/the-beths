import React from "react";
import "./Socials.scss";
import afLogo from "./images/af-logo.png";

export default function Socials() {
  return (
    <section className="socials">
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
      <a
        href="https://artistfirst.com.au/collections/the-beths"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="socials__icon socials__icon--af" src={afLogo} alt="artist first logo"/>
      </a>
    </section>
  );
}
