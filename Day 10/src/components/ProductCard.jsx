import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-72">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 mb-3">₹{price}</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
