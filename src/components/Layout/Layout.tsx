import React from 'react';
import Navbar from '../Navbar/Navbar';

interface LayourProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayourProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
