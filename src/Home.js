import React from "react";
import Socials from "./Socials";
import CTAButton from "./CTAButton";
import logoW from "./images/logo-w.png";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <section className="home__content">
        <section className="home__wrapper">
          <img className="logo--w" src={logoW} alt="the beths logo" />
          <a
            className="button--desktop--link"
            href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button--desktop">future me hates me out now!</div>
          </a>
          <Socials />
        </section>
      </section>
      <CTAButton />
    </section>
  );
}
