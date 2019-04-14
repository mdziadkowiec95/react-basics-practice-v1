import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const Title = ({ tag: Tag, isBig, additional, children }) => (
  <Tag className={isBig ? styles.titleBig : styles.title}>
    {children}
    {additional && <span className={styles.additional}> ({additional})</span>}
  </Tag>
);

Title.defaultProps = {
  tag: "h2"
};

export default Title;
