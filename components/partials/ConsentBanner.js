import React, { useState } from "react";

import scss from "../../styles/ConsentBanner.scss";

export default function ConsentBanner({ consent, allowTracking }) {
  const [wasDismissed, setWasDismissed] = useState(false)

  if (wasDismissed || consent) {
    return null;
  } else {
    return (
      <div className="consent-banner">
        <div className="consent-banner__content">
          <p className="consent-banner__text">
            Hey! Some of the features on our site require analytics to run.
            You can use the site without these features, but it's better with
            them!
          </p>
          <button className="consent-banner__button consent-banner__button--decline"
            onClick={() => setWasDismissed(true)}>
            decline
          </button>
          <button className="consent-banner__button consent-banner__button--accept"
            onClick={() => allowTracking()}>
            accept 🍪
          </button>
        </div>
        <style jsx>{scss}</style>
      </div>
    );
  }
}