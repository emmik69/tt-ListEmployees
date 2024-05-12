import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { mainRoutes } from '../../utils/routes';
import { LIST_EMPLOYEES_ROUTER } from '../../utils/consts';
import Context from '../../Context/Context';

const AppRouter = () => {
  const [theme, setTheme] = useState(true);
  const revers = () => setTheme(!theme);
  const value = { theme, revers };

  return (
    <Context.Provider value={value}>
      <Routes>
        {mainRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        <Route path="*" element={<Navigate to={LIST_EMPLOYEES_ROUTER} />} />
      </Routes>
    </Context.Provider>
  );
};

export default AppRouter;
