import React, { useState } from "react";
import { urlFor } from "../../lib/sanity.js";
import Image from 'next/image'

import scss from "../../styles/Watch.scss";

export default function Watch({ videos }) {
  const jumpRopeGazersData = {
    isOpen: true,
    modifier: "jump-rope-gazers",
    name: "jump rope gazers",
    videos: videos.filter(video => video.album.name === "Jump Rope Gazers")
  };

  const futureMeHatesMeData = {
    isOpen: false,
    modifier: "future-me-hates-me",
    name: "future me hates me",
    videos: videos.filter(video => video.album.name === "Future Me Hates Me")
  };

  const warmBloodData = {
    isOpen: false,
    modifier: "warm-blood",
    name: "warm blood",
    videos: videos.filter(video => video.album.name === "Warm Blood")
  };

  const christmasData = {
    isOpen: false,
    modifier: "christmas",
    name: "christmas",
    videos: videos.filter(video => video.album.name === "Christmas")
  };


  const [currentSection, setCurrentSection] = useState(jumpRopeGazersData.modifier);
  const albums = [jumpRopeGazersData, futureMeHatesMeData, warmBloodData, christmasData]

  return (
    <section className="watch">
      {albums.map((album, index) =>
        <WatchSection
          key={index}
          {...album}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />)}
      <style jsx>{scss}</style>
    </section>
  );
}

function WatchSection({ videos, name, modifier, currentSection, setCurrentSection }) {
  function toggleSection() {
    if (currentSection == modifier) {
      setCurrentSection(null);
    } else {
      setCurrentSection(modifier);
    }
  };

  return (
    <div
      className={`watch-section watch-section--${modifier} ${currentSection == modifier ? "watch-section--is-open" : ""
        }`}
    >
      <h2 className="watch-section__text" onClick={() => toggleSection()}>
        {name}
      </h2>
      <div className="watch-section__wrapper">
        {videos.map(({ name, thumbnail, link, modifier }, index) => (
          <Thumbnail
            key={index}
            name={name}
            thumbnail={thumbnail}
            modifier={modifier}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

function Thumbnail({ name, thumbnail, link, modifier }) {
  return (
    <div className="thumbnail">
      <div
        className={`thumbnail__container ${modifier ? `thumbnail--${modifier}` : ""
          }`}
      >
        <a
          className="thumbnail__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={`thumbnail__image thumbnail__image--${modifier} cld-responsive`}
            src={urlFor(thumbnail).url()}
            alt={`${name} thumbnail`}

            objectFit="contain"
            width={120}
            height={120}
          />
          <p className={`thumbnail__text thumbnail__text--${modifier}`}>
            {name}
          </p>
        </a>
      </div>
    </div>
  );
}
