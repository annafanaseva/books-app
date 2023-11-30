import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import DefaultImg from '../../assets/img/default-book.png';

import styles from './BookCard.module.scss';

const Bookcard = (props) => {
  const { book } = props;

  const { volumeInfo } = book;

  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={volumeInfo.imageLinks?.thumbnail || DefaultImg} alt="" />

      <div className={styles.info}>
        <p className={styles.cardTitle}>{volumeInfo.title || 'Not availible'}</p>

        <Link className={styles.cardButton} to={`/book-description-page/${book.id}`}>
          <Button title="Подробнее" />
        </Link>
      </div>
    </div>
  );
};

export default Bookcard;
