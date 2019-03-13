import React from "react";
import Carousel from "./Carousel";
import merch1 from "./images/merch-1.jpg";
import "./Merch.css";

export default function Merch() {
  const images = [merch1, merch1, merch1, merch1];
  return (
    <section className="merch">
        <h1 className="merch__header">merch</h1>
        <p className="merch__subheader">future me hates me</p>
        <Carousel images={images} />
    </section>
  );
}
