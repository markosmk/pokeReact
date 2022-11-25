export const Pokemon = ({ name, image, types, color }) => {
  return (
    <li className="flex flex-col shadow-2xl p-4 rounded-2xl h-52 relative border-slate-200 border mb-4 md:mb-0">
      <h3 className={`mb-2 font-bold text-7xl md:text-5xl capitalize ${color}`}>{name}</h3>
      <p className="text-slate-500 font-medium capitalize text-xl">
        {color} {types[0].type.name}
      </p>
      <img src={image} alt="alt" className="absolute -bottom-6 right-4 w-64 sm:w-52 sm:-right-8" />
    </li>
  );
};
