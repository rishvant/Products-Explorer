import React, { useState } from "react";
import CategorySelect from "./components/CategorySelect";
import ProductList from "./components/ProductList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Product Explorer
      </h1>

      <div className="bg-white p-6 shadow-md rounded-lg mb-8 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="w-full sm:w-1/3">
          <CategorySelect
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ease-in-out bg-white text-gray-700"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 105.292 14.708l4.412 4.412a1 1 0 001.415-1.414l-4.413-4.413A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <ProductList
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}

export default App;
