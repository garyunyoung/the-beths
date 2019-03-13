import React from "react";
import cpLogo from "./images/cp-logo.jpg";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact__header">contact</h1>
      <p className="contact__text">
        <strong>general manager</strong> <br />
        jacob@monstermanagement.com.au <br />
        <br />
        <strong>booking agent </strong>
        <br />
        <strong>nz:</strong> anthony@onehundredpercent.nz <br />
        <strong>aus: </strong>casey@selectmusic.com.au <br />
        <strong>nth us: </strong>
        bswanson@paradigmagency.com <br />
        <strong>eu/uk: </strong>joren@thelullabyefactory.com <br />
        <br />
        <strong>record label</strong><br/>
        carpark records<br/>
        <img className="cp-logo" src={cpLogo}/>
      </p>
    </section>
  );
}
