import React from "react";
import "./Watch.scss";
import { utg, huh, ld, gno, fmhm, ywlm, w, lits, hyamlc } from "./cloudinary";

export default function Watch(props) {
  return (
    <section className="watch">
      <h2 className="watch__text">future me hates me</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="uptown girl"
          image={utg}
          modifier="utg"
          link="https://www.youtube.com/watch?v=BmCZ-NxESOc"
        />
        <Thumbnail
          title="happy unhappy"
          image={huh}
          modifier="huh"
          link="https://www.youtube.com/watch?v=ct8AwQwlbNA"
        />
        <Thumbnail
          title="little death"
          image={ld}
          modifier="ld"
          link="https://www.youtube.com/watch?v=UuzlZWvTU2I"
        />
        <Thumbnail
          title="great no one"
          image={gno}
          modifier="gno"
          link="https://www.youtube.com/watch?v=qQYhM48H5zs"
        />
        <Thumbnail
          title="future me hates me"
          image={fmhm}
          modifier="fmhm"
          link="https://www.youtube.com/watch?v=iVImwSb4EYU"
        />
        <Thumbnail
          title="you wouldn't like me"
          image={ywlm}
          modifier="ywlm"
          link="https://www.youtube.com/watch?v=CV3Bjx-vPTg"
        />
      </section>
      <h2 className="watch__text">warm blood EP</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="whatever"
          image={w}
          modifier="w"
          link="https://www.youtube.com/watch?v=qtqX7rWtR8A"
        />
        <Thumbnail
          title="lying in the sun"
          image={lits}
          modifier="lits"
          link="https://www.youtube.com/watch?v=4Pz8qzMj-Bw"
        />
      </section>
      <h2 className="watch__text">bonus</h2>
      <section className="watch__wrapper watch__wrapper--xmas">
        <Thumbnail
          title="have yourself a merry litte christmas"
          image={hyamlc}
          modifier="hyamlc"
          link="https://www.youtube.com/watch?v=Moz6XOAKK5U"
          class="xmas"
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
        <img
          className={`thumbnail__image thumbnail__image--${props.class} cld-responsive`}
          src={props.image}
          alt={`${props.title} thumbnail`}
        />
        <p className={`thumbnail__text thumbnail__text--${props.class}`}>{props.title}</p>
      </a>
    </div>
  );
}
