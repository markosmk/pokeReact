import { ItemMenu } from './ItemMenu.jsx';

export const Menu = ({ categories }) => {
  return (
    <ul className="grid grid-cols-2 gap-4 mb-12">
      {categories.map((item, index) => {
        return <ItemMenu key={index} item={item} />;
      })}
    </ul>
  );
};
