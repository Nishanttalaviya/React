//6. imapelement content finder with the help of usestste.whenver user type into serchbox
//it will show all items of the list which contain that content, allow user add text items into list using text box and add button.


import React, { useState } from 'react';

const ItemFinder = () => {
  // Create an initial static list of items
  const [items, setItems] = useState(Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`));
  
  // State to store the current search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State to store the new item to be added
  const [newItem, setNewItem] = useState('');

  // Filter items based on the search query (case insensitive)
  const filteredItems = items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem(''); // Clear the input after adding
    }
  };

  return (
    <div>
      <div>
        <h2>Item Finder</h2>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search for items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div>
        {/* Display filtered items */}
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        {/* Add New Item */}
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default ItemFinder;