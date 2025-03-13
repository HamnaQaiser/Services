import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AluminumDesigns from "./pages/services/AluminiumDesign";
import CabinetDesigns from "./pages/services/CabinetDesign";
import TechnicalDrawings from "./pages/services/TechnicalDesign";
import "./index.css";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetail from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <Navbar className="fixed" />
      <div className="container mx-auto px-4 py-8 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/aluminum-designs" element={<AluminumDesigns />} />
          <Route path="/cabinet-designs" element={<CabinetDesigns />} />
          <Route path="/technical-drawings" element={<TechnicalDrawings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
