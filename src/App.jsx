import { useEffect, useState } from 'react';

import { Pokemon } from './components/pokemon.jsx';
import { getPokemons } from './services/getPokemons.js';

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">All pokemons!</h1>
      <ul className="grid md:grid-cols-2 gap-10 container mx-auto">
        {pokemons &&
          pokemons.map((item) => {
            return <Pokemon key={item.id} {...item} />;
          })}
      </ul>
    </main>
  );
}

export default App;
