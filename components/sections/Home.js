import React from "react";
import scss from "../../styles/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="home__background-image"></div>
      <div className="home__cta-links">
        <a
          className="home__cta-link"
          href="https://found.ee/film_nz2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          WATCH FILM
        </a>
        <a
          className="home__cta-link"
          href="https://found.ee/beths_nz2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY / STREAM LIVE ALBUM
        </a>
      </div>
      <style jsx>{scss}</style>
    </section>
  );
}
