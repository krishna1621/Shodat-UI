import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Engineering from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Data Engineering.png";
import Innovation from "../../../../Assets/Components/HomePage/04_Discover_Shodat/AI Innovation.png";
import Vision from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Vision AI.png";
import Analytics from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Edge Analytics.png";
import Enterprise from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Inteligent Enterprise.png";
import ERP from "../../../../Assets/Components/HomePage/04_Discover_Shodat/ERP System.png";
import Cloud from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Cloud Transformation.png";

const cards = [
  {
    title: "",
    fontSize: "text-5xl",
    lg: 8,
  },
  {
    title: "Data Engineering",
    image: Engineering,
    content: "Empowering Insights through robust data engineering",
    lg: 4,
  },
  {
    title: "AI Innovation",
    image: Innovation,
    content:
      "Pioneering AI innovations transforming data into intelligent action",
    lg: 4,
  },
  {
    title: "Vision AI",
    image: Vision,
    content: "Seeing beyond data revolutionize decision-making with vision AI",
    lg: 4,
  },
  {
    title: "Edge Analytics",
    image: Analytics,
    content:
      "Step into the era of instant intelligence with our edge analytics solutions",
    lg: 4,
  },
  {
    title: "Inteligent Enterprise",
    image: Enterprise,
    content:
      "Transforming businesses into intelligent enterprises explore the power of data",
    lg: 4,
  },
  {
    title: "ERP Systems & Analytics",
    image: ERP,
    content: "Unleashing the power of ERP systems & addvanced analytics",
    lg: 4,
  },
  {
    title: "Cloud Transformation",
    image: Cloud,
    content:
      "Discover how the power of the cloud redefines the way businesses leverage data analytics",
    lg: 4,
  },
];

const DiscoverShodat = () => {
  const [hovered, setHovered] = useState(Array(cards.length).fill(false));

  const handleMouseEnter = (index) => {
    setHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (index) => {
    setHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = false;
      return newHovered;
    });
  };

  const handleImageClick = () => {};

  return (
    <div className="flex justify-center items-center m-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className={`col-span-${card.lg}`}>
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative transition-all overflow-hidden rounded-lg shadow-md"
            >
              {index === 0 && (
                <h2 className={`text-center ${card.fontSize}`}>
                  <span className="font-bold text-purple-800">Discover </span>
                  <span>
                    how Shodat can elevate your business with our bespoke data
                    analytics solutions
                  </span>
                </h2>
              )}
              {index === 0 ? (
                <></>
              ) : (
                <>
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 ${
                      hovered[index] && "bg-opacity-50"
                    }`}
                  ></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-center">
                    <h3
                      className={`text-white font-semibold ${
                        hovered[index] ? "text-yellow-400" : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-sm text-gray-400 mt-2 ${
                        hovered[index] ? "text-yellow-400" : ""
                      }`}
                    >
                      {card.content}
                    </p>
                  </div>
                  <button
                    style={{ transition: "opacity 0.3s, right 0.3s" }}
                    className={`absolute top-4 right-4 transition-opacity opacity-0 ${
                      hovered[index] ? "opacity-100" : ""
                    }`}
                  >
                    <IoMdArrowForward className="text-yellow-400" />
                  </button>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`absolute top-0 right-0 transform ${
                      hovered[index]
                        ? "scale-150 transition-transform duration-300"
                        : "scale-100"
                    } origin-top-right`}
                    onClick={handleImageClick}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverShodat;
