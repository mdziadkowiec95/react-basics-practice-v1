import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <ListItem key={item.shortName} {...item} />
    ))}
  </ul>
);

export default List; 