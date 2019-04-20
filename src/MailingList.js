import React from "react";
import dag from "./images/fmhm-dog.png";
import "./MailingList.scss";

export default function MailingList() {
  return (
    <section className="mailingList">
      <img className="mailingList__dag" src={dag} />
      <div className="mailingList__wrapper">
        <label for="email">join the mailing list!</label>
        <input
          className="mailingList__input"
          type="text"
          name="email"
          required
        />
      </div>
    </section>
  );
}
