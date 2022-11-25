import { getColorByType } from '../services/getColorByType';

export const adaptListPokemons = (data) => {
  return data?.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.sprites.other.dream_world.front_default,
      types: item.types,
      color: 'text-' + getColorByType(item.types),
    };
  });
};

// export const adaptDetailPokemon = () => {};
