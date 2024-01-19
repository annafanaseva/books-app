import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { changeInputValue } from '../../store/actions';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Popup from '../../components/Popup';
import RecomendationCard from '../../components/RecomendationCard';
import Main from '../../assets/img/main.png';
import Unauthorised from '../../assets/img/unauthorised.png';
import Authorised from '../../assets/img/authorised.png';

import styles from './SearchField.module.scss';

const SearchField = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const isAuthorised = useSelector((state) => state.isAuthorised);
  const recomendations = useSelector((state) => state.recomendations);

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.value && dispatch(changeInputValue(inputRef.current.value));
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headerWrapper}>
            <Logo />

            <img
              className={styles.authImg}
              src={isAuthorised ? Authorised : Unauthorised}
              onClick={togglePopup}
            />

            {isPopupOpen && <Popup closePopup={(isPopupOpen) => setIsPopupOpen(isPopupOpen)} />}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.wrapperText}>
              <h1>Присоединяйтесь к нам и начните свое литературное путешествие прямо сейчас!</h1>

              <p>Здесь вы найдете огромный выбор книг различных жанров и авторов.</p>

              <form className={styles.form}>
                <input
                  placeholder="Введите"
                  className={styles.input}
                  id="bookSearcher"
                  type="text"
                  ref={inputRef}
                />

                <div onClick={handleSearchButtonClick}>
                  <Button title="Найти" />
                </div>
              </form>
            </div>

            <div className={styles.wrapperImage}>
              <img src={Main} alt="book store" />
            </div>
          </div>

          {isAuthorised && recomendations && (
            <div className={styles.recomendationWrapper}>
              {recomendations.map((book) => {
                return <RecomendationCard key={book.id} book={book} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchField;
