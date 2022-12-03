import { useEffect, useState } from 'react';
import { CategoryList } from 'src/components/CategoryList';

import { getPokemons } from 'src/services/getPokemons';

export const Category = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data));
  }, []);
  return (
    <>
      <p>Hola Category</p>
      <CategoryList pokemons={pokemons} />
    </>
  );
};
