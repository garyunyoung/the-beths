import React from "react";
import Carousel from "../partials/Carousel";
import scss from "../../styles/Merch.scss";

export default function Merch({ data }) {
  const merch = data

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
