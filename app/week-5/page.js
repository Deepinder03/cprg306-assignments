import React from 'react';
import ItemList from './item-list'; 

function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4 p-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;
