import { IconSearch } from '../assets/IconSearch';

export const Search = () => {
  return (
    <div className="relative block my-8">
      <input
        type="text"
        className="bg-slate-100 rounded-full w-full pl-14 pr-6 py-3 outline-none"
        placeholder="Search Pokemon, Move, Ability etc"
      />
      <span className="absolute top-3 left-5">
        <IconSearch />
      </span>
    </div>
  );
};
