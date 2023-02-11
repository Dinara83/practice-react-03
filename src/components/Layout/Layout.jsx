import { Outlet } from 'react-router-dom';

import Novigation from 'components/Novigation/Novigation';

const Layout = () => {
  return (
    <>
      <header>
        <Novigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
