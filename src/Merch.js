import React from "react";
import Carousel from "./Carousel";
import fmhmO from "./images/fmhm-orange-600x400.jpg";
import fmhmA from "./images/fmhm-aqua-600.jpg";
import wbP from "./images/wb-pink-600x400.jpg";
import shirtB from "./images/TB-shirt-b-600x600.jpg";
import shirtW from "./images/TB-shirt-w-600x600.jpg";

import "./Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "dogs dogs dogs shirt - black",
      src: shirtB,
      link: "http://smarturl.it/TheBeths-ShirtB"
    },
    {
      title: "dogs dogs dogs shirt - white",
      src: shirtW,
      link: "http://smarturl.it/TheBeths-ShirtW"
    },
    {
      title: "warm blood - EP - LP - pink",
      src: wbP,
      link: "http://smarturl.it/TheBethsWB-Vinyl"
    },
    {
      title: "future me hates me - LP - orange",
      src: fmhmO,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "future me hates me - LP - transparent aqua",
      src: fmhmA,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    }
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
