import { Search } from 'src/components/Search';
import { Menu } from 'src/components/Menu';

import categories from 'src/mock/categories';

export const Home = () => {
  return (
    <>
      {/* header */}
      <header className="mt-8">
        <h1 className="text-3xl font-bold mb-4 text-slate-700">What Pokemon are you looking for?</h1>
      </header>
      {/* search */}
      <Search />
      <Menu categories={categories} />
    </>
  );
};
