import React from "react";
import Carousel from "./Carousel";
import merch1 from "./images/merch-1.jpg";
import ld from "./images/ld.png";
import w from "./images/w.png";
import "./Merch.css";

export default function Merch() {
  const images = [merch1, ld, w, merch1];
  return (
    <section className="merch">
        <Carousel images={images} />
        <h2 className="merch__text merch__text--store">
        <a className="merch__text--store--link"
        href="https://thebethsnz.bandcamp.com/merch"
        target="_blank"
        rel="noopener noreferrer"
      >visit store</a></h2>
    </section>
  );
}
