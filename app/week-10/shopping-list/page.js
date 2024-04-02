"use client";

import React, { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

import { getItems, addItem } from "../_services/shopping-list-service";

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const userId = "currentUserUID";

  useEffect(() => {
    if (userId) {
      getItems(userId)
        .then((fetchedItems) => setItems(fetchedItems))
        .catch((error) => console.error("Error fetching items:", error));
    }
  }, [userId]);

  const handleAddItem = (newItem) => {
    addItem(userId, newItem)
      .then((newItemId) => {
        const newItemWithId = { ...newItem, id: newItemId };
        setItems((prevItems) => [...prevItems, newItemWithId]);
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 flex flex-col md:flex-row md:items-start">
      <div className="flex-1 mr-4 mb-4 md:mb-0"> 
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-full md:w-1/3 min-w-[300px]"> 
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
