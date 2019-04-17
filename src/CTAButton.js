import React from "react";
import "./CTAButton.scss";

export default function CTAButton() {
  return (
    <div className="button__wrapper">
      <div className="button">
        <a
          className="button--link"
          href="http://smarturl.it/TheBethsFMHM-Digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          digital
        </a>
      </div>
      <div className="button">
        <a
          className="button--link"
          href="http://smarturl.it/TheBethsFMHM-VinylCD"
          target="_blank"
          rel="noopener noreferrer"
        >
          vinyl / cd
        </a>
      </div>
      {/* <div className="button">
        <a
          className="button--link"
          href="http://smarturl.it/TheBeths-Merch"
          target="_blank"
          rel="noopener noreferrer"
        >
          merch
        </a>
      </div> */}
    </div>
  );
}
