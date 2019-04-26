import React from "react";
import dag from "./images/fmhm-dog.png";
import "./MailingList.scss";

export default function MailingList() {
  return (
    <section className="mailingList">
      <img className="mailingList__dag" src={dag} />
      {/* <div className="mailingList__wrapper">
        <label for="email">join the mailing list!</label>
        <input
          className="mailingList__input"
          type="text"
          name="email"
          required
        />
      </div> */}

      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=0bfa27c5341eacbfd10d85a43&amp;id=05cac296b0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">join the mailing list!</label>
            <div className="input-wrapper">
              <input
                type="email"
                value=""
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <div className="aria" aria-hidden="true">
                <input
                  type="text"
                  name="b_0bfa27c5341eacbfd10d85a43_05cac296b0"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  className="button"
                  type="submit"
                  value=">"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
