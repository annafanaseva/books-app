import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import DefaultImg from '../../assets/img/default-book.png';
import { setChosenBook } from '../../store/actions';

import styles from './BookCard.module.scss';

const Bookcard = (props) => {
  const { book } = props;
  const { volumeInfo, saleInfo } = book;
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const setFetchingBook = (book) => {
    dispatch(setChosenBook(book));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/book-description-page/${book.id}`}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setFetchingBook(book)}
        className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      >
        <div className={styles.country}>{saleInfo?.country}</div>
        <img
          className={styles.cardImg}
          src={volumeInfo.imageLinks?.thumbnail || DefaultImg}
          alt=""
        />

        <div className={styles.info}>
          <p className={styles.cardTitle}>{volumeInfo.title || 'Заголовок отсутствует'}</p>

          <Button title="Подробнее" />
        </div>
      </div>
    </Link>
  );
};

export default Bookcard;
