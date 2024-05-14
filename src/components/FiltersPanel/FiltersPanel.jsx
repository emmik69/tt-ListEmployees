import React, { useContext, useEffect, useRef, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './FiltersPanel.module.css';
import lightS from './FiltersPanelLight.module.css';
import darkS from './FiltersPanelDark.module.css';
import Context from '../../Context/Context';

const FiltersPanel = ({ selectFilters, setSelectFilters, setSearchValue }) => {
  const { theme, post, stack, gender } = useContext(Context);
  const styleTheme = theme ? lightS : darkS;
  const dropdownRef = useRef(null);
  const [condition, setCondition] = useState('');

  const filterList = [
    { name: 'Должность', options: post },
    { name: 'Пол', options: gender },
    { name: 'Стек технологий', options: stack },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setCondition('');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.filter} ${styleTheme.filter} d-flex flex-column`}>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h1>Список сотрудников</h1>
        <div
          ref={dropdownRef}
          className={`${styles.dropdownsContainer} ${styleTheme.dropdownsContainer} d-flex`}
        >
          {filterList.map((filter) => (
            <Dropdown
              key={filter.name}
              condition={condition}
              setCondition={setCondition}
              text={filter.name}
              listData={filter.options}
              selectFilters={selectFilters}
              setSelectFilters={setSelectFilters}
            />
          ))}
        </div>
      </div>
      <input
        className={`${styles.search} ${styleTheme.search}`}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск"
      ></input>
    </div>
  );
};

export default FiltersPanel;
