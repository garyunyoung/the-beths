import React from "react";
import scss from "../../styles/Header.scss";

export default function Header({ text }) {
  return (
    <>
      <h2 className="header">
        {text}
      </h2>
      <style jsx>{scss}</style>
    </>
  );
}
