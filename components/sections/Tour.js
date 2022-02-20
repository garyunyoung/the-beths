import React, { useEffect } from "react"
import { tourTheBeths } from "../../utilities/cloudinary.js"

import { TourConsentBanner } from "../partials/ConsentBanners.js"

import scss from "../../styles/Tour.scss"

export default function Tour({ consent, allowTracking }) {
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
    return <TourConsentBanner allowTracking={allowTracking} />
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