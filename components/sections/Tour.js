import React, { useEffect } from "react"
import { tourTheBeths } from "../../utilities/cloudinary.js"

import scss from "../../styles/Tour.scss"

function Tour({ consent, allowTracking }) {
  function loadSongkick() {
    const script = document.createElement("script")
    script.src = "//widget.songkick.com/8923484/widget.js"
    script.async = true
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (consent) {
      loadSongkick()
    }
  }, [consent])

  if (!consent) {
    return (
      <div className="tour-consent-banner">
        <p className="tour-consent-banner__text">
          Our Songkick widget requires analytics to run, accept our cookies
          to see what shows we have lined up!
        </p>
        <button className="tour-consent-banner__accept-button"
          onClick={() => allowTracking()}>
          accept
        </button>
        <style jsx>{scss}</style>
      </div>
    )
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
    )
  }
}

export default Tour