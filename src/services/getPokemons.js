import { adaptListPokemons } from '../adapter/poke';

export const getPokemons = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const { results } = await response.json();
  const arrayPokemons = [];
  for (const element of results) {
    const urlPoke = element.url;
    const response = await fetch(urlPoke);
    const data = await response.json();
    arrayPokemons.push(data);
  }
  const formatData = adaptListPokemons(arrayPokemons);
  return formatData;
};
