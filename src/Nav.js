import React from "react";
import "./Nav.css";




export default function Nav() {
  const openNav = () => {
    document.querySelector('.nav__wrapper').classList.toggle('visible');
    };
  return (
    <div className="nav">
      <p className="nav-icon" onClick={openNav}>
        =
      </p>
      <div className="nav__wrapper">
        <ul className="nav__list">
          <li className="nav__tour">tour</li>
          <li className="nav__merch">merch</li>
          <li className="nav__watch">watch</li>
          <li className="nav__contact">contact</li>
        </ul>
      </div>
    </div>
  );
}



  //  let toggleLiveSection = () => {
  //     document.querySelector('.live').classList.toggle('visible');
  //     let nav1 = document.querySelector('.nav-item__live');
  //     nav1.textContent = nav1.textContent === nav1.dataset.textSwap ?
  //       nav1.dataset.textOriginal : 
  //       nav1.dataset.textSwap;
  //   };
