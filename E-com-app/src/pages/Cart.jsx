import React from "react";

export default function Cart({ isOpen, onClose, product }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[400px] p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Added to Cart</h2>
        <div className="flex items-center gap-4">
          <img src={product?.image} alt="" className="h-20 object-contain" />
          <div>
            <p className="font-medium">{product?.title}</p>
            <p className="text-yellow-600 font-bold">${product?.price}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Continue Shopping
          </button>
          <button className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500">
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
