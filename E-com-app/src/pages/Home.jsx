
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate()

  function handleNavigation(){
    navigate('productlist')
  }
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="h-full flex justify-center items-center">
        <div className="max-w-[1400px] mx-auto px-4 ">
          <div className="h-full flex flex-col justify-center items-center gap-10 mt-60">
            <div>
              <h1 className="text-xl text-center">Upgrade Your Style</h1>
              <h1 className="text-5xl text-center">
                Discover the latest trends
                <br /> Unbeatable deals on top products.
              </h1>
            </div>
            <button
              onClick={handleNavigation}
              className="bg-yellow-500 text-black px-4 py-2 rounded-full cursor-pointer hover:bg-yellow-400 text-xl"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
