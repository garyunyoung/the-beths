import React from "react";
import scss from "../../styles/Header.scss";

export default function Header({ header }) {
  return (
    <>
      <h2 className={`header header--${header}`}>
        {header}
      </h2>
      <style jsx>{scss}</style>
    </>
  );
}
