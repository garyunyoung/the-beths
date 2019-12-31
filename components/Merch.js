import React from "react";
import Carousel from "./Carousel";
import { fmhmM, fmhmO, fmhmA, wbP, shirtW, shirtB, cricketShirtY, rabbitShirtPB, rabitShirtB } from "./cloudinary";
import scss from "../styles/Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "future me hates me - LP - magenta",
      src: fmhmM,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "cricket t-shirt - yellow [PRE-ORDER]",
      src: cricketShirtY,
      link: "http://smarturl.it/TheBethsCricketY"
    },
    {
      title: "rabbit t-shirt - baby blue [PRE ORDER]",
      src: rabbitShirtPB,
      link: "https://smarturl.it/TheBethsRabbitBB"
    },
    {
      title: "rabbit t-shirt - black [PRE ORDER]",
      src: rabitShirtB,
      link: "https://smarturl.it/TheBethsRabbitB"
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
      <style jsx>{scss}</style>
    </section>
  );
}
