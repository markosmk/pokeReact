import { Pokemon } from './Pokemon.jsx';

export const CategoryList = ({ pokemons }) => {
  return (
    <ul className="grid grid-cols-2 gap-4 mb-12">
      {pokemons &&
        pokemons.map((item) => {
          return <Pokemon key={item.id} {...item} />;
        })}
    </ul>
  );
};
