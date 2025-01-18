import React from "react";

function Product({ item }) {
    return (
      <div>
        <h2>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <p>Available Quantity: {item.quantity}</p>
      </div>
    );
  }
  
  export default Product;