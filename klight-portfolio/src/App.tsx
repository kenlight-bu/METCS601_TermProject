import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import LandingPage from './views/landingPage/landingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/portfolio" element={<div>Portfolio Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;