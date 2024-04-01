import { useState, useEffect, useRef } from "react";
import logo from "../../Assets/Components/Navbar/Shodat-logo.png";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../../Assets/Components/Navbar/Shodat-color-logo.png";
const CustomButton = styled.button`
  background-color: ${({ isSolutionClicked }) =>
    isSolutionClicked ? "#000000" : "#016c7b"};

  padding: 0.75rem 1.25rem; /* px-5 py-1 */
  color: #ffffff; /* text-white */
  justify-content: center;
  border-radius: 20px; /* Adding border radius */
  align-items: center;

  /* Medium screen and above */
  @media (min-width: 768px) {
    display: flex;
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
const AlternativeButton = styled.button`
  background-color: black; /* Adjust as needed */
  padding: 0.75rem 1.25rem; /* px-5 py-1 */
  color: #ffffff; /* text-white */
  justify-content: center;
  border-radius: 20px; /* Adding border radius */
  align-items: center;
  &:hover {
    background: linear-gradient(
      110.53deg,
      rgb(0, 196, 204) -8.24%,
      rgb(62, 68, 153) 32.83%,
      rgb(94, 2, 127) 82.38%,
      rgb(244, 190, 0) 106.38%
    );
  }

  /* Rest of your button styles */
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionHovered, setIsSolutionHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false); // New state variable

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSolutionHover = () => {
    setIsSolutionHovered(true);
  };
  const [isActive, setIsActive] = useState(false);

  // Function to handle click event and toggle isActive state
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const [isSolutionClicked, setIsSolutionClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is "/solutionAI"
    setIsSolutionClicked(location.pathname === "/solutionAI");
  }, [location.pathname]);
  const handleSolutionHoverOut = () => {
    setIsSolutionHovered(false);
  };

  const handleServicesHover = () => {
    setIsServicesHovered(true);
  };

  const handleServicesHoverOut = () => {
    setIsServicesHovered(false);
  };

  const handleIndustriesHover = () => {
    setIsIndustriesHovered(true);
  };

  const handleIndustriesHoverOut = () => {
    setIsIndustriesHovered(false);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Effect to set initial mobile menu state based on screen width
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1100) {
      setMenuOpen(true); // Set isMobileMenuOpen to true for screens <= 1100px
    } else {
      setMenuOpen(false);
    }
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Set the height of the Navbar component in localStorage with a unique key
    if (navbarRef.current) {
      const pageIdentifier = "/"; // Define a unique identifier for the page

      localStorage.setItem(
        `navbarHeight_${pageIdentifier}`,
        navbarRef.current.offsetHeight
      );
    }
  }, []);

  return (
    <nav
      className="fixed px-4 py-4 container h-[64px] flex justify-between items-center font-sans z-40 text-white bg-transparent w-[100%]  xs:w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%]   lg:w-[100%]"
      style={{
        background:
          location.pathname === "/platform"
            ? scrollPosition > 100
              ? "white"
              : "white"
            : scrollPosition > 100
            ? "black"
            : "",
        justifyContent: "flex-start",
        marginTop: scrollPosition > 100 ? "0" : "20px",
      }}
    >
      <div ref={navbarRef} id="navbar">
        <a
          className="hidden  xl:flex   ml-12     w-auto  items-center  text-6xl font-bold leading-none"
          href="/"
        >
          {location.pathname === "/platform" ? (
            <img
              className="w-auto    xl:ml-0  lg:w-auto h-11"
              src={logo1}
              alt="Platform Logo"
            />
          ) : (
            <img
              className="w-auto  lg:ml-0  lg:w-auto h-11"
              src={logo}
              alt="Default Logo"
            />
          )}
        </a>
      </div>

      <div className="xl:hidden flex    sm: justify-items-start    ">
        <button
          className="navbar-burger flex justify-start  p-3 "
          onClick={toggleMenu}
          style={{
            color: location.pathname === "/platform" ? "black" : "white", // Set color based on pathname
          }}
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        <div
          ref={navbarRef}
          id="navbar"
          className="  mx-20  w-auto  sm:px-9  md:ml-72 flex"
        >
          <a href="/">
            {location.pathname === "/platform" ? (
              <img
                className="h-[50px] max-w-full sm:justify-center flex"
                src={logo1}
                alt="Platform Logo"
              />
            ) : (
              <img
                className="h-[50px] max-w-full flex sm:justify-center align-middle justify-items-center "
                src={logo}
                alt="Platform Logo"
              />
            )}
          </a>
        </div>
      </div>

      <ul
        className={`xl:flex lg:items-center lg:w-auto px-7 justify-items-center justify-center lg:space-x-6 ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <li className="">
          <Link
            to="/platform"
            className={`text-${
              location.pathname === "/platform" ? "black" : "white"
            }  hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157] inline-block px-1 lg:px-2 py-2 font-Open-Sans font-normal text-base leading-6`}
          >
            Platform
          </Link>
        </li>
        <li
          className="flex relative group "
          onMouseEnter={handleSolutionHover}
          onMouseLeave={handleSolutionHoverOut}
        >
          <Link
            to="/solutionAI"
            className={`inline-flex w-full justify-center ${
              location.pathname === "/platform" ? "text-black" : "white"
            } hover:text-black hover:bg-[#f3d157] ${
              isSolutionHovered ? "bg-[#f3d157] text-black" : ""
            } active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6 `}
          >
            Solutions
            <svg
              className={`h-6 ml-1.5 ${
                isSolutionHovered
                  ? "text-black rotate-180"
                  : location.pathname === "/platform"
                  ? "text-black"
                  : "text-white"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              />
            </svg>
          </Link>

          <ul
            style={{ background: "#340D73" }}
            className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg text-left"
          >
            <li className="text-sm leading-8">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-Sans"
              >
                Data Engineering
              </a>
            </li>
            <li className="text-sm leading-8">
              <a
                href="#"
                className="text-white hover:text-yellow-500 Open-Sans"
              >
                AI Innovation
              </a>
            </li>
            <li className="text-sm leading-8">
              <a
                href="#"
                className="text-white hover:text-yellow-500 Open-Sans"
              >
                ERP System & Analytics
              </a>
            </li>
            <li className="text-sm leading-8">
              <a
                href="#"
                className="text-white hover:text-yellow-500 Open-Sans"
              >
                Vision AI
              </a>
            </li>
            <li className="text-sm leading-8">
              <a
                href="#"
                className="text-white hover:text-yellow-500 Open-Sans"
              >
                Edge Analytics
              </a>
            </li>
            <li className="text-sm leading-8">
              <a
                href="#"
                className="text-white hover:text-yellow-500 Open-Sans"
              >
                Intelligent Enterprise
              </a>
            </li>
            <li className="text-sm leading-8">
              <a
                href="#"
                className="text-white hover:text-yellow-500 Open-Sans"
              >
                Cloud Transformation
              </a>
            </li>
          </ul>
        </li>
        <li
          className="flex relative group"
          onMouseEnter={handleServicesHover}
          onMouseLeave={handleServicesHoverOut}
        >
          <Link
            to="#"
            className={`inline-flex w-full justify-center ${
              location.pathname === "/platform" ? "text-black " : "white"
            } ${
              isServicesHovered ? "bg-[#f3d157] text-black" : ""
            } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
          >
            Services
            <svg
              className={`h-6 ml-1.5 ${
                isServicesHovered
                  ? "text-black rotate-180"
                  : location.pathname === "/platform"
                  ? "text-black"
                  : "text-white"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              />
            </svg>
          </Link>

          <ul
            style={{ background: "#340D73" }}
            className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg"
          >
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-sans"
              >
                Innovate
              </a>
            </li>
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-sans"
              >
                Manage
              </a>
            </li>
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-sans"
              >
                Modernize
              </a>
            </li>
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-sans"
              >
                Security
              </a>
            </li>
          </ul>
        </li>
        <li
          className="flex relative group"
          onMouseEnter={handleIndustriesHover}
          onMouseLeave={handleIndustriesHoverOut}
        >
          {" "}
          <Link
            to="#"
            className={`inline-flex w-full justify-center ${
              location.pathname === "/platform" ? "text-black " : "white"
            } ${
              isIndustriesHovered ? "bg-[#f3d157] text-black" : ""
            } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
          >
            Industries
            <svg
              className={`h-6 ml-1.5 ${
                isIndustriesHovered
                  ? "text-black rotate-180"
                  : location.pathname === "/platform"
                  ? "text-black"
                  : "text-white"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              />
            </svg>
          </Link>
          <ul
            style={{ background: "#340D73" }}
            className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg"
          >
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-sans"
              >
                Automotive
              </a>
            </li>
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-sans"
              >
                Manufacturing
              </a>
            </li>
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 font-sans"
              >
                Oil & Gas
              </a>
            </li>
            <li className="text-sm leading-8 text-left">
              <a
                href="#"
                className="text-white hover:text-yellow-500 Open-sans"
              >
                Transportation
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/contact"
            className={`inline-flex w-full justify-center ${
              location.pathname === "/platform" ? "text-black" : "white"
            } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
          >
            CustomerSuccess
          </Link>
        </li>
        <li>
          <Link
            to="/shodatAI"
            className={`inline-flex w-full justify-center ${
              location.pathname === "/platform" ? "text-black" : "white"
            } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
          >
            ShodatAI
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`inline-flex w-full justify-center ${
              location.pathname === "/platform" ? "text-black " : "white"
            } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
          >
            About
          </Link>
        </li>
      </ul>

      <div className="hidden  sm:flex md:flex lg:inline-block  text-sm text-white font-bold rounded-xl transition duration-200">
        {location.pathname === "/solutionAI" ? (
          <AlternativeButton>RequestDemo</AlternativeButton>
        ) : (
          <CustomButton>RequsetDemo</CustomButton>
        )}
      </div>

      <div
        className={`navbar-menu fixed  inset-0 bg-gray-800  ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav
          className="relative top-0 left-0      w-52  bottom-0  flex flex-col   max-w-sm py-6   h-[100%]   px-7 bg-black border-r overflow-y-auto"
          style={{
            color: location.pathname === "/platform" ? "white" : "white",
            justifyContent: "flex-start",
          }}
        >
          {/* Mobile menu content */}
          <div className="flex items-center   mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <a class=" text-6xl font-bold leading-none" href="#">
                <img src={logo} className=" lg:w-auto  "></img>
              </a>
            </a>
            <button
              className="navbar-close"
              onClick={closeMenu}
              style={{
                color: location.pathname === "/platform" ? "black" : "red",
              }}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="">
            <li className=" text-center ">
              <Link
                to="/platform"
                onClick={closeMenu} // Close mobile menu when link is clicked
                className={`text-${
                  location.pathname === "/platform" ? "white" : "white"
                }  hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157] inline-block px-1 lg:px-2 py-2 font-Open-Sans font-normal text-base leading-6`}
              >
                Platform
              </Link>
            </li>
            <li className="mb-1 relative z-20">
              <a
                href="#"
                onMouseEnter={handleSolutionHover}
                onMouseLeave={handleSolutionHoverOut}
              >
                <Link
                  onClick={closeMenu} // Close mobile menu when link is clicked
                  to="/solutionAI"
                  className={`inline-flex w-full justify-center ${
                    location.pathname === "/platform" ? "text-white" : "white"
                  } hover:text-black hover:bg-[#f3d157] ${
                    isSolutionHovered ? "bg-[#f3d157] text-black" : ""
                  } active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6 `}
                >
                  Solutions
                  <svg
                    className={`h-6 ml-1.5 ${
                      isSolutionHovered
                        ? "text-black rotate-180"
                        : location.pathname === "/platform"
                        ? "text-black"
                        : "text-white"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    />
                  </svg>
                </Link>
              </a>

              {isSolutionHovered && (
                <ul
                  style={{ background: "#340D73" }}
                  className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-100 transition duration-150 ease-in-out origin-top shadow-lg text-left"
                  onMouseEnter={handleSolutionHover}
                  onMouseLeave={handleSolutionHoverOut}
                >
                  <li className="text-sm leading-8">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-Sans"
                    >
                      Data Ingineering
                    </a>
                  </li>
                  <li className="text-sm leading-8">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-Sans"
                    >
                      AI Innovation
                    </a>
                  </li>
                  <li className="text-sm leading-8">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 Open-Sans"
                    >
                      ERP System & Analytics
                    </a>
                  </li>
                  <li className="text-sm leading-8">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 Open-Sans"
                    >
                      Vision AI
                    </a>
                  </li>
                  <li className="text-sm leading-8">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 Open-Sans"
                    >
                      Edge Analytics
                    </a>
                  </li>
                  <li className="text-sm leading-8">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 Open-Sans"
                    >
                      Intelligent Enterprise
                    </a>
                  </li>
                  <li className="text-sm leading-8">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 Open-Sans"
                    >
                      Cloud Transformation
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="mb-1 relative z-10">
              <a
                href="#"
                onMouseEnter={handleServicesHover}
                onMouseLeave={handleServicesHoverOut}
              >
                <Link
                  onClick={closeMenu} // Close mobile menu when link is clicked
                  to="#"
                  className={`inline-flex w-full justify-center ${
                    location.pathname === "/platform" ? "text-white " : "white"
                  } ${
                    isServicesHovered ? "bg-[#f3d157] text-black" : ""
                  } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
                >
                  Services
                  <svg
                    className={`h-6 ml-1.5 ${
                      isServicesHovered
                        ? "text-black rotate-180"
                        : location.pathname === "/platform"
                        ? "text-white"
                        : "text-white"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    />
                  </svg>
                </Link>
              </a>

              {isServicesHovered && (
                <ul
                  style={{ background: "#340D73" }}
                  className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-100 transition duration-150 ease-in-out origin-top shadow-lg text-left"
                  onMouseEnter={handleServicesHover}
                  onMouseLeave={handleServicesHoverOut}
                >
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-sans"
                    >
                      Innovate
                    </a>
                  </li>
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-sans"
                    >
                      Manage
                    </a>
                  </li>
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-sans"
                    >
                      Modernize
                    </a>
                  </li>
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-sans"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-1 relative">
              <a
                href="#"
                onMouseEnter={handleIndustriesHover}
                onMouseLeave={handleIndustriesHoverOut}
              >
                <Link
                  onClick={closeMenu} // Close mobile menu when link is clicked
                  to="#"
                  className={`inline-flex  w-full justify-center ${"white"}   ${
                    isIndustriesHovered ? "bg-[#f3d157] text-black" : ""
                  } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
                >
                  Industries
                  <svg
                    className={`h-6 ml-1.5 ${
                      isIndustriesHovered
                        ? "text-black rotate-180"
                        : location.pathname === "/platform"
                        ? "text-white"
                        : "text-white"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    />
                  </svg>
                </Link>
              </a>

              {isIndustriesHovered && (
                <ul
                  style={{ background: "#340D73" }}
                  className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-100 transition duration-150 ease-in-out origin-top shadow-lg text-left"
                  onMouseEnter={handleIndustriesHover}
                  onMouseLeave={handleIndustriesHoverOut}
                >
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-sans"
                    >
                      Automotive
                    </a>
                  </li>
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-sans"
                    >
                      Manufacturing
                    </a>
                  </li>
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 font-sans"
                    >
                      Oil & Gas
                    </a>
                  </li>
                  <li className="text-sm leading-8 text-left">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-500 Open-sans"
                    >
                      Transportation
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                onClick={closeMenu} // Close mobile menu when link is clicked
                to="/contact"
                className={`inline-flex w-full justify-center ${
                  location.pathname === "/platform" ? "text-white" : "white"
                } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
              >
                CustomerSuccess
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu} // Close mobile menu when link is clicked
                to="/shodatAI"
                className={`inline-flex w-full justify-center ${
                  location.pathname === "/platform" ? "text-white" : "white"
                } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
              >
                ShodatAI
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu} // Close mobile menu when link is clicked
                to="/about"
                className={`inline-flex w-full justify-center ${
                  location.pathname === "/platform" ? "text-white" : "white"
                } hover:text-black hover:bg-[#f3d157] active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
              >
                About
              </Link>
            </li>
            <CustomButton className="mt-5">RequsetDemo</CustomButton>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
