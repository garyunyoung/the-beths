import React from "react";
import {
  jumpRopeGazersHandwrittenTitle,
  newAlbumText,
  cpY
} from "../utilities/cloudinary.js";

import scss from "../../styles/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__wrapper">
          <div className="home__pre-order-links">
            <a
              className="home__pre-order-link"
              href="https://found.ee/film_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`WATCH FILM`}
            </a>
            <a
              className="home__pre-order-link"
              href="https://found.ee/beths_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`BUY / STREAM LIVE ALBUM`}
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
              href="https://found.ee/film_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY / STREAM LIVE ALBUM
            </a>
            <a
              className="home-content-mobile__pre-order-link"
              href="https://found.ee/beths_nz2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              WATCH FILM
            </a>
          </div>
        </div>
      </div>
      <style jsx>{scss}</style>
    </section>
  );
}
