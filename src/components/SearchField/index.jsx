import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { changeInputValue } from '../../store/actions';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import styles from './SearchField.module.scss';

const SearchField = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value && dispatch(changeInputValue(inputRef.current.value));
  };

  return (
    <>
      <div className={styles.header}>
        <Logo />

        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="bookSearcher">
              Искать
            </label>

            <input className={styles.input} id="bookSearcher" type="text" ref={inputRef} />
          </div>

          <div onClick={handleClick}>
            <Button title="Найти" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchField;
