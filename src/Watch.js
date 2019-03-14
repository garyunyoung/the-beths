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
      <h1 className="watch__header">watch</h1>
      <section className="watch__subsection">
        <h2 className="watch__title">future me hates me</h2>
        <Thumbnail title="uptpwn girl" image={ld} modifyer="utg" />
        <Thumbnail title="happy unhappy" image={huh} modifier="huh"/>
        <Thumbnail title="little death" image={ld} modifier="ld"/>
        <Thumbnail title="great no one" image={gno} modifier="gno"/>
        <Thumbnail title="future me hates me" image={fmhm} modifier="fmhm"/>
        <Thumbnail title="you wouldn't like me" image={ywlm} modifier="ywlm"/>
        <Thumbnail title="whatever" image={w} modifier="w"/>
        <Thumbnail title="lying in the sun" image={lits} modifier="lits"/>
        <Thumbnail title="have yourself a merry litte christmas" image={hyamlc} modifier="hyamlc"/>
      </section>
    </section>
  )
}

function Thumbnail(props) {
  return (
    <div
      className={`thumbnail ${
        props.modifier ? `thumbnail--${props.modifier}` : ""
      }`}
    >
      <img className="thumbnail__image" src={props.image} />
      <p className="thumbnail__title">{props.title}</p>
    </div>
  );
}

