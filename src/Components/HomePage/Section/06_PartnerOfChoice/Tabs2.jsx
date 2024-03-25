import React from "react";
import tab2 from "../../../../Assets/Components/HomePage/06_PartnerOfChoice/tabimg4.png";

const Tabs2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <img src={tab2} alt="AI" className="w-100 h-80" style={{}} />
      </div>
      <div className="mt-5 md:mt-0">
        <div className="p-6">
          <h5 className="text-lg font-semibold mb-4">
            Benefit from deep industry expertise
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-#D3F5FF p-4 rounded-lg">
              <p className="font-normal">
                Our team comprises seasoned professionals with a wealth of
                experience, ensuring that our AI solutions are tailored to meet
                the specific needs and challenges of your industry.
              </p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="font-normal">
                We have the advantage of using proprietary network intelligence
                to enhance precision and detection above and beyond our clients’
                own datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs2;
