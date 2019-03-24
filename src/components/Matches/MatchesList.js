import React from "react";
import styles from "./MatchesList.module.scss";
import MatchesListItem from "./MatchesListItem";

const MatchesList = ({ match, items }) => (
  <ul className={styles.wrapper}>
    {items.map(item => (
      <MatchesListItem key={item.id} match={match} {...item} />
    ))}
  </ul>
);

export default MatchesList;
