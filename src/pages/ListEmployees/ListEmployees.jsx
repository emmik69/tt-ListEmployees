import React, { useContext } from 'react';
import Context from '../../Context/Context';
import { Button, Image } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import arrow from '../../assets/arrowRight.png';
import styles from './ListEmployees.module.css';
import lightS from './ListEmployeesLight.module.css';
import darkS from './ListEmployeesDark.module.css';

const ListEmployees = () => {
  const { theme, revers } = useContext(Context);
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
        <div
          className={`${styles.filter} ${styleTheme.filter} d-flex flex-column`}
        >
          <div className={`d-flex justify-content-between align-items-center`}>
            <h1>Список сотрудников</h1>
            <div
              className={`${styles.dropdowns} ${styleTheme.dropdowns} d-flex`}
            >
              <span>Должность</span>
              <span>Пол</span>
              <span>Стек технологий</span>
            </div>
          </div>
          <input placeholder="Поиск"></input>
        </div>
        <div
          className={`${styles.interlayer} ${styleTheme.interlayer} d-flex justify-content-between align-items-center`}
        >
          <div className={`d-flex align-items-center`}>
            <h2>Выбранные фильтры:</h2>
            <ul className={`d-flex align-items-center`}>
              <li>fullstack</li>
              <li>женщина</li>
            </ul>
          </div>
          <Button>Найти</Button>
        </div>
      </div>
    </>
  );
};

export default ListEmployees;
