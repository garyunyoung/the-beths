import React, { useState } from "react";
import {
  dyingToBelievePremier,
  dyingToBelieve,
  utg,
  huh,
  ld,
  gno,
  fmhm,
  ywlm,
  w,
  lits,
  hyamlc,
} from "./cloudinary";
import scss from "../styles/Watch.scss";

const jumpRopeGazers = {
  isOpen: true,
  modifier: "jump-rope-gazers",
  title: "jump rope gazers",
  videos: [
    {
      title: "dying to believe",
      thumbnail: dyingToBelievePremier,
      link:
        "https://www.youtube.com/watch?v=CkzI93Aqztk&fbclid=IwAR3Xbfr07XL_D-etDu4yjslljyQvFdE_UL3YTy_PX3ninPzGK2J560cN_Rw",
      modifier: "dying-to-believe",
    },
  ],
};

const futureMeHatesMe = {
  isOpen: false,
  modifier: "future-me-hates-me",
  title: "future me hates me",
  videos: [
    {
      title: "uptown girl",
      thumbnail: utg,
      link: "https://www.youtube.com/watch?v=BmCZ-NxESOc",
      modifier: "uptown-girl",
    },
    {
      title: "happy unhappy",
      thumbnail: huh,
      link: "https://www.youtube.com/watch?v=ct8AwQwlbNA",
      modifier: "happy-unhappy",
    },
    {
      title: "little death",
      thumbnail: ld,
      link: "https://www.youtube.com/watch?v=UuzlZWvTU2I",
      modifier: "little-death",
    },
    {
      title: "great no one",
      thumbnail: gno,
      link: "https://www.youtube.com/watch?v=qQYhM48H5zs",
      modifier: "great-noone",
    },
    {
      title: "future me hates me",
      thumbnail: fmhm,
      link: "https://www.youtube.com/watch?v=iVImwSb4EYU",
      modifier: "future-me-hates-me",
    },
    {
      title: "you wouldn't like me",
      thumbnail: ywlm,
      link: "https://www.youtube.com/watch?v=CV3Bjx-vPTg",
      modifier: "you-wouldnt-like-me",
    },
  ],
};

const warmBlood = {
  isOpen: false,
  modifier: "warm-blood",
  title: "warm blood",
  videos: [
    {
      title: "whatever",
      thumbnail: w,
      link: "https://www.youtube.com/watch?v=qtqX7rWtR8A",
      modifier: "whatever",
    },
    {
      title: "lying in the sun",
      thumbnail: lits,
      link: "https://www.youtube.com/watch?v=4Pz8qzMj-Bw",
      modifier: "lying-in-the-sun",
    },
  ],
};

const christmas = {
  isOpen: false,
  modifier: "christmas",
  title: "christmas",
  videos: [
    {
      title: "have yourself a merry litte christmas",
      thumbnail: hyamlc,
      link: "https://www.youtube.com/watch?v=Moz6XOAKK5U",
      modifier: "christmas",
    },
  ],
};
export default function Watch() {
  const [currentSection, setCurrentSection] = useState(jumpRopeGazers.modifier);

  return (
    <section className="watch">
      <h2 className="watch-section__text watch-section__text--jump-rope-gazers">
        jump rope gazers
      </h2>
      <div className="watch-section__wrapper watch-section__wrapper--jump-rope-gazers watch__jump-rope-gazers-embed">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/qaoCF5cVj2g"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="watch-section__wrapper watch-section__wrapper--jump-rope-gazers watch__jump-rope-gazers-embed">
        <iframe
          className="watch__jump-rope-gazers-iframe"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/lvYrJxNwW5I"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="watch-section__wrapper watch-section__wrapper--jump-rope-gazers watch__jump-rope-gazers-embed">
        <iframe
          className="watch__jump-rope-gazers-iframe"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/CkzI93Aqztk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <WatchSection
        {...futureMeHatesMe}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <WatchSection
        {...warmBlood}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <WatchSection
        {...christmas}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <style jsx>{scss}</style>
    </section>
  );
}

function WatchSection(props) {
  const toggleSection = () => {
    if (props.currentSection == props.modifier) {
      props.setCurrentSection(null);
    } else {
      props.setCurrentSection(props.modifier);
    }
  };

  return (
    <div
      className={`watch-section watch-section--${props.modifier} ${
        props.currentSection == props.modifier ? "watch-section--is-open" : ""
      }`}
    >
      <h2 className="watch-section__text" onClick={() => toggleSection()}>
        {props.title}
      </h2>
      <div className="watch-section__wrapper">
        {props.videos.map((video) => (
          <Thumbnail
            title={video.title}
            image={video.thumbnail}
            modifier={video.modifier}
            link={video.link}
          />
        ))}
      </div>
    </div>
  );
}

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      <div
        className={`thumbnail__container ${
          props.modifier ? `thumbnail--${props.modifier}` : ""
        }`}
      >
        <a
          className="thumbnail__link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={`thumbnail__image thumbnail__image--${props.modifier} cld-responsive`}
            src={props.image}
            alt={`${props.title} thumbnail`}
          />
          <p className={`thumbnail__text thumbnail__text--${props.modifier}`}>
            {props.title}
          </p>
        </a>
      </div>
    </div>
  );
}
