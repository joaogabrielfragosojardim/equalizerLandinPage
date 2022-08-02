import { Logo } from "./Icons/Logo";
import style from "../styles/Footer.module.css";
import { IconFacebook } from "./Icons/IconFacebook";
import { IconInstagram } from "./Icons/IconInstagram";
import { IconTwitter } from "./Icons/IconTwitter";

export const Footer = () => (
  <footer className={style.containerFooter}>
    <div>
      <Logo />
    </div>
    <div>
      <p>
        All rights reserved © Equalizer 2021
        <br /> Have any problems? Contact us via social media or
        <br /> email us at <b>equalizer@example.com</b>
      </p>
    </div>
    <div className={style.containerSocial}>
      <div>
        <a href="#">
          <IconFacebook />
        </a>
        <a href="#">
          <IconInstagram />
        </a>
        <a href="#">
          <IconTwitter />
        </a>
      </div>
    </div>
  </footer>
);
