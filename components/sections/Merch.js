import React from "react";
import Carousel from "../partials/Carousel";
import { pukekoTee, jumpRopeGazersOrangeLp, blueAndRedStripedSocks, futureMeHatesMeCloudyBlue, wbP, cricketShirtY, rabbitShirtPB, rabitShirtB } from "../utilities/cloudinary.js";
import scss from "../../styles/Merch.scss";

export default function Merch() {
  const merch = [
    {
      title: "jump rope gazers - LP - orange",
      src: jumpRopeGazersOrangeLp,
      link: "https://found.ee/thebeths_merch"
    },
    {
      title: "pūkeko tee",
      src: pukekoTee,
      link: "https://found.ee/thebeths_merch"
    },
    {
      title: "cricket t-shirt - yellow",
      src: cricketShirtY,
      link: "https://found.ee/thebeths_merch"
    },
    {
      title: "rabbit t-shirt - baby blue",
      src: rabbitShirtPB,
      link: "https://found.ee/thebeths_merch"
    },
    {
      title: "rabbit t-shirt - black",
      src: rabitShirtB,
      link: "https://found.ee/thebeths_merch"
    },
    {
      title: "the beths: socks",
      src: blueAndRedStripedSocks,
      link: "https://found.ee/thebeths_merch"
    },
    {
      title: "future me hates me - LP - cloudy blue ",
      src: futureMeHatesMeCloudyBlue,
      link: "https://found.ee/thebeths_merch"
    },
    {
      title: "Warm Blood EP - LP - pink",
      src: wbP,
      link: "https://found.ee/thebeths_merch"
    }
  ];

  return (
    <section className="merch">
      <Carousel merch={merch} />
      <a
        className="merch__visit-link"
        href="https://found.ee/thebeths_merch"
        target="_blank"
        rel="noopener noreferrer"
      >
        visit store
      </a>
      <style jsx>{scss}</style>
    </section>
  );
}
