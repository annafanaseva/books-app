import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setAuthorisation } from '../../store/actions';

import Button from '../Button';

import styles from './Auth.module.scss';

const Registration = ({ closeAuthPopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const login = 'ann';
  const personPassword = '1';

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === login && password === personPassword) {
      dispatch(setAuthorisation(true));
      closeAuthPopup();
    }
  };

  return (
    <>
      <div className={styles.mainContent}>
        <h2>Регистрация</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Логин"
            className={styles.input}
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />

          <input
            placeholder="Пароль"
            className={styles.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <input
            placeholder="Повторите пароль"
            className={styles.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <Button title="Зарегистрироваться" />
        </form>
      </div>
    </>
  );
};

export default Registration;
