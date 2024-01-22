import React from 'react';

import Auth from '../../components/Auth';

import styles from './Popup.module.scss';

const Popup = ({ closePopup }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <Auth
          closeAuthPopup={() => {
            closePopup(false);
          }}
        />

        <div
          onClick={() => {
            closePopup(false);
          }}
          className={styles.cross}
        >
          <svg id="svg-icon-close" viewBox="0 0 28 22" width="100%" height="100%">
            <path
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              d="M1,1 L21,21 M21,1 L1,21"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Popup;
