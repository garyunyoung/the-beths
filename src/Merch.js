import React from "react";
import Carousel from "./Carousel";

import "./Merch.scss";

export default function Merch(props) {
  const merch = [
    {
      title: "future me hates me - LP - orange",
      src: `${props.img}fmhm-o.jpg`,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "future me hates me - LP - transparent aqua",
      src: `${props.img}fmhm-a.jpg`,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "warm blood - EP - LP - pink",
      src: `${props.img}wb-p.jpg`,
      link: "http://smarturl.it/TheBethsWB-Vinyl"
    },
    {
      title: "dogs dogs dogs shirt - white",
      src: `${props.img}shirt-w.jpg`,
      link: "http://smarturl.it/TheBeths-ShirtW"
    },
    {
      title: "dogs dogs dogs shirt - black",
      src: `${props.img}shirt-b.jpg`,
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
