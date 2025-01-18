import Product from "./Components/Product";

function App() {
  const items = {
    product1: {
      id: "product1",
      name: "Product 1",
      price: 100,
      quantity: 10,
    },
    product2: {
      id: "product2",
      name: "Product 2",
      price: 200,
      quantity: 5,
    },
  };

  return (
    <>
      {Object.values(items).map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;