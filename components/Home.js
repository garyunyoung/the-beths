import React from "react";
import CTAButton from "./CTAButton";
import MailingList from "./MailingList";
import { cpY } from "./cloudinary";
import scss from "../styles/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__wrapper">
          {/* <img
            className="title cld-responsive"
            src={fmhmT}
            alt="future me hates me title"
          /> */}
          <h1 className="titleText">jump rope gazers</h1>
          <h1 className="outNow">July 19</h1>
          <a
            href="http://store.carparkrecords.com/products/615148-cak128-the-beths-future-me-hates-me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cpY cld-responsive"
              src={cpY}
              alt="carpark records logo"
            />
          </a>

          <a
            className="cta__link"
            href="http://smarturl.it/TheBethsFMHM-Digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="cta">pre-order here</h1>
          </a>
        </div>
      </div>
      {/* Socials */}
      {/* Mailing List */}
      <style jsx>{scss}</style>
    </section>
  );
}
