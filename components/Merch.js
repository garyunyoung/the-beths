import React from "react";
import Carousel from "./Carousel";
import { jumpRopeGazersShirtBundle, jumpRopeGazersShirtCdBundle, jumpRopeGazersOrangeLp, jumpRopeGazersTuiShirt, blueAndRedStripedSocks, futureMeHatesMeCloudyBlue, fmhmM, fmhmO, fmhmA, wbP, shirtW, shirtB, cricketShirtY, rabbitShirtPB, rabitShirtB } from "./cloudinary";
import scss from "../styles/Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "jump rope gazers LP + tee - [PRE ORDER]",
      src: jumpRopeGazersShirtBundle,
      link: "https://thebeths.merchtable.com/music/the-beths-jump-rope-gazers-vinyl-lp-plus-tee"
    },
    {
      title: "jump rope gazers CD + tee - [PRE ORDER]",
      src: jumpRopeGazersShirtCdBundle,
      link: "https://thebeths.merchtable.com/music/the-beths-jump-rope-gazers-cd-plus-tee"
    },
    {
      title: "jump rope gazers - LP - orange [PRE ORDER]",
      src: jumpRopeGazersOrangeLp,
      link: "https://thebeths.merchtable.com/music/the-beths-jump-rope-gazers-vinyl-lp"
    },
    {
      title: "jump rope gazers - tui tee [PRE ORDER]",
      src: jumpRopeGazersTuiShirt,
      link: "https://thebeths.merchtable.com/apparel/jump-rope-gazers-t-shirt"
    },
    {
      title: "the beths: socks",
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
        <h3>visit store</h3>
      </a>
      <style jsx>{scss}</style>
    </section>
  );
}
