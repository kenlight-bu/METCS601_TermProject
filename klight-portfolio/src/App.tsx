import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import LandingPage from './views/landingPage/landingPage';
import AboutPage from './views/aboutPage/aboutPage'; // Import AboutPage
import PortfolioPage from './views/portfolioPage/portFolioPage';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'kenlight.netlify.app'; // Set the title for all pages
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
