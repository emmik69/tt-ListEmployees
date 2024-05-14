import React, { useContext, useState } from 'react';
import Filter from '../Filter/Filter';
import GetListEmployees from '../api/GetListEmployees';
import Context from '../../Context/Context';
import Table from '../Table/Table';
const MainInfo = () => {
  const { post, stack, gender } = useContext(Context);
  const [listEmployees, setListEmployees] = useState([]);
  const [selectFilters, setSelectFilters] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const postTranslate = {
    'Frontend-разработчик': 'Frontend',
    'Backend-разработчик': 'Backend',
    Аналитик: 'Analyst',
    Менеджер: 'Manager',
    Дизайнер: 'Designer',
  };
  const genderTranslate = { Мужчина: 'Male', Женщина: 'Female' };

  const filterList = (list, filter) => {
    return list.filter((el) => filter[el]).map((el) => filter[el]);
  };

  const getListEmployees = async () => {
    let postList = filterList(selectFilters, postTranslate);
    let genderList = filterList(selectFilters, genderTranslate);
    let stackList = selectFilters.filter((filter) => stack.includes(filter));
    if (!postList.length) postList = filterList(post, postTranslate);
    if (!genderList.length) genderList = filterList(gender, genderTranslate);
    if (!stackList.length) stackList = stack;

    const qparemetr = `?Gender=${genderList.join(
      '&Gender='
    )}&Position=${postList.join('&Position=')}&Stack=${stackList.join(
      '&Stack='
    )}`;
    GetListEmployees(qparemetr)
      .then((data) => setListEmployees(data))
      .catch((err) => alert(err.response.data.title));
  };

  return (
    <>
      <Filter
        getReq={getListEmployees}
        setSearchValue={setSearchValue}
        selectFilters={selectFilters}
        setSelectFilters={setSelectFilters}
      />
      <Table employeesList={listEmployees} searchValue={searchValue} />
    </>
  );
};

export default MainInfo;
