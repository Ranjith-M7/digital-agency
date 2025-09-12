import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

import Whatsapp from "./components/Whatsapp";
import ProjectsPage from "./pages/ProjectsPage";

// --- Main App Component ---
const App = () => {
  return (
    <div className="overflow-overflow-x-hidden">
      <BrowserRouter>
        <div className="overflow-x-hidden min-h-screen font-sans bg-gray-50 text-gray-800">
          <ToastContainer />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <Whatsapp />
    </div>
  );
};

export default App;
