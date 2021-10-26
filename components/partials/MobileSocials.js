import React, { useState } from "react";
import { Icon } from "../utilities/icons";
import scss from "../../styles/Socials.scss";

export default function MobileSocials(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExtraSocials = () => setIsOpen(!isOpen)

  return (
    <section className={`socials-default ${props.className} ${isOpen ? 'is-open' : ''}`}>
      <div className={`${props.className}__content`}>
        <a
          href="https://found.ee/thebeths_ig"
          target="_blank"
          rel="noopener noreferrer"
          className={`socials-default__icon ${props.className}__icon ${props.className}__icon--instagram`}
        >
          <Icon name="instagram" width={props.width} fill={props.color} />
        </a>
        <a
          href="https://found.ee/thebeths_fb"
          target="_blank"
          rel="noopener noreferrer"
          className={`socials-default__icon ${props.className}__icon ${props.className}__icon--facebook`}
        >
          <Icon name="facebook" width={props.width} fill={props.color} />
        </a>
        <a
          href="https://found.ee/thebeths_tw"
          target="_blank"
          rel="noopener noreferrer"
          className={`socials-default__icon socials-default__icon--twitter ${props.className}__icon ${props.className}__icon--twitter`}
        >
          <Icon name="twitter" width={props.width} fill={props.color} />
        </a>
        <a
          href="https://found.ee/thebeths_spotify"
          target="_blank"
          rel="noopener noreferrer"
          className={`socials-default__icon ${props.className}__icon ${props.className}__icon--spotify`}
        >
          <Icon name="spotify" width={props.width} fill={props.color} />
        </a>
        <a
          href="https://found.ee/thebeths_yt"
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

        <a
          href="https://www.patreon.com/thebeths"
          target="_blank"
          rel="noopener noreferrer"
          className='socials-default__icon socials-default__icon--patreon'
        >
          <svg
            height="24px"
            version="1.1"
            viewBox="0 0 569 546"
            width="14px"
            xmlns="http://www.w3.org/2000/svg">
            <title>Patreon logo</title>
            <g>
              <circle cx="362.589996" cy="204.589996" data-fill="1" r="204.589996"></circle>
              <rect data-fill="1" height="545.799988" width="100" x="0" y="0"></rect>
            </g>
          </svg>
        </a>
        <p
          className={`mobile-navigation-socials__more-arrow ${isOpen ? "is-open" : ""}`}
          onClick={() => toggleExtraSocials()}
        >→</p>
      </div>

      <div className={`${props.className}__content ${props.className}__extra-socials `}>
        <a
          href="https://found.ee/thebeths_apple"
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
          href="https://found.ee/thebeths_bc"
          target="_blank"
          rel="noopener noreferrer"
          className={`socials-default__icon socials-default__icon--bandcamp ${props.className}__icon ${props.className}__icon--bandcamp`}
        >
          <Icon name="bandcamp" width={props.width} fill={props.color} />
        </a>

        <a
          href="https://found.ee/thebeths_sc"
          target="_blank"
          rel="noopener noreferrer"
          className={`socials-default__icon ${props.className}__icon ${props.className}__icon--soundcloud`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            fill={props.color}
            viewBox="0 208 1048 581"
          >
            <path d="M0 686.216c0 13.014 4.718 22.854 14.152 29.524 9.435 6.669 19.52 9.027 30.256 7.076 10.085-1.952 17.161-5.531 21.229-10.736 4.066-5.205 6.1-13.827 6.1-25.864v-141.52c0-10.086-3.497-18.626-10.492-25.62-6.994-6.995-15.534-10.492-25.62-10.492-9.76 0-18.137 3.497-25.132 10.492C3.498 526.07 0 534.61 0 544.696v141.52zm112.24 60.512c0 9.436 3.335 16.511 10.004 21.229 6.67 4.718 15.21 7.076 25.62 7.076 10.736 0 19.438-2.359 26.108-7.076 6.669-4.717 10.004-11.793 10.004-21.229V416.84c0-9.76-3.498-18.138-10.492-25.132-6.995-6.994-15.535-10.492-25.62-10.492-9.76 0-18.138 3.498-25.132 10.492-6.995 6.995-10.492 15.372-10.492 25.132v329.888zm111.752 15.616c0 9.435 3.416 16.511 10.248 21.229 6.832 4.717 15.616 7.076 26.353 7.076 10.41 0 18.95-2.359 25.619-7.076 6.67-4.718 10.005-11.794 10.005-21.229V461.248c0-10.085-3.498-18.707-10.492-25.864-6.995-7.157-15.372-10.735-25.132-10.735-10.086 0-18.707 3.578-25.864 10.735s-10.736 15.779-10.736 25.864v301.096zm112.24 1.464c0 17.894 12.037 26.841 36.112 26.841 24.074 0 36.111-8.947 36.111-26.841v-488c0-27.328-8.296-42.781-24.888-46.36-10.736-2.603-21.31.488-31.72 9.272-10.411 8.784-15.616 21.146-15.616 37.088v488zm114.193 14.152V247.016c0-16.917 5.042-27.002 15.128-30.256 21.797-5.205 43.432-7.808 64.904-7.808 49.775 0 96.136 11.712 139.079 35.136 42.944 23.424 77.674 55.388 104.188 95.892 26.515 40.505 41.887 85.156 46.116 133.957 19.845-8.459 40.991-12.688 63.439-12.688 45.547 0 84.506 16.104 116.876 48.312 32.371 32.209 48.557 70.923 48.557 116.145 0 45.547-16.186 84.424-48.557 116.632-32.37 32.208-71.166 48.312-116.388 48.312l-424.56-.488c-2.929-.976-5.125-2.766-6.589-5.368s-2.193-4.882-2.193-6.834z" />
          </svg>
        </a>
      </div>
      <style jsx>{scss}</style>
    </section>
  );
}
