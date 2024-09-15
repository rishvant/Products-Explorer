import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative w-full h-48 rounded-md overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
          ${product.price}
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mt-4 truncate">
        {product.title}
      </h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;
