import React from "react";
import Carousel from "./Carousel";
import merchImage1 from "./images/merch-ph.jpg";

export default function Merch() {
  const images = [merchImage1, merchImage1, merchImage1, merchImage1];
  return <Carousel images={images} />;
}
