import React from "react";
import "./Tour.scss";
import w from "./images/w.png";

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
        <div className="tour-pics">
          <img className="tour-pics--w" src={w} />
          <img className="tour-pics--w" src={w} />
          <img className="tour-pics--w" src={w} />
          <img className="tour-pics--w" src={w} />
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
