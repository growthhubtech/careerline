import { BrowserRouter, useRoutes } from 'react-router-dom';
import { getRoutes } from './routes';
import './styles/index.scss';

const AppRoutes = () => useRoutes(getRoutes());

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true }}>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
