import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../assets/headerLogo.png';
import styles from './Header.module.css';
import lightS from './HeaderLight.module.css';
import darkS from './HeaderDark.module.css';

const Header = () => {
  return (
    <div
      className={`${styles.container} d-flex justify-content-between align-items-center`}
    >
      <Image src={logo} />
      <div className={`${styles.mainInfo} d-flex align-items-center`}>
        <a href="./">+7 343 290 84 76</a>
        <a href="./">info@66bit.ru</a>
        <label class={`${styles.switch}`}>
          <input type="checkbox" />
          <span class={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
