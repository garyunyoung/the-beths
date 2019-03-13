import React from "react";
import "./Socials.css";
import afLogo from "./images/af-logo.jpg";

export default function Socials() {
  return (
    <div className="home__subsection">
      <section className="social__wrapper">
        <a
          href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social__icon social__icon--spotify fab fa-spotify" />
        </a>
        <a
          href="https://www.facebook.com/thebethsnz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social__icon social__icon--facebook fab fa-facebook-f" />
        </a>
        <a
          href="https://www.instagram.com/lizstokedstokes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social__icon social__icon--instagram fab fa-instagram" />
        </a>
        <a
          href="https://twitter.com/lizstokedstokes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social__icon social__icon--twitter fab fa-twitter" />
        </a>
      </section>

      <section className="social__wrapper">
        <a
          href="https://thebethsnz.bandcamp.com/music"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social__icon social__icon--bandcamp fab fa-bandcamp" />
        </a>
        <a
          href="https://artistfirst.com.au/collections/the-beths"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social__icon social__icon--af" src={afLogo} />
        </a>
        <a
          href="https://soundcloud.com/thebethsnz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="social__icon social__icon--soundcloud fab fa-soundcloud" />
        </a>
      </section>

      <section className="social__wrapper">
        <button className="home__button">
          <a
            className="home__button--link"
            href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
          >
            New LP out now!
          </a>
        </button>
      </section>
    </div>
  );
}
