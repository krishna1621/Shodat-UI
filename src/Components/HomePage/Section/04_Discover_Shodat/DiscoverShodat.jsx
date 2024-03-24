import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Engineering from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Data Engineering.png";
import Innovation from "../../../../Assets/Components/HomePage/04_Discover_Shodat/AI Innovation.png";
import Vision from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Vision AI.png";
import Analytics from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Edge Analytics.png";
import Enterprise from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Inteligent Enterprise.png";
import ERP from "../../../../Assets/Components/HomePage/04_Discover_Shodat/ERP System.png";
import Cloud from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Cloud Transformation.png";
import { GoArrowRight } from "react-icons/go";
// import { styled } from "@mui/material/styles";

const cards = [
  {
    title: "",
    fontSize: "text-4xl",
    lg: "lg:col-span-8",
  },
  {
    title: "Data Engineering",
    image: Engineering,
    content: "Empowering Insights through robust data engineering",
    lg: "lg:col-span-4",
  },
  {
    title: "AI Innovation",
    image: Innovation,
    content:
      "Pioneering AI innovations transforming data into intelligent action",
    lg: "lg:col-span-4",
  },
  {
    title: "Vision AI",
    image: Vision,
    content: "Seeing beyond data revolutionize decision-making with vision AI",
    lg: "lg:col-span-4",
  },
  {
    title: "Edge Analytics",
    image: Analytics,
    content:
      "Step into the era of instant intelligence with our edge analytics solutions",
    lg: "lg:col-span-4",
  },
  {
    title: "Intelligent Enterprise",
    image: Enterprise,
    content:
      "Transforming businesses into intelligent enterprises explore the power of data",
    lg: "lg:col-span-4",
  },
  {
    title: "ERP Systems & Analytics",
    image: ERP,
    content: "Unleashing the power of ERP systems & advanced analytics",
    lg: "lg:col-span-4",
  },
  {
    title: "Cloud Transformation",
    image: Cloud,
    content:
      "Discover how the power of the cloud redefines the way businesses leverage data analytics",
    lg: "lg:col-span-4",
  },
];
// const CenteredContainer = styled("div")({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   margin: "100px",
//   // background: "#e6f0f2",
//   // background: "#f8f4ff",
// });
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
    <div className="flex justify-center items-center mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3  gap-4 ">
        {cards.map((card, index) => (
          <div class="w-full sm:w-full md:w-[card.lg] lg:w-[card.lg]">
            <div
              className={`relative transition duration-300 overflow-hidden h-64 w-full rounded-lg ${
                index !== 0 ? "shadow-md" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {index === 0 && (
                <div
                  className=" "
                  gutterBottom
                  style={{
                    fontSize: card.fontSize,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#432071",
                      marginRight: "10px",
                    }}
                  >
                    Discover
                  </span>
                  <span style={{ fontWeight: 300, color: "#000000" }}>
                    how Shodat can elevate your business with our bespoke data
                    analytics solutions
                  </span>
                </div>
              )}
              {index === 0 && (
                <h3
                  variant="h3"
                  gutterBottom
                  style={{
                    color: card.color,
                    fontSize: card.fontSize,
                    padding: "20px",
                  }}
                >
                  {card.title}
                </h3>
              )}
              {index !== 0 && (
                <>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      backgroundColor:
                        index !== 0 && hovered[index]
                          ? "rgba(67, 32, 113, 0.7)"
                          : "transparent",
                      padding: "20px",
                      borderRadius: "8px",
                      height: "100%",
                    }}
                  >
                    <h4
                      variant="h6"
                      align="left"
                      mt={12}
                      ml={3}
                      gutterBottom
                      style={{
                        color: hovered[index] ? "#e6c458" : "black",
                        fontFamily: "Open Sans,sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "30px",
                        letterSpacing: "0em",
                        opacity: hovered[index] ? 1 : 0.9,
                      }}
                    >
                      {card.title}
                    </h4>
                    <h4
                      variant="body2"
                      align="left"
                      ml={3}
                      style={{
                        color: hovered[index] ? "#e6c458" : "#5E5E5E",
                        fontFamily: "Open Sans,sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                      }}
                    >
                      {card.content}
                    </h4>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: hovered[index] ? "8px" : "24px",
                      transition: "right 0.3s, opacity 0.3s",
                      opacity: hovered[index] ? 1 : 0,
                      color: "#e6c458",
                      zIndex: 3,
                    }}
                  >
                    <button>
                      <GoArrowRight />
                    </button>
                  </div>
                  <div
                    className={`absolute top-0 right-[-20px] transition-transform duration-300 
              transform-origin-top-right ${hovered[index] ? "scale-150" : ""}`}
                    style={{ zIndex: 1 }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: "220px", height: "auto" }}
                      onClick={handleImageClick}
                    />
                  </div>
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
