import React, { useState, useEffect } from "react";
import { IoCartSharp } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../Components/CartContext";

import productsData from "../data/productData";

export default function ProductDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { addToCart } = useCart();

  const productFromState = location.state?.product;
  const fallbackProduct =
    productsData.find((p) => p.product_id === Number(id)) || productsData[0];

  const initialProduct = productFromState || fallbackProduct;
  const fallbackColor =
    initialProduct.available_colors?.[0] ||
    Object.keys(initialProduct.color_images || {})[0] ||
    "Default";

  const initialVariation = initialProduct.variation_name || fallbackColor;

  const [selectedProduct, setSelectedProduct] = useState({
    ...initialProduct,
    variation_name: initialVariation,
  });

  const [mainImage, setMainImage] = useState("/placeholder.jpg");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productFromState) {
      const color = productFromState.variation_name || fallbackColor;
      setSelectedProduct({ ...productFromState, variation_name: color });
    }
  }, [productFromState]);

  useEffect(() => {
    const colorImgs = selectedProduct.color_images?.[selectedProduct.variation_name] || [];
    const fallbackImgs = selectedProduct.images || [];

    const allImages = [...colorImgs, ...fallbackImgs].filter((img, index, arr) =>
      img && img.trim() !== "" && arr.indexOf(img) === index
    );

    if (allImages.length > 0) setMainImage(allImages[0]);
  }, [selectedProduct.variation_name, selectedProduct.color_images]);

  const swapImage = (img) => setMainImage(img);

  const handleAddToCart = () => {
    const newItem = {
      ...selectedProduct,
      selectedSize,
      quantity,
      variation_name: selectedProduct.variation_name,
      image: mainImage,
    };

    addToCart(newItem);
    navigate("/cart");
  };

  const handleColorChange = (color) => {
    setSelectedProduct((prev) => ({
      ...prev,
      variation_name: color,
    }));
  };

  const relatedProducts = productsData
    .filter(
      (p) =>
        p.category_name === selectedProduct.category_name &&
        p.product_id !== selectedProduct.product_id
    )
    .slice(0, 3);

  const ImageThumbnail = ({ src, isActive, onClick }) => {
    const [loaded, setLoaded] = useState(true);
    if (!src || !loaded) return null;

    return (
      <img
        src={src}
        onClick={onClick}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={`w-24 h-24 object-cover rounded-xl border-2 cursor-pointer transition ${isActive ? "border-[#0F3D3E]" : "border-gray-300"
          }`}
      />
    );
  };

  return (
    <div className="bg-[#F8F8F8] py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 gap-10 p-10">
        {/* Images */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[600px] bg-gray-100 rounded-2xl flex items-center justify-center">
            <img
              src={mainImage}
              className="h-full w-full object-cover rounded-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.jpg";
              }}
            />
          </div>

          {(() => {
            const colorImgs = selectedProduct.color_images?.[selectedProduct.variation_name] || [];
            const fallbackImgs = selectedProduct.images || [];

            const allImages = [...colorImgs, ...fallbackImgs]
              .filter((img, index, arr) => img && img.trim() !== "" && arr.indexOf(img) === index)
              .slice(0, 3);

            return allImages.length > 0 ? (
              <div className="flex gap-3 mt-4 flex-wrap justify-center">
                {allImages.map((img, idx) => (
                  <ImageThumbnail
                    key={idx}
                    src={img}
                    isActive={mainImage === img}
                    onClick={() => swapImage(img)}
                  />
                ))}
              </div>
            ) : null;
          })()}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
              Sale!
            </span>
            <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
              New
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-[#0F3D3E] mb-2">
            {selectedProduct.product_description}
          </h1>

          <p className="text-xl font-semibold text-[#0F3D3E] mb-4">
            ${parseFloat(selectedProduct.Reduced_price).toFixed(2)}
          </p>

          {/* Color Selection */}
          <div className="mb-4">
            <p className="font-medium text-[#0F3D3E] mb-2">
              Color:{" "}
              <span className="text-sm text-gray-600">
                {selectedProduct.variation_name}
              </span>
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {selectedProduct.available_colors?.map((color) => {
                const isAvailable = selectedProduct.colors_in_stock?.includes(color);
                return (
                  <button
                    key={color}
                    disabled={!isAvailable}
                    title={isAvailable ? color : `${color} (Out of Stock)`}
                    className={`w-8 h-8 rounded-full border-2 ${selectedProduct.variation_name === color
                        ? "border-[#0F3D3E]"
                        : "border-gray-300"
                      } ${!isAvailable
                        ? "opacity-30 cursor-not-allowed"
                        : "cursor-pointer hover:scale-110 transition"
                      }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => isAvailable && handleColorChange(color)}
                  />
                );
              })}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="font-medium text-[#0F3D3E] mb-2">Size:</p>
            <div className="flex flex-wrap gap-3">
              {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-1.5 rounded-lg transition text-sm font-medium ${selectedSize === size
                      ? "bg-[#0F3D3E] text-white"
                      : "hover:bg-[#0F3D3E] hover:text-white"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Status */}
          <p
            className={`text-md font-medium mb-4 ${selectedProduct.stock === "Out of Stock"
                ? "text-red-600"
                : "text-green-600"
              }`}
          >
            {selectedProduct.stock}
          </p>

          {/* Product Description */}
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique repudiandae est.
          </p>

          {/* Quantity and Cart */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-lg"
              >
                −
              </button>
              <span className="w-10 text-center py-1 border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white min-w-[200px] px-6 py-2 rounded-xl hover:brightness-110 flex items-center justify-center gap-2"
            >
              <IoCartSharp /> Add To Cart
            </button>
          </div>

          {/* Meta Info */}
          <div className="text-sm text-gray-500 mb-6">
            <p>Category: {selectedProduct.category_name}</p>
            <p>Tags: modern, designer</p>
          </div>

          {/* Specifications */}
          {selectedProduct.specifications && (
            <div className="text-sm text-gray-600 border-t pt-4">
              <h3 className="text-md font-semibold text-[#0F3D3E] mb-2">
                Product Details:
              </h3>
              {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#0F3D3E]">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {relatedProducts.map((product) => (
            <div
              key={product.product_id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={
                  product.color_images?.[product.variation_name]?.[0] ||
                  product.images?.[0] ||
                  "/placeholder.jpg"
                }
                alt={product.product_description}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F3D3E] mb-2">
                  {product.product_description}
                </h3>
                <p className="text-sm text-[#14532d] mb-1">
                  {product.category_name}
                </p>
                <p className="text-sm text-[#14532d] mb-2">
                  {product.sub_category_name}
                </p>
                <p className="text-sm text-green-700 mb-4">{product.stock}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#14532d]">
                    ${parseFloat(product.Reduced_price).toFixed(2)}
                  </span>

                  <button
                    onClick={() =>
                      navigate(`/product/${product.product_id}`, {
                        state: { product },
                      })
                    }
                    className="bg-gradient-to-r from-[#14532d] to-[#0F3D3E] text-white px-5 py-2 rounded-xl hover:brightness-110 transition"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
