import React from "react";
import styles from "./CompetitionsListItem.module.scss";
import { Link } from "react-router-dom";

const CompetitionsListItem = ({ code, name, image }) => (
  <li className={styles.listItem}>
    <Link className={styles.listItemLink} to={code}>
      <h2 className={styles.header}>{name}</h2>
      {image ? (
        <img src={image} className={styles.logo} alt={name + " logo"} />
      ) : (
        <span>No Logo</span>
      )}
    </Link>
  </li>
);

export default CompetitionsListItem;
