import React, { useState } from "react";

const ConditionalStyling = () => {
  const items = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/27048764/pexels-photo-27048764.jpeg",
      heading: "holla",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/7723478/pexels-photo-7723478.jpeg",
      heading: "holla",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/27048764/pexels-photo-27048764.jpeg",
      heading: "holla",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7723478/pexels-photo-7723478.jpeg",
      heading: "holla",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/27048764/pexels-photo-27048764.jpeg",
      heading: "holla",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/7723478/pexels-photo-7723478.jpeg",
      heading: "holla",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/7723478/pexels-photo-7723478.jpeg",
      heading: "holla",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/27048764/pexels-photo-27048764.jpeg",
      heading: "holla",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/27048764/pexels-photo-27048764.jpeg",
      heading: "holla",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/7723478/pexels-photo-7723478.jpeg",
      heading: "holla",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/27048764/pexels-photo-27048764.jpeg",
      heading: "holla",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/27048764/pexels-photo-27048764.jpeg",
      heading: "holla",
    },
  ];

  const [grid, setGrid] = useState(true);
  const [theme, setTheme] = useState(false);

  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl my-5">Dynamic and Conditional Inline Style</h1>
      <button
        className="border py-1 px-3 cursor-pointer"
        onClick={() => {
          setTheme(!theme);
        }}
      >
        theme
      </button>
      <button
        className="border py-1 px-3 cursor-pointer mx-4"
        onClick={() => {
          setGrid(!grid);
        }}
      >
        Layout
      </button>
      <div
        className={
          grid ? "flex flex-wrap gap-10 my-5" : "grid flex-wrap gap-10 my-5"
        }
      >
        {items.map((e) => (
          <div
            key={e.id}
            className={`
              ${
                theme ? "text-black bg-gray-300" : "bg-black/80 text-white"
              } rounded-2xl  p-3 flex flex-col gap-2 w-fit`}
          >
            <img
              src={e.src}
              alt=""
              className="w-58 h-58 object-cover rounded-lg"
            />
            <h1 className="text-2xl">{e.heading}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionalStyling;
