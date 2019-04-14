import React from "react";
import styles from "./Header.module.scss";
import Title from "../Title/Title";

const Header = ({ name, image, address, website, founded, stadium }) => (
  <header className={styles.wrapper}>
    <Title isBig additional={founded}>
      {name}
    </Title>
    <img src={image} className={styles.logo} />
  </header>
);

export default Header;
