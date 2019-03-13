import React from "react";
import "./Tour.css";
import tourVid from "./images/tour-vid-e.mp4";
// import gif from "./images/gif.gif";

export default function Tour() {
  return (
    <section className="tour__section">
      <h1 className="tour__header">tour</h1>
      <div className="tour__video"> 
        <video
          className="tour__video--live"
          type="video/mp4"
          width="100%"
          src={tourVid}
          autoplay="autoplay"
          loop
          muted
        />
        {/* <img className="gif" src={gif}/> */}
      </div>
    </section>
  );
}
