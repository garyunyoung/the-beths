import React, { useState } from "react";
import Sticky from "./_sticky";
import Socials from "./Socials";
import { logo, tui } from "./cloudinary";
import scss from "../styles/SiteHeader.scss";

export default function SiteHeader(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Sticky>
      <header className="site-header">
        <a className="site-header__logo" href="#" onClick={() => closeMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 70.3"
            width="300"
            height="70.3"
          >
            <defs>
              <clipPath id="_clipPath_TjVwVwaHm3nqEykztIOqVjx7Z8NAbWUn">
                <rect width="300" height="70.3" />
              </clipPath>
            </defs>
            <g clip-path="url(#_clipPath_TjVwVwaHm3nqEykztIOqVjx7Z8NAbWUn)">
              <path
                d=" M 39.778 8.644 C 36.547 7.621 33.224 6.8 29.79 7.347 C 27.799 7.666 26.392 7.494 24.735 5.817 C 22.182 3.234 19.067 4.293 18.951 7.778 C 18.839 10.989 17.021 12.032 14.762 12.959 C 10.214 14.833 6.273 17.68 2.267 20.425 C -0.696 22.456 -0.772 25.743 2.145 29.036 C 4.298 31.472 6.455 30.803 8.36 28.691 C 10.796 25.997 14.21 24.903 17.315 22.481 C 18.86 30.585 20.293 38.158 21.752 45.725 C 22.623 50.228 24.097 54.513 26.736 58.296 C 27.855 59.897 29.684 60.839 31.375 59.618 C 32.966 58.469 32.961 56.605 31.467 55.06 C 29.152 52.669 28.954 49.549 28.539 46.52 C 27.845 41.42 27.334 36.289 26.538 31.209 C 24.239 16.51 25.657 16.672 39.003 15.902 C 40.878 15.79 42.817 16.641 43.283 13.501 C 43.75 10.381 42.017 9.353 39.778 8.644 L 39.778 8.644 L 39.778 8.644 L 39.778 8.644 L 39.778 8.644 Z  M 231.781 25.268 C 228.104 25.917 224.299 26.079 220.739 27.102 C 216.322 28.368 215.851 26.327 216.059 22.812 C 216.241 19.727 216.246 16.617 216.023 13.538 C 215.826 10.823 213.815 8.619 211.475 8.609 C 209.444 8.604 209.479 11.532 209.322 13.386 C 208.922 18.395 208.634 23.475 209.829 28.373 C 210.502 31.098 210.259 33.043 208.188 34.897 C 206.456 36.442 205.604 38.371 207.155 40.509 C 208.421 42.267 208.75 45.549 212.432 43.781 C 214.154 42.955 213.896 44.794 214.301 45.731 C 216.393 50.558 217.396 55.973 221.949 59.756 C 223.965 55.77 222.335 52.402 221.129 49.145 C 217.305 38.741 217.786 37.612 228.255 34.522 C 229.025 34.289 229.755 33.854 230.535 33.707 C 232.941 33.261 233.634 31.017 235.027 29.523 C 236.203 28.251 235.007 27.061 234.607 25.917 C 234.06 24.367 232.895 25.071 231.781 25.268 L 231.781 25.268 L 231.781 25.268 L 231.781 25.268 L 231.781 25.268 Z  M 292.586 37.745 C 291.314 36.636 289.035 36.383 289.455 33.997 C 289.881 31.546 291.882 30.751 293.974 30.178 C 294.759 29.971 295.635 30.001 296.344 29.672 C 298.466 28.694 300.477 27.519 299.9 24.637 C 299.337 21.821 297.524 20.545 294.688 20.636 C 288.437 20.696 283.418 24.308 281.828 29.889 C 280.419 34.853 283.149 41.19 288.047 44.33 C 292.064 46.898 292.307 48.534 289.02 51.629 C 287.622 52.951 286.052 54.095 284.568 55.331 C 283.423 56.278 280.516 56.436 281.529 58.294 C 282.608 60.275 284.451 62.858 286.994 62.929 C 295.164 63.157 302.311 51.923 299.231 44.512 C 297.858 41.205 294.966 39.817 292.586 37.745 L 292.586 37.745 L 292.586 37.745 L 292.586 37.745 Z  M 277.633 51.224 C 273.601 43.991 270.091 36.368 265.28 29.687 C 259.642 21.852 252.323 19.795 249.456 27.813 C 247.015 29.181 247.481 27.028 247.116 25.884 C 246.503 22.921 245.734 19.983 245.318 16.995 C 244.791 13.216 244.594 9.544 242.259 6.115 C 240.77 3.932 239.26 3.876 237.533 4.484 C 235.715 5.127 236.09 6.652 236.394 8.46 C 238.632 21.396 240.506 34.388 242.7 47.324 C 243.115 49.791 242.912 52.607 245.009 54.602 C 246.174 55.707 246.367 58.498 248.818 57.353 C 250.819 56.416 252.186 55.17 251.629 52.1 C 250.672 46.853 249.036 41.332 252.47 36.181 C 252.845 35.608 252.551 34.585 252.561 33.77 C 256.416 30.574 259.211 31.242 261.567 35.75 C 263.633 39.711 266.449 43.277 268.546 47.223 C 270.091 50.14 272.051 52.47 274.797 54.207 C 275.81 55.165 277.02 55.438 278.165 54.704 C 278.676 54.385 278.413 53.584 277.846 53.144 C 277.785 52.495 277.922 51.741 277.633 51.224 L 277.633 51.224 L 277.633 51.224 Z  M 84.551 41.303 C 82.864 41.688 81.775 40.695 81.613 39.13 C 81.416 37.164 82.656 36.06 84.51 35.62 C 86.222 35.701 87.073 36.699 87.038 38.294 C 86.997 39.839 86.055 40.963 84.551 41.303 L 84.551 41.303 L 84.551 41.303 Z  M 107.435 51.078 C 101.362 52.339 95.299 53.064 89.2 51.25 C 88.831 50.05 89.687 49.275 90.203 48.384 C 94.488 46.115 96.722 42.017 95.917 37.884 C 95.228 34.338 90.593 30.165 86.627 29.856 C 79.369 29.293 72.152 32.52 74.553 43.399 C 74.76 44.342 75.93 45.618 74.183 46.251 C 72.825 46.738 71.772 46.302 71.002 44.904 C 69.984 43.075 68.712 41.394 67.583 39.636 C 65.015 35.67 60.507 33.168 56.885 33.725 C 55.579 34.065 56.703 36.055 53.923 36.43 C 53.923 28.924 53.872 21.569 53.938 14.22 C 53.973 10.467 52.935 7.296 50.134 4.627 C 48.781 3.335 47.434 3.71 46.102 4.004 C 44.821 4.287 45.19 5.538 45.282 6.46 C 46.523 17.902 45.58 29.415 46.335 40.847 C 46.761 47.244 46.74 53.97 50.139 59.876 C 51.157 61.639 52.287 63.199 54.672 62.748 C 57.195 62.272 57.792 60.737 57.757 58.22 C 57.701 53.793 59.433 49.817 61.449 45.871 C 62.7 43.415 63.501 44.777 64.66 45.507 C 64.392 45.132 64.098 44.772 63.809 44.413 C 64.22 44.605 64.438 45.096 64.66 45.507 C 67.892 53.945 70.298 55.53 79.835 55.596 C 80.413 55.601 81.142 55.784 81.542 56.164 C 87.808 62.049 95.036 62.404 102.78 59.967 C 103.129 59.729 103.489 59.491 103.843 59.248 C 105.546 58.777 107.318 58.473 108.934 57.794 C 111.644 56.66 113.042 54.097 112.338 51.58 C 111.603 48.981 109.122 50.729 107.435 51.078 L 107.435 51.078 L 107.435 51.078 Z  M 176.878 31.275 C 177.44 30.095 178.894 28.717 180.069 28.6 C 181.994 28.408 182.409 30.115 182.055 31.847 C 181.487 33.382 180.586 34.739 178.818 34.597 C 176.863 34.441 176.149 32.789 176.878 31.275 L 176.878 31.275 Z  M 135.973 27.496 C 135.912 25.886 135.958 24.265 135.958 21.55 C 135.375 18.096 135.649 14.059 140.364 11.395 C 142.567 10.154 144.705 9.505 146.645 10.858 C 148.706 12.296 147.779 14.677 147.106 16.617 C 145.495 21.246 142.856 25.263 139.412 28.747 C 138.673 29.497 138.293 31.027 136.874 30.495 C 135.512 29.983 136.018 28.565 135.973 27.496 L 135.973 27.496 Z  M 138.749 59.361 C 137.69 55.435 137.158 51.51 136.935 48.461 C 136.92 41.912 136.991 41.694 142.274 43.456 C 146.483 44.854 151.036 45.244 154.881 47.817 C 156.435 48.861 156.886 49.327 155.316 50.902 C 151.279 54.934 146.675 58.099 141.666 60.733 C 140.162 61.528 139.361 61.619 138.749 59.361 L 138.749 59.361 Z  M 204.224 47.66 C 203.627 47.898 203.069 48.238 202.497 48.531 C 200.664 49.732 198.202 48.724 196.465 50.249 C 196.465 50.249 196.46 50.249 196.46 50.254 C 196.156 50.198 195.872 50.259 195.619 50.436 C 194.955 50.441 194.297 50.451 193.633 50.461 C 188.148 50.097 182.571 50.836 177.217 48.79 C 175.429 48.111 174.016 47.711 173.864 45.366 C 173.712 42.95 175.202 42.226 176.914 41.623 C 181.416 40.032 185.073 37.059 188.842 34.299 C 191.668 32.232 191.891 30.029 189.652 26.939 C 187.135 23.459 183.923 22.765 180.282 23.292 C 171.246 24.604 164.519 33.346 165.239 42.509 C 165.305 43.304 165.573 44.241 164.697 44.672 C 163.43 45.295 163.268 43.623 162.382 43.38 C 158.75 39.45 153.776 38.042 148.919 36.76 C 145.728 35.915 146.26 35.114 147.754 33.017 C 149.593 30.449 150.97 27.557 152.546 24.802 C 153.862 23.085 154.263 21.074 154.379 18.982 C 156.507 13.071 154.668 7.884 150.444 3.949 C 141.519 -4.368 133.212 1.66 127.225 11.349 C 124.951 15.031 124.298 19.175 127.94 22.882 C 129.398 24.366 129.079 26.504 129.115 28.464 C 129.322 40.083 129.956 51.646 133.03 62.952 C 134.433 68.118 140.84 71.74 145.657 69.708 C 153.792 66.269 160.802 61.386 165.396 53.586 C 166.586 52.786 165.477 50.608 166.93 50.345 C 168.764 50.016 169.098 52.097 169.721 53.227 C 170.871 55.324 172.375 56.823 174.558 57.709 C 186.228 62.44 197.275 60.09 207.866 54.437 C 210.277 53.156 211.26 49.96 210.13 47.645 C 208.757 44.844 206.23 46.865 204.224 47.66 L 204.224 47.66 Z "
                fill-rule="evenodd"
                fill="rgb(0,0,0)"
              />
            </g>
          </svg>
        </a>
        <div className="site-header__nav site-header__nav--desktop">
          <NavItem text="merch" desktop="true" closeMenu={closeMenu} link="merch" />
          <NavItem text="pre-order" desktop="true" closeMenu={closeMenu} link="" />
          <NavItem text="videos" desktop="true" closeMenu={closeMenu} link="watch" />
          <NavItem text="tour" desktop="true" closeMenu={closeMenu} link="tour" />
          <li className={`site-menu__nav-item site-menu__nav-item--desktop`}>
            <a
              className="site-menu__nav-item-link site-menu__nav-item-link--desktop"
              href="https://breakfastandtravelupdates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <NavItem text="contact" desktop="true" closeMenu={closeMenu} link="tour" />
          <NavItem text="subscribe" desktop="true" closeMenu={closeMenu} link="tour" />
          <li className="site-menu__nav-item site-menu__nav-item--desktop">
            <span className="site-menu__nav-item-link site-menu__nav-item-link--desktop">
              O
            </span>
            <a href="#game" onClick={props.toggleGame} />
          </li>
        </div>
        <div className="site-header__nav">
          <button
            className="site-header__menu-toggle"
            onClick={() => toggleMenu()}
          >
            {isOpen ? "x" : "menu //"}
          </button>
        </div>
      </header>
      <nav className={`site-menu ${isOpen ? "site-menu--is-open" : ""}`}>
        <ul className="site-menu__nav">
          <NavItem text="merch" closeMenu={closeMenu} link="merch" />
          <NavItem text="pre-order" closeMenu={closeMenu} link="" />
          <NavItem text="watch" closeMenu={closeMenu} link="watch" />
          <NavItem text="tour" closeMenu={closeMenu} link="tour" />
          <li className={`site-menu__nav-item`}>
            <a
              className="site-menu__nav-item-link"
              href="https://breakfastandtravelupdates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <NavItem text="contact" link="contact" />
          <li className={`site-menu__nav-item`}>
            <span className="site-menu__nav-item-link">subscribe</span>
          </li>
          <li className="site-menu__nav-item">
            <span className="site-menu__nav-item-link">game</span>
            <a href="#game" onClick={props.toggleGame} />
          </li>
          <li>
            <Socials className="nav__social" width="24" color={"black"} />
          </li>
        </ul>
      </nav>
      <style jsx>{scss}</style>
    </Sticky>
  );
}

export function NavItem(props) {
  return (
    <li
      className={`site-menu__nav-item ${
        props.desktop ? "site-menu__nav-item--desktop" : ""
      }`}
    >
      <a
        className={`site-menu__nav-item-link ${
          props.desktop ? "site-menu__nav-item-link--desktop" : ""
        }`}
        href={`#${props.link}`}
        onClick={() => props.closeMenu()}
      >
        {props.text}
      </a>
    </li>
  );
}