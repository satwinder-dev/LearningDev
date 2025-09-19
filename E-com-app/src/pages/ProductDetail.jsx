import React from "react";

export default function ProductDetail({ isOpen, onClose, product }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl p-6 relative">
        {/* Close button */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <button onClick={onClose} className=" text-gray-500 hover:text-black">
            ✕
          </button>

        </div>
        <div className="flex items-center gap-5 ">
          <img
            src={product?.image}
            alt=""
            className="h-50 w-50 object-contain"
          />
          <div className="flex flex-col gap-2">
            <div className=" flex justify-between">
              <p className="font-medium">{product?.title}</p>
              <p className="bg-green-50 px-4 py-0.5 rounded-full text-sm text-green-700 h-fit text-nowrap">
                {product.category}
              </p>
            </div>
            <p className="">${product.description}</p>
            <div className="flex justify-between pe-10">
              <p className="text-yellow-600 font-bold">${product?.price}</p>
            </div>
            <div className="flex justify-between pe-10">
              <p className="">Rating : {product.rating.rate}</p>
              <p className="">Count : {product.rating.count}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
