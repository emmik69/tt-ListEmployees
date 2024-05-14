import React from 'react';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';

const EmployerPage = () => {
  const location = useLocation();
  const { state } = location;
  const id = state?.id;
  console.log(id);
  return (
    <>
      <Header />
    </>
  );
};

export default EmployerPage;
