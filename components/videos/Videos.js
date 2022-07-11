import React, { useState } from "react";
import { urlFor } from "../../lib/sanity.js";
import Image from 'next/image'

import scss from "../../styles/Videos.scss";

export default function Videos({ videos }) {
  const expertInADyingField = {
    isOpen: true,
    modifier: "expert-in-a-dying-field",
    name: "expert in a dying field",
    videos: videos.filter(video => video.album.name === "Expert In A Dying Field")
  };

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


  const [currentSection, setCurrentSection] = useState(expertInADyingField.modifier);
  const albums = [expertInADyingField, jumpRopeGazersData, futureMeHatesMeData, warmBloodData, christmasData]

  return (
    <section className="watch">
      {albums.map((album, index) =>
        <VideosSection
          key={index}
          {...album}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />)}
      <style jsx>{scss}</style>
    </section>
  );
}

function VideosSection({ videos, name, modifier, currentSection, setCurrentSection }) {
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
        {videos.map(({ name, thumbnail, url, modifier }, index) => (
          <Thumbnail
            key={index}
            name={name}
            thumbnail={thumbnail}
            modifier={modifier}
            url={url}
          />
        ))}
      </div>
    </div>
  );
}

function Thumbnail({ name, thumbnail, url, modifier }) {
  return (
    <div className="thumbnail">
      <div
        className={`thumbnail__container ${modifier ? `thumbnail--${modifier}` : ""
          }`}
      >
        <a
          className="thumbnail__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="thumbnail__image">
            <Image
              className={`thumbnail__image--${modifier} cld-responsive`}
              src={urlFor(thumbnail).url()}
              alt={`${name} thumbnail`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className={`thumbnail__text thumbnail__text--${modifier}`}>
            {name}
          </p>
        </a>
      </div>
    </div>
  );
}
