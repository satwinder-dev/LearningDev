import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    console.log("hello");
    getProductData();
  }, []);

  async function getProductData() {
    const url = "https://dummyjson.com/products";
    let res = await fetch(url);

    res = await res.json();
    setProductData(res.products);
    setLoader(false);
  }

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col py-20 px-4">
      <h1 className="text-3xl">Products</h1>

      <div className="grid grid-cols-4 my-4 gap-5 bg-red-300 p-5 rounded-3xl">
        {!loader ? (
          productData &&
          productData.map((item) => (
            <div
              key={item.id}
              className=" rounded-3xl p-4 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full  object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.category}</p>
              <p className="text-xl font-bold text-green-600 mb-1">
                ${item.price}
              </p>
              <p className="text-sm text-yellow-500">⭐{item.rating}</p>
            </div>
          ))
        ) : (
          <>
            <div className="w-full flex justify-center col-span-4">
              <Loader />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
