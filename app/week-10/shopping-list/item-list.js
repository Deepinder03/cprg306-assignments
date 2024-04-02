"use client";

import React, { useState } from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <span className="mr-2 ml-4">Sort by:</span> 
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-green-300" : "bg-red-300"}`} 
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`ml-2 px-4 py-2 rounded ${sortBy === "category" ? "bg-green-300" : "bg-red-300"}`}
        >
          Category
        </button>
      </div>

      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
}

export default ItemList;
