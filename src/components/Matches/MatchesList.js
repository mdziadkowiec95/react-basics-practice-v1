import React from "react";
import styles from "./MatchesList.module.scss";
import MatchesListItem from "./MatchesListItem";

const MatchesList = ({ items }) => (
  <ul>
    {items.map(item => (
      <MatchesListItem key={item.id} {...item} />
    ))}
  </ul>
);

export default MatchesList;
