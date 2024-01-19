import React, { useState } from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className={styles.header}>
        <Logo />
      </div>

      <div className={styles.loginPage}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button title="Войти" />
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
