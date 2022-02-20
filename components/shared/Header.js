import React from "react";
import scss from "../../styles/Header.scss";

export default function Header({ id, text }) {
  return (
    <>
      <h2 id={id} className="header">
        {text}
      </h2>
      <style jsx>{scss}</style>
    </>
  );
}
