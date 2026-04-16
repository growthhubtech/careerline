import type { RouteObject } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout.tsx';
import { MinimalLayout } from './MinimalLayout/MinimalLayout.tsx';
import { Home, Question, Contact } from '../pages';

export const getRoutes = (): RouteObject[] => [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    element: <MinimalLayout />,
    children: [
      {
        path: '/question',
        element: <Question />,
      },
    ],
  },
];
