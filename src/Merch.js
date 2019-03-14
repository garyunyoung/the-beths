import React from "react";
import Carousel from "./Carousel";
import merch1 from "./images/merch-1.jpg";
import "./Merch.css";

export default function Merch() {
  const images = [merch1, merch1, merch1, merch1];
  return (
    <section className="merch">
        <Carousel images={images} />
    </section>
  );
}
