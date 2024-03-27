import React from "react";
import TabsContainer from "./Tabscontainer";

export const TabsContain = () => {
  return (
    <div className="container  max-w-14 flex-auto w-full">
      {" "}
      <div
        className="flex flex-col w-full font-Poppins md:mt-0 p-18 rounded-md shadow-md lg:h-100"
        style={{
          backgroundColor: "#DBECF9",
          maxWidth: "2000px",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "39px",
            fontWeight: "600",
            lineHeight: "58.5px",
          }}
          className="text-4xl text-center font-bold mb-10 mt-8 font-Poppins lg:text-left md:text-center lg:ml-48"
        >
          What makes Shodat, your preferred partner of choice
        </h2>
        <TabsContainer />
      </div>
    </div>
  );
};
