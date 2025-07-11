import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { useCart } from "../Components/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const formatCurrency = (amount) =>
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const getTotal = () =>
    cartItems.reduce(
      (sum, item) => sum + item.quantity * parseFloat(item.Reduced_price),
      0
    );

  const goToPayment = () => {
    navigate("/order", { state: { orderItems: cartItems } });
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-[#14532d]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          MY BASKET
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="bg-white flex-1 rounded-3xl shadow-md p-4 sm:p-6">
              <div className="hidden sm:grid grid-cols-5 gap-4 text-sm font-semibold border-b pb-4 text-gray-500 uppercase">
                <div className="col-span-2">Product</div>
                <div>Price</div>
                <div>Piece</div>
                <div>Subtotal</div>
              </div>

              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center py-5 border-b"
                >
                  <div className="col-span-2 flex items-center gap-4">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-gray-400 hover:text-red-600 text-xl"
                    >
                      <IoTrashBinSharp />
                    </button>
                    <img
                      src={item.image}
                      alt={item.product_description}
                      className="w-20 h-20 rounded-xl border object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {item.product_description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Size: {item.selectedSize} | Color: {item.variation_name}
                      </p>
                    </div>
                  </div>

                  <div className="font-semibold text-sm sm:text-base">
                    {formatCurrency(parseFloat(item.Reduced_price))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-lg"
                    >
                      −
                    </button>
                    <span className="min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-lg"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-semibold text-[#166534] text-sm sm:text-base">
                    {formatCurrency(
                      item.quantity * parseFloat(item.Reduced_price)
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals Summary */}
            <div className="bg-white w-full lg:w-1/3 rounded-3xl shadow-md p-6 h-fit">
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                Basket Totals
              </h2>

              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between border-b pb-2">
                  <span>Subtotal</span>
                  <span>{formatCurrency(getTotal())}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Transfer</span>
                  <span className="text-green-600">Free Shipping</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2">
                  <span>Total</span>
                  <span>{formatCurrency(getTotal())}</span>
                </div>
              </div>

              <button
                onClick={goToPayment}
                className="w-full bg-[#166534] mt-6 text-white py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition"
              >
                GO TO PAYMENT PAGE
              </button>

              <div className="flex gap-4 mt-4 text-xs text-gray-400 items-center justify-center">
                <span>🔒 3D SECURE Payment</span>
                <span>🔁 Easy Return</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
