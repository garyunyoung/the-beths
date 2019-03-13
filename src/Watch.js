import React from "react";
import "./Watch.css";
import lilBeth from "./images/lil-beth.jpg";

export default function Watch() {
  //   const images = [merch1, merch1, merch1, merch1];
  return (
    <section className="watch">
      <h1 className="watch__header">watch</h1>
      <section className="watch__subsection">
        <div className="ld">
          <img className="ld__beth" src={lilBeth} />
          <p className="heading heading--ld">little death</p>
        </div>
        <div className="fmhm">
          <img className="fmhm__beth" src={lilBeth} />
          <p className="heading heading--fmhm">future me hates me</p>
        </div>
        <div className="utg">
          <img className="utg__beth" src={lilBeth} />
          <p className="heading heading--ug">uptown girl</p>
        </div>
        <div className="huh">
          <img className="huh__beth" src={lilBeth} />
          <p className="heading heading--ug">happy unhappy</p>
        </div>
        <div className="ywlm">
          <img className="ywlm__beth" src={lilBeth} />
          <p className="heading heading--ug">you wouldn't like me</p>
        </div>
        <div className="hyamlc">
          <img className="hyamlc__beth" src={lilBeth} />
          <p className="heading heading--ug">have yourself a <br></br>merry little christmas</p>
        </div>
        <div className="gno">
          <img className="gno__beth" src={lilBeth} />
          <p className="heading heading--ug">great noone</p>
        </div>
        <div className="w">
          <img className="w__beth" src={lilBeth} />
          <p className="heading heading--ug">whatever</p>
        </div>
        <div className="lits">
          <img className="lits__beth" src={lilBeth} />
          <p className="heading heading--ug">lying in the sun</p>
        </div>
      </section>
    </section>
  );
}
