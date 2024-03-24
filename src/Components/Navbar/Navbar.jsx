import { useState } from "react";
import logo from "../../Assets/Components/Navbar/Shodat-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CustomAnchor = styled.a`
  background-color: #016c7b;
  padding: 0.75rem 1.25rem; /* px-5 py-1 */
  color: #ffffff; /* text-white */
  display: none; /* hidden */
  justify-content: center; /* hidden */
  align-items: center; /* hidden */
  /* Medium screen and above */
  @media (min-width: 768px) {
    display: flex; /* md:flex */
  }
  &:hover {
    background: linear-gradient(
      110.53deg,
      rgb(0, 196, 204) -8.24%,
      rgb(62, 68, 153) 32.83%,
      rgb(94, 2, 127) 82.38%,
      rgb(244, 190, 0) 106.38%
    );
  }
`;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="relative  py-8 font-sans text-white bg-transparent max-w-full ">
        <div className="container  flex justify-evenly items-center">
          <img
            className="w-[180px] h-11"
            src={logo}
            alt="Tailwindcss Navigation"
          />
          <ul className="hidden md:flex">
            <li>
              <Link
                to="/platform"
                className="text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157] inline-block px-4 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                Platform
              </Link>
            </li>
            <li className="flex relative group">
              <Link
                to="/solutionAI"
                className="text-white hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] inline-block px-4 py-2 font-Open-Sans font-normal text-base rounded leading-6 fas fa-chevron-down"
              >
                Solutions
              </Link>
              <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              <ul
                style={{ background: "#340D73" }}
                className="absolute  border-t-4 border-[#f3d157] p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg text-left"
              >
                <li className="text-sm leading-8">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Data Engineering
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    AI Innovation
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    ERP System & Analytics
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Vision AI
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a href="#" className="text-white hover:text-[#f3d157] sanss">
                    Edge Analytics
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Intelligent Enterprise
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Cloud Transformation
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex relative group">
              <Link
                to="#"
                className="white hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded inline-block px-4 py-2 Open-Sans font-normal text-base leading-6"
              >
                Services
              </Link>
              <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              <ul
                style={{ background: "#340D73" }}
                className="absolute border-t-4  border-[#f3d157] p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg"
              >
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Innovate
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Manage
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Modernize
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Security
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex relative group">
              <a
                href="#"
                className="text-white hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157]  rounded inline-block px-4 py-2 Open-Sans font-normal text-base leading-6"
              >
                Industries
              </a>
              <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              <ul
                style={{ background: "#340D73" }}
                className="absolute  border-t-4  border-[#f3d157]  p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg"
              >
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Automotive
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Manufacturing
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Oil & Gas
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a href="#" className="text-white hover:text-[#f3d157] sans">
                    Transportation
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]  inline-block px-4 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                Customer Success
              </Link>
            </li>
            <li>
              <Link
                to="/shodatAI"
                className="text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]  inline-block px-4 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                Shodat AI
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157] inline-block px-4 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                About
              </Link>
            </li>
          </ul>
          <CustomAnchor
            href="#"
            role="button"
            className="rounded-full hover:rounded-xl"
          >
            Request Demo
          </CustomAnchor>
          {/* Mobile menu icon */}
          <button
            id="mobile-icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <i
              className={
                isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </button>
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex justify-center mt-3 w-full">
              <div
                id="mobile-menu"
                className="mobile-menu absolute top-23 w-full"
              >
                <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <a href="https://google.com" className="block pl-7">
                      Home
                    </a>
                  </li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <a href="#" className="block pl-7">
                      News
                    </a>
                  </li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
                    <a href="#" className="block pl-11">
                      Services
                      <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i>
                    </a>
                    <ul className="bg-white text-gray-800 w-full">
                      <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                        <a className="block pl-16" href="#">
                          Platform
                        </a>
                      </li>
                      <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                        <a className="block pl-16" href="#">
                          Solutions
                        </a>
                      </li>
                      <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                        <a className="block pl-16" href="#">
                          Services
                        </a>
                      </li>
                      <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                        <a className="block pl-16" href="#">
                          Industries
                        </a>
                      </li>
                      <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                        <a className="block pl-16" href="#">
                          Customer Success
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <a href="#" className="block pl-7">
                      Shodat AI
                    </a>
                  </li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                    <a href="#" className="block pl-7">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
