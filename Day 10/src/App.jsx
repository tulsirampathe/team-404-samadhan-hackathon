import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999, image: "https://picsum.photos/300/200?1" },
    { id: 2, name: "Smart Watch", price: 3499, image: "https://picsum.photos/300/200?2" },
    { id: 3, name: "Gaming Mouse", price: 999, image: "https://picsum.photos/300/200?3" },
    { id: 4, name: "Laptop Backpack", price: 1499, image: "https://picsum.photos/300/200?4" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
