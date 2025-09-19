import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchProductList } from "../redux/thunks/ProductListThunk";

import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Loader from "../components/Loader";


export default function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [producDetail, setProducDetail] = useState(false);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
    setProducDetail(true);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="h-full flex justify-center items-center">
            <div>
              <div className="h-full flex flex-col justify-center items-center gap-10 mt-20">
                <div>
                  <h1 className="text-sm text-center">Upgrade Your Style</h1>
                  <h1 className="text-5xl text-center">Shop Now</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 w-full mt-20 gap-4">
            {loading ? (
              <div className="flex justify-center col-span-4 p-40"><Loader/></div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className=" bg-black/5 rounded-2xl flex justify-between items-center flex-col"
                >
                  <div className="p-4 py-16   w-full flex justify-center">
                    <img src={product.image} className="h-50" />
                  </div>
                  <div className="p-4 gap-4 flex flex-col  w-full justify-between">
                    <p>{product.title}</p>
                    <div className="flex justify-between flex-col text-sm">
                      <p className="text-2xl">${product.price}</p>
                      <p>{product.category}</p>
                    </div>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => handleProductDetails(product)}
                        className="w-full bg-black/10 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-black/20"
                      >
                        More Details
                      </button>{" "}
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-black/10 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-400"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Cart
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />

      <ProductDetail
        isOpen={producDetail}
        onClose={() => setProducDetail(false)}
        product={selectedProduct}
      />
    </>
  );
}
