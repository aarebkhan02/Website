import React, { useState } from "react";
import {
  FaFilter,
  FaTag,
  FaPalette,
  FaCubes,
  FaDollarSign,
} from "react-icons/fa";
import Navbar from "../Routes/Navbar";
import Footer from "../Routes/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import productsData from "../data/productData";



const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCategory = location.state?.selectedCategory || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedColour, setSelectedColour] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);

  const getUnique = (key, filterType) => {
    const unique = new Set(
      productsData
        .filter((p) => (filterType ? p.variation_type === filterType : true))
        .map((p) => p[key])
    );
    return Array.from(unique);
  };


  // Filter products by category, color, material, and price
  const filteredProducts = productsData.filter(
    (product) =>
      (selectedCategory === "All" ||
        product.category_name === selectedCategory) &&
      (selectedColour === "All" ||
        product.variation_name?.toLowerCase() ===
        selectedColour.toLowerCase()) &&
      (selectedMaterial === "All" ||
        product.Material?.toLowerCase() === selectedMaterial.toLowerCase()) &&
      parseFloat(product.Reduced_price) <= maxPrice
  );

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: "url('/HeroImage.WebP')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1
            className="text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Store
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4 bg-[#F4F7F5] rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#0F3D3E]">
            <FaFilter /> Filters
          </h2>

          {/* Category */}
          <div className="mb-4">
            <label className="font-semibold text-[#14532d]">Category</label>
            <select
              className="w-full p-2 mt-1 rounded-lg border border-gray-300"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              {getUnique("category_name").map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Colour */}
          <div className="mb-4">
            <label className="font-semibold text-[#14532d]">Colour</label>
            <select
              className="w-full p-2 mt-1 rounded-lg border border-gray-300"
              value={selectedColour}
              onChange={(e) => setSelectedColour(e.target.value)}
            >
              <option value="All">All</option>
              {getUnique("variation_name", "Color").map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Material */}
          <div className="mb-4">
            <label className="font-semibold text-[#14532d]">Material</label>
            <select
              className="w-full p-2 mt-1 rounded-lg border border-gray-300"
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
            >
              <option value="All">All</option>
              {getUnique("Material").map((mat) => (
                <option key={mat} value={mat}>
                  {mat}
                </option>
              ))}
            </select>
          </div>

          {/* Max Price */}
          <div>
            <label className="font-semibold text-[#14532d]">
              Max Price: ${maxPrice.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#14532d] mt-2"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length === 0 ? (
              <p className="text-xl text-[#0F3D3E]">No products found.</p>
            ) : (
              [...filteredProducts]
                .sort(() => Math.random() - 0.5)
                .map((product) => (
                  <div
                    key={product.product_id}
                    className="bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transition"
                  >
                    <div className="h-[250px] bg-[#D1FAE5] flex items-center justify-center">
                      {Array.isArray(product.images) && product.images.length > 0 ? (

                        <img
                          src={product.images[0]}
                          alt={product.product_description}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[#0F3D3E] font-semibold text-xl">
                          No Image
                        </span>
                      )}
                    </div>

                    <div className="p-4 flex flex-col">
                      <h3 className="text-lg font-bold text-[#0F3D3E] mb-1">
                        {product.product_description}
                      </h3>
                      <p className="text-sm text-[#14532d] mb-1">
                        <FaTag className="inline mr-1" />{" "}
                        {product.category_name}
                      </p>
                      <p className="text-sm text-[#14532d] mb-1">
                        <FaCubes className="inline mr-1" />{" "}
                        {product.sub_category_name}
                      </p>
                      <p className="text-sm text-[#14532d] mb-2">
                        <FaPalette className="inline mr-1" />{" "}
                        {product.variation_name} | {product.Material}
                      </p>
                      <p className="text-sm mb-2 text-green-700">
                        Stock: {product.stock}
                      </p>

                      <div className="mt-auto flex justify-between items-center">
                        <span className="text-xl font-semibold text-[#14532d]">
                          <FaDollarSign className="inline" />{" "}
                          {product.Reduced_price}
                        </span>
                        <button
                          className="bg-gradient-to-r from-[#14532d] to-[#0F3D3E] text-white px-4 py-2 rounded-lg hover:brightness-110"
                          onClick={() =>
                            navigate(`/product/${product.product_id}`)
                          }
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
