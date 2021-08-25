import React from "react";
import {
  jumpRopeGazersHandwrittenTitle,
  newAlbumText,
  cpY
} from "./cloudinary";

import scss from "../styles/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__wrapper">
          <img
            className="home__album-title cls-responsive"
            src={jumpRopeGazersHandwrittenTitle}
          />
          <img
            className="home__new-album-text cls-responsive"
            src={newAlbumText}
          />
          <p className="home__release-date">out now</p>
          <a
            href="https://smarturl.it/thebeths_jrg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="home__carpark-logo cld-responsive"
              src={cpY}
              alt="carpark records logo"
            />
          </a>
          <div className="home__pre-order-links">
            <a
              className="home__pre-order-link"
              href="https://found.ee/film_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`PRE-ORDER FILM & WATCH TRAILER`}
            </a>
            <a
              className="home__pre-order-link"
              href="https://found.ee/beths_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`PRE-ORDER LIVE LP/CD`}
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="home-content-mobile">
          <img
            className="home-content-mobile__new-album-text cls-responsive"
            src={newAlbumText}
          />
          <p className="home-content-mobile__release-date">July 10</p>
          <a
            href="https://smarturl.it/thebeths_jrg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="home-content-mobile__carpark-logo cld-responsive"
              src={cpY}
              alt="carpark records logo"
            />
          </a>
          <div className="home-content-mobile__pre-order-links">
            <a
              className="home-content-mobile__pre-order-link"
              href="https://found.ee/beths_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRE-ORDER FILM & WATCH TRAILER
            </a>
            <a
              className="home-content-mobile__pre-order-link"
              href="https://found.ee/film_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              PRE-ORDER LIVE LP/CD
            </a>
          </div>
          {/* <Socials className="home__socials-footer" width="20" color={"black"} /> */}
        </div>
      </div>
      <style jsx>{scss}</style>
    </section>
  );
}
