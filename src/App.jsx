import { useEffect, useState } from 'react';

import { Category } from './components/Category.jsx';
import { Search } from './components/Search.jsx';
import { Menu } from './components/Menu.jsx';

import { getPokemons } from './services/getPokemons.js';
// @ts-ignore
import ball from './assets/pokeball.svg';
import categories from './mock/categories.js';

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data));
  }, []);

  return (
    <main className="relative pt-20">
      <div className="container mx-auto px-4 ">
        {/* header */}
        <header className="mt-8">
          <h1 className="text-3xl font-bold mb-4 text-slate-700">What Pokemon are you looking for?</h1>
        </header>
        {/* search */}
        <Search />
        <Menu categories={categories} />
        <Category pokemons={pokemons} />
      </div>
      {/* placeholder */}
      <img className="fixed -top-16 -right-16 opacity-10 w-64" src={ball} alt="" />
    </main>
  );
}

export default App;
