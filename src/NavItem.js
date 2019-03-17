import React from "react";

export default function NavItem(props) {
  return (
    <li className={`nav__item nav__item--${props.item}`}>
      <a
        className="nav__link"
        href={`#${props.item}`}
        onClick={props.toggleNav}
      >
        {props.item}
      </a>
    </li>
  );
}