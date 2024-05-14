import React, { useContext } from 'react';
import Context from '../../Context/Context';
import { Image } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import arrow from '../../assets/arrowRight.png';
import styles from './ListEmployees.module.css';
import lightS from './ListEmployeesLight.module.css';
import darkS from './ListEmployeesDark.module.css';
import MainInfo from '../../components/MainInfo/MainInfo';

const ListEmployees = () => {
  const { theme } = useContext(Context);
  const styleTheme = theme ? lightS : darkS;

  return (
    <>
      <Header />
      <div className={`${styles.container} ${styleTheme.container}`}>
        <div className={`${styles.nav} d-flex align-items-center`}>
          <p>Главная</p>
          <Image src={arrow} />
          <p>Список сотрудников</p>
        </div>
      </div>
      <MainInfo />
    </>
  );
};

export default ListEmployees;
