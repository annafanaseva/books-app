import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import DefaultImg from '../../assets/img/default-book.png';

import styles from './BookDetails.module.scss';

const BooksDetails = () => {
  const chosenBook = useSelector((state) => state.book);
  const { volumeInfo, saleInfo } = chosenBook;
  //const [textVisability, setTextVisability] = useState(false);

  // const toggleTextVisibility = () => {
  //   setTextVisability(!textVisability);
  // };

  return (
    <>
      <div className={styles.header}>
        <Logo />
      </div>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            className={styles.cardImg}
            src={volumeInfo?.imageLinks?.thumbnail || DefaultImg}
            alt="book image"
          />

          <div className={styles.country}>{saleInfo?.country}</div>
        </div>

        <div className={styles.infoContainer}>
          <Link to="/" className={styles.backButton}>
            <Button title="Назад" />
          </Link>
          <p>Название: {volumeInfo?.title}</p>
          {volumeInfo.authors && <p>Автор: {volumeInfo?.authors}</p>}
          {volumeInfo.categories && <p>Категория: {volumeInfo?.categories}</p>}
          <p>Описание: {volumeInfo?.description}</p>
          {volumeInfo.pageCount && <p>Количество страниц: {volumeInfo?.pageCount}</p>}
          <p>Дата издания: {new Date(volumeInfo?.publishedDate).toLocaleDateString()}</p>

          {/* <Button onClick={toggleTextVisibility} title="Прочитать" /> */}
        </div>
      </div>

      <div className={styles.iframeContainer}>
        <iframe
          frameBorder="0"
          scrolling="no"
          src={`${volumeInfo.previewLink}&output=embed`}
          width="60%"
          height="800px"
        ></iframe>
      </div>
    </>
  );
};

export default BooksDetails;
