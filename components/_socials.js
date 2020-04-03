import React from "react";
import { Icon } from "./icons";
import scss from "../styles/_socials.scss";

export default function Socials(props) {
  return (
    <section className={`socials ${props.className}`}>
      <a
        href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="spotify"
          width={props.width}
          fill={props.color}
          className="socials__icon socials__icon--spotify"
        />
      </a>
      <a
        href="https://www.facebook.com/thebethsnz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="facebook"
          width={props.width}
          fill={props.color}
          className="socials__icon socials__icon--facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/lizstokedstokes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="instagram"
          width={props.width}
          fill={props.color}
          className="socials__icon socials__icon--instagram"
        />
      </a>
      <a
        href="https://twitter.com/lizstokedstokes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="twitter"
          width={props.width}
          fill={props.color}
          className="socials__icon socials__icon--twitter"
        />
      </a>
      <a
        href="https://thebethsnz.bandcamp.com/music"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="bandcamp"
          width={props.width}
          fill={props.color}
          className="socials__icon socials__icon--bandcamp"
        />
      </a>
      <style jsx>{scss}</style>
    </section>
  );
}
