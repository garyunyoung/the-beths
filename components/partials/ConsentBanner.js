import React, { useState } from "react";
import scss from "../../styles/ConsentBanner.scss";

function ConsentBanner({ consent, allowTracking }) {
  const [wasDismissed, setWasDismissed] = useState(false)

  function close() {
    setWasDismissed(true)
  }

  function accept() {
    allowTracking();
  }

  if (wasDismissed || consent) {
    return null;
  } else {
    return (
      <div className="consent-banner">
        <div className="consent-banner__content">
          <button className="consent-banner__button consent-banner__button--close"
            onClick={() => close()}>
            x
          </button>
          <p className="consent-banner__text">
            {`Hey! Some of the features on our site require analytics to run.
              You can use the site without these features, but it's better with
              them!`}
          </p>
          <div className="consent-banner__buttons">
            <button className="consent-banner__button  consent-banner__button--decline"
              onClick={() => close()}>
              decline
            </button>
            <button className="consent-banner__button  consent-banner__button--accept"
              onClick={() => accept()}>
              accept 🍪
            </button>
          </div>
        </div>
        <style jsx>{scss}</style>
      </div>
    );
  }
}

export default ConsentBanner