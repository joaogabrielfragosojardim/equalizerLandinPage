import { Logo } from "./Icons/Logo";
import style from "../styles/Header.module.css";

export const Header = () => (
  <header className={style.containerHeader}>
    <Logo />
  </header>
);
