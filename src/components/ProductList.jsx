import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ selectedCategory, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const fetchProducts = async (category, page, query) => {
    setLoading(true);
    try {
      const limit = 10;
      const skip = page * limit;
      let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

      if (category !== "all") {
        url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
      }

      if (query) {
        url = `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`;
      }

      const response = await axios.get(url);
      setProducts((prevProducts) => [
        ...prevProducts,
        ...response?.data?.products,
      ]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setProducts([]);
    setPage(0);
    fetchProducts(selectedCategory, 0, searchQuery);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    if (page > 0) {
      fetchProducts(selectedCategory, page, searchQuery);
    }
  }, [page]);

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-6">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-10 w-10 mb-4"></div>
        </div>
      )}

      {!loading && products.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No products found.</p>
      )}

      {!loading && products.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreProducts}
            className="px-6 py-2 bg-blue-600 text-white rounded-md transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
