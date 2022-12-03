import { createBrowserRouter } from 'react-router-dom';

import { Category } from './pages/Category';
import { Layout } from './components/Layout';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/detail',
        element: <Detail />,
      },
      {
        path: '*',
        element: <>Error 404</>,
      },
    ],
  },
]);
