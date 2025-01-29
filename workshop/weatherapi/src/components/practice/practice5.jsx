//5.implelement pagination with help of the usestate.create a static array of size 25 and display  5 buttons when user click button 1. diplay item 1 to 5,button 2--> item 6 to 10 button 3 11 to 13..


import React, { useState } from 'react';

const PaginationExample = () => {
  // Create a static array of 25 items
  const items = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

  // Set the initial state for the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting index and the ending index based on the current page
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current items to display
  const currentItems = items.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <h2>Items:</h2>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={() => handlePageChange(1)}>1</button>
        <button onClick={() => handlePageChange(2)}>2</button>
        <button onClick={() => handlePageChange(3)}>3</button>
        <button onClick={() => handlePageChange(4)}>4</button>
        <button onClick={() => handlePageChange(5)}>5</button>
      </div>
    </div>
  );
};

export default PaginationExample;