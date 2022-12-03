import { Link } from 'react-router-dom';
import ball from 'src/assets/pokeball.svg';

export const ItemMenu = ({ item }) => {
  return (
    <Link
      to="category"
      className="relative h-16 rounded-2xl text-white flex items-center justify-start pl-4 overflow-hidden bottom-1 active:scale-95 active:-bottom-1 transition-all"
      style={{
        backgroundColor: item.color,
        boxShadow: '0px 20px 32px -16px ' + item.color,
      }}
    >
      <img className="absolute -right-1/2 -top-1/2 opacity-10 w-40" src={ball} alt="" />
      <h3 className="font-bold text-lg z-10">{item.title}</h3>
    </Link>
  );
};
