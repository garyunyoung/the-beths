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
    { title: "future me hates me - LP - orange", src: fmhmO },
    { title: "warm blood EP - LP - pink (PRE-ORDER)", src: wbP },
    { title: "future me hates me - LP - tangy yellow", src: fmhmY },
    { title: "future me hates me - LP - translucent green", src: fmhmG },
    { title: "future me hates me - LP - transparent aqua", src: fmhmA }
  ];

  return (
    <section className="merch">
      <Carousel merch={merch} />
      <h2 className="merch__visit">visit stores</h2>
      <div className="merch__store">
        <a
          className="merch__store__link"
          href="https://thebethsnz.bandcamp.com/merch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Europe
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
      </div>
    </section>
  );
}
