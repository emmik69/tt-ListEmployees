import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { mainRoutes } from '../../utils/routes';
import { LIST_EMPLOYEES_ROUTER } from '../../utils/consts';
import Context from '../../Context/Context';

const AppRouter = () => {
  const [theme, setTheme] = useState(true);
  const revers = () => setTheme(!theme);
  const post = [
    'Frontend-разработчик',
    'Backend-разработчик',
    'Аналитик',
    'Менеджер',
    'Дизайнер',
  ];
  const gender = ['Мужчина', 'Женщина'];
  const stack = ['CSharp', 'React', 'Java', 'PHP', 'Figma', 'Word'];
  const value = { theme, revers, post, stack, gender };

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
