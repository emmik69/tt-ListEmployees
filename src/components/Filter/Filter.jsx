import React, { useState } from 'react';
import FiltersPanel from '../FiltersPanel/FiltersPanel';
import SelectedFiltersPanel from '../SelectedFiltersPanel/SelectedFiltersPanel';

const Filter = () => {
  const [selectFilters, setSelectFilters] = useState([]);
  return (
    <>
      <FiltersPanel
        selectFilters={selectFilters}
        setSelectFilters={setSelectFilters}
      />
      <SelectedFiltersPanel
        selectFilters={selectFilters}
        setSelectFilters={setSelectFilters}
      />
    </>
  );
};

export default Filter;
