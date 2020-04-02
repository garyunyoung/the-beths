import React from "react";

import scss from "../styles/MailingListBanner.scss";

export default function MailingListBanner() {
  return (
    <section className="mailingList">
      <div className="mailing-list-banner">
        <div className="mailing-list-banner__signup">
          <p className="mailing-list-banner__text">join the mailing list</p>
          <p className="mailing-list-banner__email">garyunyoung@gmail.com</p>
        </div>
        <div className="mailing-list-banner__socials">
            <p>s</p>
            <p>t</p>
            <p>f</p>
            <p>bc</p>
        </div>
      </div>
      ;<style jsx>{scss}</style>
    </section>
  );
}
