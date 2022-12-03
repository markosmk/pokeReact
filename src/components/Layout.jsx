import { Outlet, Link } from 'react-router-dom';

import ball from '../assets/pokeball.svg';

export const Layout = () => {
  return (
    <main className="relative pt-20">
      <div className="container mx-auto px-4 ">
        <Outlet />
      </div>
      {/* placeholder */}

      <Link to="/">
        <img className="fixed -top-16 -right-16 opacity-10 w-64" src={ball} alt="" />
      </Link>
    </main>
  );
};
