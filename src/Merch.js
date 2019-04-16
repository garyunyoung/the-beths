import React from "react";
import Carousel from "./Carousel";
import fmhmY from "./images/fmhm-yellow-600x400.jpg";
import fmhmO from "./images/fmhm-orange-600x400.jpg";
import fmhmG from "./images/fmhm-green-600.jpg";
import fmhmA from "./images/fmhm-aqua-600.jpg";
import wbP from "./images/wb-pink-600x400.jpg";
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
      title: "warm blood - LP - pink",
      src: wbP,
      link: "http://smarturl.it/TheBethsWB-Vinyl"
    },
    {
      title: "future me hates me - LP - tangy yellow (SOLD OUT)",
      src: fmhmY,
      link: "http://smarturl.it/TheBethsFMHM-Vinyl"
    },
    {
      title: "future me hates me - LP - translucent green (SOLD OUT)",
      src: fmhmG,
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
      {/* <div className="merch__store">
        <a
          className="merch__store__link"
          href="https://thebethsnz.bandcamp.com/merch"
          target="_blank"
          rel="noopener noreferrer"
        >
          EU
        </a>
        <a
          className="merch__store__link"
          href="http://store.carparkrecords.com/categories/the-beths"
          target="_blank"
          rel="noopener noreferrer"
        >
          US
        </a>
        <a
          className="merch__store__link"
          href="https://artistfirst.com.au/collections/the-beths"
          target="_blank"
          rel="noopener noreferrer"
        >
          AUS
        </a>
        <a
          className="merch__store__link"
          href="https://flyingout.co.nz/collections/types?q=BETHS%2C%20THE"
          target="_blank"
          rel="noopener noreferrer"
        >
          NZ
        </a>
        <a
          className="merch__store__link"
          href="https://thebethsnz.bandcamp.com/merch"
          target="_blank"
          rel="noopener noreferrer"
        >
          UK
        </a>
      </div> */}
    </section>
  );
}
