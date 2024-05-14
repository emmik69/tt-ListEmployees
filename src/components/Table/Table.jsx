import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EMPLOYER_ROUTER } from '../../utils/consts';
import Context from '../../Context/Context';
import styles from './Table.module.css';
import lightS from './TableLight.module.css';
import darkS from './TableDark.module.css';

const Table = ({ employeesList, searchValue }) => {
  const { theme } = useContext(Context);
  const styleTheme = theme ? lightS : darkS;
  const navigate = useNavigate();

  console.log(new Date('03-ноября-1999'));

  if (!employeesList.length) {
    return (
      <div className={`${styles.container} ${styleTheme.container}`}></div>
    );
  }

  const filteredListData = employeesList.filter((data) => {
    const searchMatch = `${data.name}`
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return searchMatch;
  });

  const redirectToEmployerPage = (id) => {
    navigate(EMPLOYER_ROUTER, {
      state: { id: id },
    });
  };

  return (
    <div className={`${styles.tableContainer} ${styleTheme.tableContainer}`}>
      <table className={`${styles.table} ${styleTheme.table}`}>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Телефон</th>
            <th>Дата рождения</th>
          </tr>
        </thead>
        <div className={`${styles.tbodyContainer}`}>
          <tbody>
            {filteredListData.map((o) => (
              <tr key={o.id} onClick={() => redirectToEmployerPage(o.id)}>
                <td>{o.name}</td>
                <td>{o.position}</td>
                <td>{o.phone}</td>
                <td>{o.birthdate}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
};

export default Table;
