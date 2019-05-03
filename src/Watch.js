import React from "react";
import "./Watch.scss";

export default function Watch(props) {
  return (
    <section className="watch">
      <h2 className="watch__text">future me hates me</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="uptown girl"
          image={`${props.img}utg.png`}
          modifier="utg"
          link="https://www.youtube.com/watch?v=BmCZ-NxESOc"
        />
        <Thumbnail
          title="happy unhappy"
          image={`${props.img}huh.png`}
          modifier="huh"
          link="https://www.youtube.com/watch?v=ct8AwQwlbNA"
        />
        <Thumbnail
          title="little death"
          image={`${props.img}ld.png`}
          modifier="ld"
          link="https://www.youtube.com/watch?v=UuzlZWvTU2I"
        />
        <Thumbnail
          title="great no one"
          image={`${props.img}gno.png`}
          modifier="gno"
          link="https://www.youtube.com/watch?v=qQYhM48H5zs"
        />
        <Thumbnail
          title="future me hates me"
          image={`${props.img}fmhm.png`}
          modifier="fmhm"
          link="https://www.youtube.com/watch?v=iVImwSb4EYU"
        />
        <Thumbnail
          title="you wouldn't like me"
          image={`${props.img}ywlm.png`}
          modifier="ywlm"
          link="https://www.youtube.com/watch?v=CV3Bjx-vPTg"
        />
      </section>
      <h2 className="watch__text">warm blood EP</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="whatever"
          image={`${props.img}w.png`}
          modifier="w"
          link="https://www.youtube.com/watch?v=qtqX7rWtR8A"
        />
        <Thumbnail
          title="lying in the sun"
          image={`${props.img}lits.png`}
          modifier="lits"
          link="https://www.youtube.com/watch?v=4Pz8qzMj-Bw"
        />
      </section>
      <h2 className="watch__text">bonus</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="have yourself a merry litte christmas"
          image={`${props.img}hyamlc.png`}
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
        <img className="thumbnail__image cld-responsive" src={props.image} alt={`${props.title} thumbnail`}/>
        <p className="thumbnail__text">{props.title}</p>
      </a>
    </div>
  );
}
