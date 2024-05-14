import React from 'react';
import FiltersPanel from '../FiltersPanel/FiltersPanel';
import SelectedFiltersPanel from '../SelectedFiltersPanel/SelectedFiltersPanel';

const Filter = ({
  getReq,
  setSearchValue,
  selectFilters,
  setSelectFilters,
}) => {
  return (
    <>
      <FiltersPanel
        selectFilters={selectFilters}
        setSelectFilters={setSelectFilters}
        setSearchValue={setSearchValue}
      />
      <SelectedFiltersPanel
        getReq={getReq}
        selectFilters={selectFilters}
        setSelectFilters={setSelectFilters}
      />
    </>
  );
};

export default Filter;
