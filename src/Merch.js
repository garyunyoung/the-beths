import React from "react";
import Carousel from "./Carousel";

import "./Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "future me hates me - LP - orange",
      src: 'https://res.cloudinary.com/garyou/image/upload/v1556808499/the-beths/fmhm-o.jpg',
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "future me hates me - LP - transparent aqua",
      src: 'https://res.cloudinary.com/garyou/image/upload/v1556808497/the-beths/fmhm-a.jpg',
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "warm blood - EP - LP - pink",
      src: 'https://res.cloudinary.com/garyou/image/upload/v1556808503/the-beths/wb-p.jpg',
      link: "http://smarturl.it/TheBethsWB-Vinyl"
    },
    {
      title: "dogs dogs dogs shirt - white",
      src: 'https://res.cloudinary.com/garyou/image/upload/v1556808502/the-beths/shirt-w.jpg',
      link: "http://smarturl.it/TheBeths-ShirtW"
    },
    {
      title: "dogs dogs dogs shirt - black",
      src: 'https://res.cloudinary.com/garyou/image/upload/v1556808501/the-beths/shirt-b.jpg',
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
