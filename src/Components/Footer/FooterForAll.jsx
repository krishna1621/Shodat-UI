import React from "react";
import logo from "../../Assets/Components/Footer/Shodat Logo.png";
import { FiMail } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";
import { LuFacebook } from "react-icons/lu";
const FooterForAll = () => {
  return (
    <footer className="bg-black text-white text-center md:text-left pt-4 ">
      <div className="mx-auto w-full max-w-screen-xl text-center md:text-left ">
        <div className="border-b-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5  ">
            {/* 1st column */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 mb:5  md:mb-0 ">
              <div className="mb-2 flex items-center text-center md:text-left justify-center md:justify-normal md:mt-8 ">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-7 w-14 mr-2 text-center md:text-left"
                />
                <div className="font-Poppins text-3xl font-medium text-left md:text-left">
                  Shodat
                </div>
              </div>
              <div className="font-sans text-sm font-normal  mb-4 text-center md:text-left  justify-center leading-5">
                Innovating Insights , Accelerating Growth
              </div>
              <div className="mb-4 flex items-center md:text-left  justify-center md:justify-normal md:ml-[-12px] leading-5">
                <BiPhoneCall className="h-7 w-14 text-center mb-1 md:text-left" />
                <div className="font-sans text-sm font-normal mb-1 ">
                  +123 (000) 88 99
                </div>
              </div>
              <div className="flex items-center text-center md:text-left  justify-center  md:justify-normal md:ml-[-12px]  leading-5">
                <FiMail className="h-7 w-14  mb-1 " />
                <div className="font-sans text-sm font-normal mb-1">
                  contact@shodat.com
                </div>
              </div>
            </div>
            {/* 2nd column */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
              <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left mt-8 md:mt-8">
                eOps Platform
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  eOps Watch
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  eOps Trace
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  eOps Prosense
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  eOps Insights
                </a>
              </div>
            </div>
            {/* 3rd column */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
              <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left mt-8 md:mt-8">
                Solutions
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Data Engineering
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Vision AI
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  ERP Systems
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Edge Analytics
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Intelligent Enterprise
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Cloud Transformation
                </a>
              </div>
            </div>
            {/* 3rd column */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
              <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left mt-8 md:mt-8">
                Services
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Innovate
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Manage
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Modernize
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Secure
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  SAP HANA CoE
                </a>
              </div>
            </div>
            {/* 4th column */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
              <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left mt-8 md:mt-8">
                Shodat AI
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  AI Innovation
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Frictionless AI
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 text-center md:text-left leading-5"
                >
                  Pillars of AI
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-6 ml-10 md:ml-0">
                <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left">
                  <Link to="#" className="block">
                    <FiTwitter />
                  </Link>
                </div>
                <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left">
                  <Link to="#" className="block">
                    <LuFacebook />
                  </Link>
                </div>
                <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left">
                  <Link to="#" className="block">
                    <LuLinkedin />
                  </Link>
                </div>
                <div className="mb-4 font-openSans text-xl font-normal text-center md:text-left">
                  <Link to="#" className="block">
                    <SiInstagram />
                  </Link>
                </div>
              </div>
              <div className="font-sans text-sm font-normal mb-4 mt-5 text-center md:text-left leading-5">
                <a
                  href="#"
                  className="font-sans text-sm font-normal mb-4 mt-5 text-center md:text-left"
                >
                  © 2024 Shodat Inc. All rights reserved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterForAll;
