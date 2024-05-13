import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import styles from './SelectedFiltersPanel.module.css';
import lightS from './SelectedFiltersPanelLight.module.css';
import darkS from './SelectedFiltersPanelDark.module.css';
import Context from '../../Context/Context';

const SelectedFiltersPanel = ({ selectFilters, setSelectFilters }) => {
  const { theme } = useContext(Context);
  const styleTheme = theme ? lightS : darkS;

  const handleDeleteFilter = (filter) => {
    setSelectFilters(selectFilters.filter((el) => el !== filter));
  };

  return (
    <div
      className={`${styles.interlayer} ${styleTheme.interlayer} d-flex justify-content-between align-items-center`}
    >
      <div className={`${styles.ulContainer} d-flex align-items-center`}>
        <h2>Выбранные фильтры:</h2>
        <ul className={`d-flex align-items-center flex-wrap row-gap-3`}>
          {selectFilters.map((el) => (
            <li key={el} onClick={() => handleDeleteFilter(el)}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <Button>Найти</Button>
    </div>
  );
};

export default SelectedFiltersPanel;
