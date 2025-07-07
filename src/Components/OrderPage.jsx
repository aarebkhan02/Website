import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import productsData from "../data/productData"; // Adjust path if needed

export default function OrderPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const location = useLocation();
  const orderItemsFromState = location.state?.orderItems;

  const dummyCartItems = orderItemsFromState?.length
    ? orderItemsFromState
    : productsData.slice(0, 2).map((item, i) => ({
      product_description: item.product_description,
      quantity: i === 0 ? 2 : 1,
      Reduced_price: item.Reduced_price,
      image: item.images[0],
      color: item.available_colors?.[0],
      specifications: item.specifications || {},
    }));

  const subtotal = dummyCartItems.reduce(
    (acc, item) => acc + parseFloat(item.Reduced_price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F3D3E] to-[#14532d] flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-3xl shadow-2xl">
        {/* Left Column - Payment Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#0F3D3E]">Payment Details</h2>
          <form className="space-y-5 text-sm text-gray-700">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <input type="text" placeholder="Street Address" className="w-full px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="City" className="w-full px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="Postal Code" className="w-full px-4 py-2 border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-lg" />
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#0F3D3E]">Your Order</h2>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-inner space-y-5">
            {dummyCartItems.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.product_description}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                    </div>
                  </div>
                  <p className="font-semibold text-right text-gray-800">
                    ${parseFloat(item.Reduced_price) * item.quantity}
                  </p>
                </div>
                {/* Specifications */}
                {Object.keys(item.specifications).length > 0 && (
                  <ul className="text-xs text-gray-600 mt-2 ml-20 list-disc list-inside">
                    {Object.entries(item.specifications).map(([key, val]) => (
                      <li key={key}><strong>{key}:</strong> {val}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <p className="font-semibold text-right text-gray-800">${subtotal}</p>
              </div>
              <div className="flex justify-between text-green-700 font-medium">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2 text-[#0F3D3E]">
                <span>Total</span>
                <p className="text-right">${subtotal}</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mt-4 space-y-4">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="accent-[#0F3D3E]"
                />
                Credit or Debit Card
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="accent-[#0F3D3E]"
                />
                Cash on Delivery
              </label>

              <div className="mt-6 space-y-3 text-sm">
                <label className="flex items-start gap-2 text-gray-700">
                  <input type="checkbox" required className="accent-[#0F3D3E] mt-1" />
                  <span>I accept the terms and conditions.</span>
                </label>
                <button
                  type="button"
                  className="w-full bg-[#0F3D3E] hover:bg-[#14532d] text-white py-3 rounded-xl font-semibold transition"
                >
                  Complete Payment
                </button>
                <div className="text-xs text-center text-gray-400 mt-2">
                  UI Template Only — No real transaction will be processed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
