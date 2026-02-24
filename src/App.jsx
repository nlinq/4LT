import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import CustomSoftwareSolutions from "./pages/CustomSoftwareSolutions";
import CyberSecurity from "./pages/CyberSecurity";
import ItStaffingServices from "./pages/ItStaffingServices";
import Jobs from "./pages/Jobs";
import ManagedItServices from "./pages/ManagedItServices";
import SalesforceDevelopment from "./pages/SalesforceDevelopment";
import WebDevelopment from "./pages/WebDevelopment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/custom-software-solutions" element={<CustomSoftwareSolutions />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/it-staffing-services" element={<ItStaffingServices />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/managed-it-services" element={<ManagedItServices />} />
        <Route path="/salesforce-development" element={<SalesforceDevelopment />} />
        <Route path="/web-development" element={<WebDevelopment />} />

        {/* Backward-compatible .html links */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about-us.html" element={<Navigate to="/about-us" replace />} />
        <Route path="/career.html" element={<Navigate to="/career" replace />} />
        <Route path="/contact-us.html" element={<Navigate to="/contact-us" replace />} />
        <Route path="/custom_software_solutions.html" element={<Navigate to="/custom-software-solutions" replace />} />
        <Route path="/cyber_security.html" element={<Navigate to="/cyber-security" replace />} />
        <Route path="/it_staffing_services.html" element={<Navigate to="/it-staffing-services" replace />} />
        <Route path="/jobs.html" element={<Navigate to="/jobs" replace />} />
        <Route path="/managed_it_services.html" element={<Navigate to="/managed-it-services" replace />} />
        <Route path="/salesforce_development.html" element={<Navigate to="/salesforce-development" replace />} />
        <Route path="/web_development.html" element={<Navigate to="/web-development" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
