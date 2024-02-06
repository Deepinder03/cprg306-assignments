import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;