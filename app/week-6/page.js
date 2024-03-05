"use client";

import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list';
import itemsData from './items.json'; 

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now().toString() }]); 
  };

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4 p-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} /> 
      <ItemList items={items} /> 
    </main>
  );
}

export default Page;
