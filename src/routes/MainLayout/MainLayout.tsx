import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components';

export const MainLayout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
