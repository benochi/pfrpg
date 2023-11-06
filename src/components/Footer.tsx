import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center text-white text-sm py-2 absolute bottom-0">
      © Copyright Polar Foundry {currentYear}
    </footer>
  );
};

export default Footer;
