import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Score from './pages/Score';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Tools from './pages/Tools';
import Blogs from './pages/Blogs';
import EmissionLeakageBlog from './pages/EmissionLeakageBlog';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/score" element={<Score />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/emission-leakage-meaning-causes-examples-prevention" element={<EmissionLeakageBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
