import React from "react";
import { cpB } from "../utilities/cloudinary.js";
import scss from "../../styles/Contact.scss";

export default function Contact({ contacts }) {
  return (
    <section
      className="contact"
    >
      <p className="contact__text">management</p>
      {contacts.map(({ email }, index) =>
        <a key={index} className="contact__link" href={`mailto:${email}`}>
          {email}
        </a>
      )}
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
          <img className="contact__carpark-logo" src={cpB} alt="carpark records logo" />
        </a>
      </p>
      <style jsx>{scss}</style>
    </section>
  );
}
