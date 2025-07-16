import React from "react";
import { useCart } from "../context/CreateContext";
import { FaTrash } from "react-icons/fa6";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, change) => {
    updateQuantity(id, change);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.discount) || 0;
    const quantity = parseInt(item.quantity) || 0;
    return acc + price * quantity;
  }, 0);

  return (
    <section className="min-h-screen py-12 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Your cart is empty. 🛒
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {/* Cart Items */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Color: {item.color}
                      </p>
                      <p className="text-sm text-[#016c0f] font-medium">
                        ₹{item.discount}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="px-2 py-1 rounded bg-gray-300 hover:bg-gray-400"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          className="px-2 py-1 rounded bg-gray-300 hover:bg-gray-400"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}

              {/* Total Summary */}
              <div className="text-right mt-4">
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  Total: ₹{totalPrice.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md h-fit md:sticky md:top-24 md:col-start-2">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Checkout Details
              </h3>
              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                  required
                />
                <textarea
                  placeholder="Shipping Address"
                  rows="3"
                  className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                  required
                ></textarea>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Payment Method</h4>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" value="cod" defaultChecked />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" value="upi" />
                    <span>UPI / QR Code</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" value="card" />
                    <span>Credit / Debit Card</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" value="netbanking" />
                    <span>Net Banking</span>
                  </label>
                </div>

                <label className="flex items-center gap-2">
                  <input type="checkbox" required />
                  <span>I agree to the terms and conditions</span>
                </label>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#d4af37] to-[#c29200] text-white py-2 px-6 rounded-full font-medium hover:scale-105 transition-all duration-200"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
