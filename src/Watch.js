import React from "react";
import ld from "./images/ld.png";
import huh from "./images/huh.png";
import hyamlc from "./images/hyamlc.png";
import lits from "./images/lits.png";
import ywlm from "./images/ywlm.png";
import fmhm from "./images/fmhm.png";
import gno from "./images/gno.png";
import w from "./images/w.png";
import "./Watch.css";

export default function Watch() {
  return (
    <section className="watch">
      <h2 className="watch__text">future me hates me</h2>
      <section className="watch__wrapper">
        <Thumbnail
          title="uptpwn girl"
          image={ld}
          modifyer="utg"
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
      <h2 className="watch__text">whatever</h2>
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
      <section className="watch__wrapper">
        <Thumbnail
          title="have yourself a merry litte christmas"
          image={hyamlc}
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
      <a className="thumbnail__link" href={props.link}>
        <img className="thumbnail__image" src={props.image} />
      </a>
      <p className="thumbnail__title">
        <a className="thumbnail__link" href={props.link}>
          {props.title}
        </a>
      </p>
    </div>
  );
}
