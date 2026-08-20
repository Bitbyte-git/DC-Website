import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Destinations from './components/Destinations.jsx';
import Services from './components/Services.jsx';
import Properties from './components/Properties.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CountryPage from './Citizenship/CitizenshipPage.jsx';
import ResidencyPage from './Residency/ResidencyPage.jsx';
import RealEstatePage from './Real Estate/RealEstatePage.jsx';
import OtherservicePage from './OtherService/OtherservicePage.jsx';

function Home() {
  return (
    <main>
      <Hero />
      <Destinations />
      <Services />
      <Properties />
      <About />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizenship/:slug" element={<CountryPage />} />
        <Route path="/residency/:slug" element={<ResidencyPage />} />
        <Route path="/realestate/:slug" element={<RealEstatePage />} />
        <Route path="/services/:slug" element={<OtherservicePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}