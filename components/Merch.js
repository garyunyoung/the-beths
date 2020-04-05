import React from "react";
import Carousel from "./Carousel";
import { blueAndRedStripedSocks, futureMeHatesMeCloudyBlue, fmhmM, fmhmO, fmhmA, wbP, shirtW, shirtB, cricketShirtY, rabbitShirtPB, rabitShirtB } from "./cloudinary";
import scss from "../styles/Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "the beths: socks [pre-order]",
      src: blueAndRedStripedSocks,
      link: "https://thebeths.merchtable.com/apparel/the-beths-socks"
    },
    {
      title: "future me hates me - LP - cloudy blue ",
      src: futureMeHatesMeCloudyBlue,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "future me hates me - LP - magenta",
      src: fmhmM,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "cricket t-shirt - yellow",
      src: cricketShirtY,
      link: "http://smarturl.it/TheBethsCricketY"
    },
    {
      title: "rabbit t-shirt - baby blue",
      src: rabbitShirtPB,
      link: "https://smarturl.it/TheBethsRabbitBB"
    },
    {
      title: "rabbit t-shirt - black",
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
