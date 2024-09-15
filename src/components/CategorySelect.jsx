import React, { useEffect, useState } from "react";
import axios from "axios";

const CategorySelect = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategories(["All", ...response.data]))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="mb-4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ease-in-out bg-white text-gray-700"
      >
        {categories?.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name || category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
