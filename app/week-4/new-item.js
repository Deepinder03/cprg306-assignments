"use client";

import React, { useState } from 'react';

const NewItem = () => {
    // State variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const item = { name, quantity, category };
        console.log(item);
        // Displaying an alert
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        // Resetting state variables 
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex justify-center mt-4">
            <form onSubmit={handleSubmit} className="w-full max-w-xs">
                <div className="mb-4">
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Item name" className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex justify-between gap-4 mb-4">
                    <input type="number" id="quantity" value={quantity} min="1" max="99" onChange={(e) => setQuantity(Number(e.target.value))} required placeholder="Quantity" className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline " />
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="shadow border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline flex-1">
                        <option value="" disabled>Select Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">+</button>
            </form>
        </div>
    );
};

export default NewItem;