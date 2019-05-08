import React from "react";
import scss from "../styles/CTAButton.scss";

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
      <style jsx>{scss}</style>
    </div>
  );
}
