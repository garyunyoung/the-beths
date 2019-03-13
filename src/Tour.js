import React from "react";
import "./Tour.css";
import tourVid from "./images/tour-vid.mp4";

export default function Tour() {
  return (
    <section className="tour__section">
      <h1 className="tour__header">tour</h1>
      <div className="tour__video"> 
        <video
          className="tour__video--live"
          type="video/mp4"
          height="300px"
          src={tourVid}
          autoplay="autoplay"
          loop
          muted
        />
      </div>
    </section>
  );
}
