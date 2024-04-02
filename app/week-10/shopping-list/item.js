import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <ul
      className='p-2 m-4 text-black cursor-pointer' 
      onClick={() => onSelect({ name, quantity, category })}
    >
      <li className='text-xl'>{name}</li> 
      <li className='text-sm'>Buy {quantity} in {category}</li> 
    </ul>
  );
};

export default Item;
