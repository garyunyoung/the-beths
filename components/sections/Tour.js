import React from "react";
import { tourTheBeths } from "../utilities/cloudinary.js";
import scss from "../../styles/Tour.scss";

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
        <div className="tour-consent-banner">
          <p className="tour-consent-banner__text">
            our songkick widget requires analytics to run, accept our cookies
            to see what shows we have lined up!
          </p>
          <button className="tour-consent-banner__accept-button" onClick={() => this.props.allowTracking()}>
            accept
          </button>
          <style jsx>{scss}</style>
        </div>
      );
    } else {
      return (
        <section className="tour">
          <div
            className="tour__image"
            style={{ backgroundImage: "url(" + tourTheBeths + ")" }}
          ></div>
          <p className="tour__text">come gig!</p>


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
