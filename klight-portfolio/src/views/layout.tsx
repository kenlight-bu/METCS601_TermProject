import React from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar component
import Footer from '../components/Footer'; // Import the new Footer component
import '../styles/layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">{children}</main>
      <Footer /> {/* Use the Footer component */}
    </div>
  );
};

export default Layout;