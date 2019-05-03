import React from "react";
import "./Socials.scss";

export default function Socials(props) {
  return (
    <section className={`socials ${props.className}`}>
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
  );
}
