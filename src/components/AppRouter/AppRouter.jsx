import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { mainRoutes } from '../../utils/routes';
import { LIST_EMPLOYEES_ROUTER } from '../../utils/consts';

const AppRouter = () => {
  return (
    <Routes>
      {mainRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={LIST_EMPLOYEES_ROUTER} />} />
    </Routes>
  );
};

export default AppRouter;
