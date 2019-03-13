import React from "react";
import "./Tour.css";
import tourVid from "./images/tour-vid-e.mp4";

export default class Tour extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = "//widget.songkick.com/8923484/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <section className="tour__section">
        <h1 className="tour__header">tour</h1>
        <div className="tour__video">
          <video
            className="tour__video--live"
            type="video/mp4"
            width="100%"
            src={tourVid}
            // autoPlay
            loop
            muted
          />
        </div>
        <div className="song-kick">
          <a
            href="https://www.songkick.com/artists/8923484"
            className="songkick-widget"
            data-theme="light"
            data-track-button="on"
            data-detect-style="true"
            data-background-color="transparent"
          />
        </div>
      </section>
    );
  }
}
