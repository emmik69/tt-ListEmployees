import React, { useContext } from 'react';
import Context from '../../Context/Context';
import styles from './Dropdown.module.css';
import lightS from './DropdownLight.module.css';
import darkS from './DropdownDark.module.css';

const Dropdown = ({
  condition,
  setCondition,
  text,
  listData,
  selectFilters,
  setSelectFilters,
}) => {
  const { theme } = useContext(Context);
  const styleTheme = theme ? lightS : darkS;

  const handleAdd = (data) => {
    if (selectFilters.includes(data))
      setSelectFilters(selectFilters.filter((el) => el !== data));
    else setSelectFilters([...selectFilters, data]);
  };

  return (
    <div className={`${styles.dropContainer}`}>
      <button
        className={`${styles.mainBtn} ${
          condition === text ? styles.temp : ''
        } ${styleTheme.mainBtn}`}
        onClick={() => setCondition(condition === text ? '' : text)}
      >
        {text}
      </button>
      <ul
        className={`${styles.menu} ${
          condition === text ? styles.visible : ''
        }  ${styleTheme.menu} d-flex flex-column`}
      >
        {listData.map((data) => (
          <li key={data}>
            <label
              className={`d-flex justify-content-between align-items-center`}
            >
              {data}
              <input
                checked={selectFilters.includes(data)}
                onChange={() => handleAdd(data)}
                type="checkbox"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
