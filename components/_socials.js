import React from "react";
import { Icon } from "./icons";
import scss from "../styles/_socials.scss";

export default function Socials(props) {
  return (
    <section className={`socials-default ${props.className}`}>
      <a
        href="https://www.instagram.com/lizstokedstokes/"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icon ${props.className}__icon ${props.className}__icon--instagram`}
      >
        <Icon name="instagram" width={props.width} fill={props.color} />
      </a>
      <a
        href="https://twitter.com/lizstokedstokes"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icon socials-default__icon--twitter ${props.className}__icon ${props.className}__icon--twitter`}
      >
        <Icon name="twitter" width={props.width} fill={props.color} />
      </a>
      <a
        href="https://www.facebook.com/thebethsnz/"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icon ${props.className}__icon ${props.className}__icon--facebook`}
      >
        <Icon name="facebook" width={props.width} fill={props.color} />
      </a>
      <a
        href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icon ${props.className}__icon ${props.className}__icon--spotify`}
      >
        <Icon name="spotify" width={props.width} fill={props.color} />
      </a>
      <a
        href="https://music.apple.com/us/artist/the-beths"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icon socials-default__icon--apple ${props.className}__icon ${props.className}__icon--apple`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          fill={props.color}
          viewBox="0 0 384 512"
        >
          <path d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z" />
        </svg>
      </a>
      <a
        href="https://thebethsnz.bandcamp.com/music"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icon socials-default__icon--bandcamp ${props.className}__icon ${props.className}__icon--bandcamp`}
      >
        <Icon name="bandcamp" width={props.width} fill={props.color} />
      </a>
      <a
        href="https://thebethsnz.bandcamp.com/music"
        target="_blank"
        rel="noopener noreferrer"
        className={`socials-default__icon ${props.className}__icon ${props.className}__icon--youtube`}
      >
        <Icon
          name="youtube"
          width={props.width}
          fill={props.color}
          viewBox="0 0 24 24"
        />
      </a>
      <style jsx>{scss}</style>
    </section>
  );
}
