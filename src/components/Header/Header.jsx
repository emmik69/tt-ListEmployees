import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../assets/headerLogo.png';
import styles from './Header.module.css';
import lightS from './HeaderLight.module.css';
import darkS from './HeaderDark.module.css';
import Context from '../../Context/Context';

const Header = () => {
  const { theme, revers } = useContext(Context);
  console.log(theme);
  const styleThem = theme ? lightS : darkS;
  return (
    <div
      className={`${styles.container} ${styleThem.container} d-flex justify-content-between align-items-center`}
    >
      <Image src={logo} />
      <div
        className={`${styles.mainInfo} ${styleThem.mainInfo} d-flex align-items-center`}
      >
        <a href="tel:+73432908476">+7 343 290 84 76</a>
        <a href="mailto:info@66bit.ru">info@66bit.ru</a>
        <label className={`${styles.switch}`}>
          <input type="checkbox" onClick={revers} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
