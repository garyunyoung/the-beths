import React from "react";
import "./Tour.scss";
import tourPic from "./images/tour-pic.jpg";

export default class Tour extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//widget.songkick.com/8923484/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <section className="tour">
        <div className="tour-pic">
          <img className="tour-pic--main" src={tourPic} />
        </div>
        <div className="song-kick">
          <a
            href="https://www.songkick.com/artists/8923484"
            className="songkick-widget"
            data-theme="light"
            data-track-button="on"
            data-detect-style="true"
            data-background-color="transparent"
          >
            come gig!
          </a>
        </div>
      </section>
    );
  }
}
