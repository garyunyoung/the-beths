import React from "react";
import { contact, cpB } from "./cloudinary";
import scss from "../styles/Contact.scss";

export default function Contact() {
  return (
    <section
      className="contact"
      // style={{ backgroundImage: "url(" + contact + ")" }}
    >
      <p className="contact__text">management</p>
        <a className="contact__link" href="mailto:info@monstermanagement.com.au">
          info@monstermanagement.com.au
        </a>
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
          <img className="cp-logo" src={cpB} alt="carpark records logo" />
        </a>
      </p>
      <style jsx>{scss}</style>
    </section>
  );
}
