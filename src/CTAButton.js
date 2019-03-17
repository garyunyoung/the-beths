import React from "react";
import "./CTAButton.scss";

export default function CTAButton() {
  return (
    <button className="button">
      <a
        className="button--link"
        href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
        target="_blank"
        rel="noopener noreferrer"
      >
        New LP out now!
      </a>
    </button>
  );
}
