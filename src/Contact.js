import React from "react";
import cpBW from "./images/cp-bw.jpg";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <p className="contact__text">general manager</p>
      <a className="contact__link" href="mailto:jacob@monstermanagement.com.au">
        jacob@monstermanagement.com.au
      </a>
      <br />
      <p className="contact__text">booking agent</p>
      <p className="contact__text">
        nz:{" "}
        <a className="contact__link" href="mailto:anthony@onehundredpercent.nz">
          anthony@onehundredpercent.nz
        </a>
      </p>
      <p className="contact__text">
        aus:{" "}
        <a className="contact__link" href="mailto:casey@selectmusic.com.au">
          casey@selectmusic.com.au
        </a>
      </p>
      <p className="contact__text">
        us/can:{" "}
        <a className="contact__link" href="mailto:bswanson@paradigmagency.com">
          bswanson@paradigmagency.com
        </a>
      </p>
      <p className="contact__text">
        eu/uk:{" "}
        <a className="contact__link" href="mailto:joren@thelullabyefactory.com">
          joren@thelullabyefactory.com
        </a>
      </p>
      <br />
      <p className="contact__text">record label</p>
      <a
        className="contact__link"
        href="http://carparkrecords.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        carpark records
      </a>
      <p>
        <a
          className="contact__link"
          href="http://carparkrecords.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="cp-logo" src={cpBW} alt="carpark records logo" />
        </a>
      </p>
    </section>
  );
}
