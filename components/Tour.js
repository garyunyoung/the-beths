import React from "react";
import { tour } from "./cloudinary";
import scss from "../styles/Tour.scss";

export default class Tour extends React.Component {
  loadSongkick() {
    const script = document.createElement("script");
    script.src = "//widget.songkick.com/8923484/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidUpdate(prevProps) {
    if (this.props.consent !== prevProps.consent && this.props.consent) {
      this.loadSongkick();
    }
  }

  render() {
    if (!this.props.consent) {
      return (
        <div className="consent-banner">
          <p className="consent-banner__text">
            our songkick widget requires analytics to run, accept our cookies 🍪
            to see what shows we have lined up!
          </p>
          <button className="btn" onClick={() => this.props.allowTracking()}>
            accept
          </button>
          <style jsx>{scss}</style>
        </div>
      );
    } else {
      return (
        <section className="tour">
          <div
            className="tour-pic"
            style={{ backgroundImage: "url(" + tour + ")" }}
          />
          <p className="tour-text">come gig!</p>
          <div id='song-kick' className="song-kick">
            <a
              href="https://www.songkick.com/artists/8923484"
              className="songkick-widget"
              data-theme="light"
              data-track-button="on"
              data-detect-style="true"
              data-background-color="transparent"
            />
          </div>
          <style jsx>{scss}</style>
        </section>
      );
    }
  }
}
