import EmployerPage from '../pages/EmployerPage/EmployerPage';
import ListEmployees from '../pages/ListEmployees/ListEmployees';
import { EMPLOYER_ROUTER, LIST_EMPLOYEES_ROUTER } from './consts';

export const mainRoutes = [
  {
    path: LIST_EMPLOYEES_ROUTER,
    Component: ListEmployees,
  },
  {
    path: EMPLOYER_ROUTER,
    Component: EmployerPage,
  },
];
