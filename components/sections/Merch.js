import React from "react";
import Carousel from "../partials/Carousel";
import scss from "../../styles/Merch.scss";

export default function Merch({ merch }) {
  return (
    <section className="merch">
      <Carousel merch={merch} />
      <a
        className="link"
        href="https://found.ee/thebeths_merch"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Store
      </a>
      <style jsx>{scss}</style>
    </section>
  );
}
