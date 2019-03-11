import React from "react";
import Carousel from "./Carousel";
import merch_1 from "./images/merch-ph.jpg";

export default function Merch() {
  const photos = [merch_1, merch_1, merch_1, merch_1];
  return <Carousel photos={photos} />;
}
