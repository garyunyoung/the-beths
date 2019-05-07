import React from "react";
import Carousel from "./Carousel";
import { fmhmO, fmhmA, wbP, shirtW, shirtB } from './cloudinary';


import "./Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "future me hates me - LP - orange",
      src: fmhmO,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "future me hates me - LP - transparent aqua",
      src: fmhmA,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "warm blood - EP - LP - pink",
      src: wbP,
      link: "http://smarturl.it/TheBethsWB-Vinyl"
    },
    {
      title: "dogs dogs dogs shirt - white",
      src: shirtW,
      link: "http://smarturl.it/TheBeths-ShirtW"
    },
    {
      title: "dogs dogs dogs shirt - black",
      src: shirtB,
      link: "http://smarturl.it/TheBeths-ShirtB"
    },
  ];

  return (
    <section className="merch">
      <Carousel merch={merch} />
      <a
        className="merch__visit"
        href="http://smarturl.it/TheBeths-Store"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>visit store</h1>
      </a>
    </section>
  );
}
