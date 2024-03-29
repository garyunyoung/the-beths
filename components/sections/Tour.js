import React, { useEffect } from "react"

import { tourTheBeths } from "../../utilities/cloudinary.js"

import Header from '../shared/Header.js';
import { TourConsentBanner } from "../shared/ConsentBanners.js"

import scss from "../../styles/Tour.scss"

export default function Tour({
  hasConsent,
  allowTracking }) {
  function loadSongkick() {
    const script = document.createElement("script")
    script.src = "//widget.songkick.com/8923484/widget.js"
    script.async = true
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (hasConsent) {
      loadSongkick()
    }
  }, [hasConsent])

  return (
    <section id='tour' className={`tour page ${!hasConsent ? 'page--tour' : ''}`}>
      <Header text="tour" />
      {
        hasConsent ?
          <>
            <img className="tour__image cld-responsive" src={tourTheBeths} alt='' />
            <p className="tour__text">come gig!</p>
            <SongkickWidget />
          </> :
          <TourConsentBanner allowTracking={allowTracking} />
      }
      <style jsx>{scss}</style>
    </section>
  )
}

function SongkickWidget() {
  return (
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
  )
}