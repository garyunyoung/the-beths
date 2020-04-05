import React from "react";
import { Icon } from "./icons";
import scss from "../styles/_socials.scss";

export default function Socials(props) {
  return (
    <section className={`socials-default ${props.className}`}>
      <a
        href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icons ${props.className}__icon ${props.className}__icon--spotify`}
      >
        <Icon
          name="spotify"
          width={props.width}
          fill={props.color}
        />
      </a>
      <a
        href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default ${props.className}__icon ${props.className}__icon--spotify`}

      >
        <Icon
          name="spotify"
          width={props.width}
          fill={props.color}
        />
      </a>
      <a
        href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default ${props.className}__icon ${props.className}__icon--spotify`}
      >
        <Icon
          name="spotify"
          width={props.width}
          fill={props.color}
        />
      </a>
      <a
        href="https://www.facebook.com/thebethsnz/"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default ${props.className}__icon ${props.className}__icon--facebook`}
      >
        <Icon
          name="facebook"
          width={props.width}
          fill={props.color}
        />
      </a>
      <a
        href="https://www.instagram.com/lizstokedstokes/"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default ${props.className}__icon ${props.className}__icon--instagram`}
      >
        <Icon
          name="instagram"
          width={props.width}
          fill={props.color}
        />
      </a>
      <a
        href="https://twitter.com/lizstokedstokes"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default ${props.className}__icon ${props.className}__icon--twitter`}
      >
        <Icon
          name="twitter"
          width={props.width}
          fill={props.color}
        />
      </a>
      <a
        href="https://thebethsnz.bandcamp.com/music"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default ${props.className}__icon ${props.className}__icon--bandcamp`}
      >
        <Icon
          name="bandcamp"
          width={props.width}
          fill={props.color}
        />
      </a>
      <style jsx>{scss}</style>
    </section>
  );
}
