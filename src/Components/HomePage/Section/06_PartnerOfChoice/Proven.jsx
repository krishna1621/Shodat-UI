import React from "react";
import Ai from "../../../../Assets/Components/HomePage/06_PartnerOfChoice/Aitab.png";

const Proven = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center md:justify-center">
        <img src={Ai} alt="AI" className="w-80 h-80" />
      </div>
      <div>
        <div className="p-4">
          <h6 className="text-lg font-bold mb-4">
            Shodat's global experience in developing AI technology includes
          </h6>
          <ul
            className="list-disc list-inside mb-6"
            style={{ listStyleType: "none" }}
          >
            <li className="mb-2">
              &#10003; Turnkey enterprise platform for all data integration &
              analytics needs
            </li>
            <li className="mb-2">
              &#10003; No implementation delays with minimal customizations
            </li>
            <li className="mb-2">
              &#10003; Seamless deployment & build for global scale
            </li>
            <li className="mb-2">
              &#10003; Low/No code data ingestion, harmonization & ML features
            </li>
            <li>&#10003; Industry-proven ML Models</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-200 text-center p-4 rounded-lg">
              <p className="font-bold mb-2">consistent</p>
              <p className="font-bold mb-2">CSAT ratings</p>
              <p className="font-bold">97%</p>
            </div>
            <div className="bg-purple-200 text-center p-4 rounded-lg">
              <p className="font-bold mb-2">Renewal</p>
              <p className="font-bold mb-2">ratio</p>
              <p className="font-bold">95</p>
            </div>
            <div className="bg-purple-300 text-center p-4 rounded-lg">
              <p className="font-bold mb-2">successful</p>
              <p className="font-bold mb-2">projects</p>
              <p className="font-bold">100+</p>
            </div>
            <div className="bg-gray-200 text-center p-4 rounded-lg">
              <p className="font-bold mb-2">consistent</p>
              <p className="font-bold mb-2">CSAT ratings</p>
              <p className="font-bold">100TB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proven;
