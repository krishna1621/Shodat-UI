import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";
import FinalFooter from "./Components/Footer/FinalFooter";
import Home from "./Components/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlatformPage from "./Components/PlatformPage/PlatformPage";
import SolutionAi from "./Components/SolutionAI/SolutionAi";
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
            {/* Add more routes for additional pages */}
          </Routes>
          <FinalFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
