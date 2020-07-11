import React from "react";
import Carousel from "./Carousel";
import { pukekoTee, jumpRopeGazersShirtBundle, jumpRopeGazersShirtCdBundle, jumpRopeGazersOrangeLp, jumpRopeGazersTuiShirt, blueAndRedStripedSocks, futureMeHatesMeCloudyBlue, fmhmM, fmhmO, fmhmA, wbP, shirtW, shirtB, cricketShirtY, rabbitShirtPB, rabitShirtB } from "./cloudinary";
import scss from "../styles/Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "pūkeko tee - [PRE-ORDER]",
      src: pukekoTee,
      link: "https://thebeths.merchtable.com/"
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
    },
    {
      title: "the beths: socks",
      src: blueAndRedStripedSocks,
      link: "https://thebeths.merchtable.com/apparel/the-beths-socks"
    },
    {
      title: "jump rope gazers - LP - orange",
      src: jumpRopeGazersOrangeLp,
      link: "https://thebeths.merchtable.com/music/the-beths-jump-rope-gazers-vinyl-lp"
    },
    {
      title: "future me hates me - LP - cloudy blue ",
      src: futureMeHatesMeCloudyBlue,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "Warm Blood EP - LP - pink",
      src: wbP,
      link: "https://thebeths.merchtable.com/music/warm-blood-12-vinyl-ep"
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
        <h3>visit store</h3>
      </a>
      <style jsx>{scss}</style>
    </section>
  );
}
