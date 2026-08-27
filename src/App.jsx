import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Destinations from './components/Destinations.jsx';
import Services from './components/Services.jsx';
import Properties from './components/Properties.jsx';
import SuccessStory from './components/success_story.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Team from './components/Team.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CountryPage from './Citizenship/CitizenshipPage.jsx';
import CitizenshipOverview from './Citizenship/CitizenshipOverview.jsx';
import ResidencyPage from './Residency/ResidencyPage.jsx';
import RealEstatePage from './Real Estate/RealEstatePage.jsx';
import OtherservicePage from './OtherService/OtherservicePage.jsx';
import PRPage from './PR/PR_page.jsx';
import ConsultationModal from './components/ConsultationModal.jsx';
import PolicyPage from "./components/PolicyPage.jsx";
import PROverview from './PR/PROverview.jsx';
import RealEstateOverview from './Real Estate/RealEstateOverview.jsx';
import ResidencyOverview from './Residency/ResidencyOverview.jsx';
import OtherServiceOverview from './OtherService/OtherServiceOverview.jsx';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  const [showAutoPopup, setShowAutoPopup] = useState(false);

  // Auto-open the consultation popup 7 seconds after landing on the
  // home page. Only runs once per visit to this page.
  useEffect(() => {
    const timer = setTimeout(() => setShowAutoPopup(true), 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <Hero />
      <Destinations />
      <Services />
      <Properties />
      <SuccessStory />
      <Testimonials />
            <Team />
            <FAQ />
      <Contact />
      <ConsultationModal
        open={showAutoPopup}
        onClose={() => setShowAutoPopup(false)}
      />
    </main>
  );
}

export default function App() {
  return (
        <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/citizenship/:slug" element={<CountryPage />} />
        <Route path="/citizenship" element={<CitizenshipOverview />} />
        <Route path="/residency/:slug" element={<ResidencyPage />} />
        <Route path="/residency" element={<ResidencyOverview />} />
        <Route path="/realestate/:slug" element={<RealEstatePage />} />
        <Route path="/realestate" element={<RealEstateOverview />} />
        <Route path="/services/:slug" element={<OtherservicePage />} />
        <Route path="/other-services" element={<OtherServiceOverview />} />
        <Route path="/pr/:slug" element={<PRPage />} />
        <Route path="/pr" element={<PROverview />} />
        <Route path="/policies/:slug" element={<PolicyPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}