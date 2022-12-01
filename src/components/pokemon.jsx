// @ts-ignore
import ball from '../assets/pokeball.svg';

export const Pokemon = ({ name, image, types, color }) => {
  return (
    <li className="flex flex-col p-4 rounded-2xl h-32 relative bg-green-500 overflow-hidden">
      <h3 className={`mb-2 font-bold text-white  capitalize ${color}`}>{name}</h3>
      <ul className="flex flex-col gap-1">
        {types.map((item) => (
          <li
            key={item.slot}
            className="text-white rounded-full bg-white text-xs bg-opacity-30 font-medium capitalize px-3 py-1 w-min"
          >
            {item.type.name}
          </li>
        ))}
      </ul>
      <img src={image} alt="alt" className="absolute bottom-2 right-2 w-20 z-10" />
      <img src={ball} alt="alt" className="absolute -right-12 -bottom-20 opacity-5 w-64" />
    </li>
  );
};

const PokemonBackup = ({ name, image, types, color }) => {
  return (
    <li className="flex flex-col shadow-2xl p-8 rounded-2xl h-52 relative bg-green-500 overflow-hidden">
      <h3 className={`mb-2 font-bold text-white text-2xl capitalize ${color}`}>{name}</h3>
      <ul className="flex flex-col gap-2">
        {types.map((item) => (
          <li
            key={item.slot}
            className="text-white rounded-full bg-white bg-opacity-30 font-medium capitalize px-4 py-1 w-min"
          >
            {item.type.name}
          </li>
        ))}
      </ul>
      <img src={image} alt="alt" className="absolute bottom-4 right-4 w-32 z-10" />
      <img src={ball} alt="alt" className="absolute -right-12 -bottom-20 opacity-5 w-64" />
    </li>
  );
};
