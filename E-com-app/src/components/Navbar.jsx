import React from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
const navigate = useNavigate()

const handleNavigation=()=>{
  navigate("/")
}

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="py-4 sticky z-50 flex justify-between items-center">
        <button onClick={handleNavigation} className="text-2xl uppercase font-bold cursor-pointer">
          N<span className="text-yellow-500">o</span>va-Cart
        </button>
        <button className="text-lg font-semibold uppercase cursor-pointer">Menu</button>
      </div>
    </div>
  );
}
