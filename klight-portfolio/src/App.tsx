import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './views/layout';
import LandingPage from './views/landingPage';
import AboutPage from './views/aboutPage';
import PortfolioPage from './views/portFolioPage';
import ResumePage from './views/resumePage';
import ContactPage from './views/contactPage';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Kenny Light';
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;