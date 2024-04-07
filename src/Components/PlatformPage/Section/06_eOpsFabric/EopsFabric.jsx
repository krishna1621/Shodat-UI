import React from "react";

const EopsFabric = () => {
  return (
    <>
      <div className="bg-black px-4 sm:px-6 py-2 sm:py-4 ">
        <div className="max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="col-span-1 md:col-span-2 lg:col-span-4   ml-10    ">
              <div className="flex flex-col lg:flex-row ">
                <div className="lg:w-full md:w-1/2 lg:pr-4 md:pr-60 ">
                  <h1 className="font-semibold text-white text-[23px] leading-[40.8px] md:text-[34px] mb-4">
                    What is eOps fabric?
                  </h1>
                  <h2
                    style={{
                      fontSize: "27px",
                      lineHeight: "40.5px",
                    }}
                    className="text-white text-base md:text-lg lg:text-xl leading-[40.5px]"
                  >
                    A tenant-based edge operations platform to manage edge
                    assets & subscribe to eOps™ applications
                  </h2>
                </div>
                <div className="lg:w-full md:w-1/2 mt-6 lg:mt-0">
                  <div className="lg:border-l-4 border-yellow-400 pl-6 md:-ml-8 pt-4 lg:pt-0">
                    <h3 className="font-semibold text-white text-lg lg:text-xl mb-4">
                      Key features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      <div>
                        <ul className="text-white text-base list-disc">
                          <li>Edge Asset Mgmt</li>

                          <li>Data Aggregators & API Frameworks</li>
                        </ul>
                      </div>

                      <div>
                        <ul className="text-white text-base list-disc">
                          <li>AI/ML Enrichment</li>

                          <li>Business Intelligence & Data-Lakes</li>
                        </ul>
                      </div>

                      <div>
                        <ul className="text-white text-base list-disc">
                          <li>Data Encryption & Security</li>

                          <li>Compliance & Governance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EopsFabric;
