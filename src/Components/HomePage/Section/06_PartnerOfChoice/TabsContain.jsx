import React from "react";
import TabsContainer from "./Tabscontainer";

export const TabsContain = () => {
  return (
    <div className="flex flex-col items-center  bg-blue-100 w-full p-10 rounded-md shadow-md">
      <h1 className="text-4xl font-bold text-center mb-10">
        What makes Shodat, your preferred partner of choice
      </h1>
      <TabsContainer />
    </div>
  );
};
