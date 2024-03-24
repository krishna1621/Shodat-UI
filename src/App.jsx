import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";
import FinalFooter from "./Components/Footer/FinalFooter";
import Home from "./Components/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlatformPage from "./Components/PlatformPage/PlatformPage";
import SolutionAi from "./Components/SolutionAI/SolutionAi";
import ShodatAI from "./Components/ShodatAI/ShodatAI";
import About from "./Components/AboutPage/About";
function App() {
  return (
    <>
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutionAI" element={<SolutionAi />} />
            <Route path="/shodatAI" element={<ShodatAI />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes for additional pages */}
          </Routes>
          <FinalFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
