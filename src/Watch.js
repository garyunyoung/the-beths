import React from "react";
import ld from "./images/ld.png";
import huh from "./images/huh.png";
import hyamlc from "./images/hyamlc.png";
import lits from "./images/lits.png";
import ywlm from "./images/ywlm.png";
import fmhm from "./images/fmhm.png";
import gno from "./images/gno.png";
import w from "./images/w.png";
import utg from "./images/utg.png";
import "./Watch.scss";

export default function Watch() {
  return (
    <section className="watch">
      <h2 className="watch__text">future me hates me</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="uptown girl"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808502/the-beths/utg.png'}
          modifier="utg"
          link="https://www.youtube.com/watch?v=BmCZ-NxESOc"
        />
        <Thumbnail
          title="happy unhappy"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808500/the-beths/huh.png'}
          modifier="huh"
          link="https://www.youtube.com/watch?v=ct8AwQwlbNA"
        />
        <Thumbnail
          title="little death"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808501/the-beths/ld.png'}
          modifier="ld"
          link="https://www.youtube.com/watch?v=UuzlZWvTU2I"
        />
        <Thumbnail
          title="great no one"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808500/the-beths/gno.png'}
          modifier="gno"
          link="https://www.youtube.com/watch?v=qQYhM48H5zs"
        />
        <Thumbnail
          title="future me hates me"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808498/the-beths/fmhm.png'}
          modifier="fmhm"
          link="https://www.youtube.com/watch?v=iVImwSb4EYU"
        />
        <Thumbnail
          title="you wouldn't like me"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808503/the-beths/ywlm.png'}
          modifier="ywlm"
          link="https://www.youtube.com/watch?v=CV3Bjx-vPTg"
        />
      </section>
      <h2 className="watch__text">warm blood EP</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="whatever"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808503/the-beths/w.png'}
          modifier="w"
          link="https://www.youtube.com/watch?v=qtqX7rWtR8A"
        />
        <Thumbnail
          title="lying in the sun"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808501/the-beths/lits.png'}
          modifier="lits"
          link="https://www.youtube.com/watch?v=4Pz8qzMj-Bw"
        />
      </section>
      <h2 className="watch__text">bonus</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="have yourself a merry litte christmas"
          image={'https://res.cloudinary.com/garyou/image/upload/v1556808500/the-beths/hyamlc.png'}
          modifier="hyamlc"
          link="https://www.youtube.com/watch?v=Moz6XOAKK5U"
        />
      </section>
    </section>
  );
}

function Thumbnail(props) {
  return (
    <div
      className={`thumbnail ${
        props.modifier ? `thumbnail--${props.modifier}` : ""
      }`}
    >
      <a
        className="thumbnail__link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="thumbnail__image" src={props.image} alt={`${props.title} thumbnail`}/>
        <p className="thumbnail__text">{props.title}</p>
      </a>
    </div>
  );
}
