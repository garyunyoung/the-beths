import React from "react";
import CTAButton from "./CTAButton";
import Socials from "./_socials";

import MailingList from "./MailingList";
import { jumpRopeGazersHandwrittenTitle, newAlbumText, cpY } from "./cloudinary";
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
          <p className="home__release-date">july 10</p>
          <a
            href="http://store.carparkrecords.com/products/615148-cak128-the-beths-future-me-hates-me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="home__carpark-logo cld-responsive"
              src={cpY}
              alt="carpark records logo"
            />
          </a>

          <a
            className="home__pre-order-link"
            href="http://smarturl.it/TheBethsFMHM-Digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            pre-order here
          </a>
        </div>
      </div>
      <Socials className="home__socials" width="24" color={"black"} />

      {/* Mailing List */}
      <style jsx>{scss}</style>
    </section>
  );
}
