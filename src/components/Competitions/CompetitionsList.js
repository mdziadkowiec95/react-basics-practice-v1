import React from "react";
import styles from "./CompetitionsList.module.scss";
import CompetitionsListItem from "./CompetitionsListItem";

const CompetitonsList = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <CompetitionsListItem key={item.code} {...item} />
    ))}
  </ul>
);

export default CompetitonsList;
