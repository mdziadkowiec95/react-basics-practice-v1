import React from 'react';
import styles from './Header.module.scss'
import Title from '../Title/Title';
import Button from '../Button/Button';
import HeaderItem from './HeaderItem';

const Header = ({ name, area, ...items }) => {
  const details = Object.values(items).slice(1); // remove ID from details

  return (
    <header className={styles.wrapper}>
      <Button />
      {details.length ? (
        <>
          <Title additional={area}>{name}</Title>
          <div className={styles.details}>
            {details.map((el, index) => el !== 'id' && <HeaderItem index={index}>{el}</HeaderItem>)}
          </div>
        </>
      ) : <Title>Select competition</Title>}

    </header>
  )
};

export default Header;   