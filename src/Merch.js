import React from "react";
import Carousel from "./Carousel";
import merch1 from "./images/fmhm-yellow-600.jpg";
import merch2 from "./images/fmhm-orange-600.jpg";
import merch3 from "./images/fmhm-green-600.jpg";
import merch4 from "./images/fmhm-aqua-600.jpg";
import "./Merch.css";

export default function Merch() {
  const merch = [
    { title: "future me hates me - LP - tangy yellow", src: merch1 },
    { title: "future me hates me - LP - orange", src: merch2 },
    { title: "future me hates me - LP - translucent green", src: merch3 },
    { title: "future me hates me - LP - transparent aqua", src: merch4 }
  ];

  return (
    <section className="merch">
    <h2 className="merch__text">new LP out now!</h2>
      <Carousel merch={merch} />
      <h2 className="merch__text merch__text--store">
        <a
          className="merch__text merch__text--store--link"
          href="https://thebethsnz.bandcamp.com/merch"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit store
        </a>
      </h2>
    </section>
  );
}