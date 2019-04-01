import React from "react";
import logoB from "./images/logo-b.png";
import fmhm from "./images/fmhm.jpg";
import fmhmDog from "./images/fmhm-dog.png";
import Sticky from "./Sticky";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <section className="landing">
      <Sticky>
        <div className="landing__bar">
          <img className="landing__logo" src={logoB} />
        </div>
      </Sticky>
      <h1 className="landing__text">
        <a
          className="landing__text--purchase"
          href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          - purchase / stream -
        </a>
      </h1>
      <a
        className="landing__text landing__text--outnow"
        href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="landing__image" src={fmhm} />
      </a>
      <a
        className="landing__text landing__text--outnow"
        href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>
          future me hates me <br />
          out now!
        </h1>
      </a>
      <h1 className="landing__text landing__text__bottom">
        <a href="#merch" className="landing__text__bottom--link">
          merch{" "}
        </a>
        /{" "}
        <a href="#tour" className="landing__text__bottom--link">
          tour{" "}
        </a>
        /{" "}
        <a href="#contact" className="landing__text__bottom--link">
          contact
        </a>
      </h1>
      <a className="landing__text landing__text--link" href="#home">
        <p className="landing__text--enter">enter</p>
        <p className="landing__text--enter">V</p>
      </a>
      <img className="landing__dog" src={fmhmDog} />
    </section>
  );
}
