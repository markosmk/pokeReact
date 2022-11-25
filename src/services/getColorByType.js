const colors = {
  electric: '#FAC94B',
  grass: '#38B67B',
  fire: '#F9874D',
  water: '#3AB5F3',
  bug: '#DFBD7C',
  normal: '#C1C2C3',
};

export const getColorByType = (types = []) => {
  for (const color of types) {
    const item = color.type.name;
    if (Object.keys(colors).includes(item)) {
      return item;
    }
  }
};
