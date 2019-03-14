import React from "react";
import "./Watch.css";
import ld from "./images/ld.jpg";
import huh from "./images/huh.jpg";
import hyamlc from "./images/hyamlc.jpg";
import lits from "./images/lits.jpg";
import ywlm from "./images/ywlm.jpg";
import fmhm from "./images/fmhm.jpg";
import gno from "./images/gno.jpg";
import w from "./images/w.jpg";


export default function Watch() {
  //   const images = [merch1, merch1, merch1, merch1];
  return (
    <section className="watch">
      <h1 className="watch__header">watch</h1>
      <section className="watch__subsection">
        <div className="ld">
          <img className="ld__beth" src={ld} />
          <p className="heading heading--ld">little death</p>
        </div>
        <div className="fmhm">
          <img className="fmhm__beth" src={fmhm} />
          <p className="heading heading--fmhm">future me hates me</p>
        </div>
        <div className="utg">
          <img className="utg__beth" src={ld} />
          <p className="heading heading--ug">uptown girl</p>
        </div>
        <div className="huh">
          <img className="huh__beth" src={huh} />
          <p className="heading heading--ug">happy unhappy</p>
        </div>
        <div className="ywlm">
          <img className="ywlm__beth" src={ywlm} />
          <p className="heading heading--ug">you wouldn't like me</p>
        </div>
        <div className="hyamlc">
          <img className="hyamlc__beth" src={hyamlc} />
          <p className="heading heading--ug">have yourself a <br></br>merry little christmas</p>
        </div>
        <div className="gno">
          <img className="gno__beth" src={gno} />
          <p className="heading heading--ug">great noone</p>
        </div>
        <div className="w">
          <img className="w__beth" src={w} />
          <p className="heading heading--ug">whatever</p>
        </div>
        <div className="lits">
          <img className="lits__beth" src={lits} />
          <p className="heading heading--ug">lying in the sun</p>
        </div>
      </section>
    </section>
  );
}
