import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; 2024 Resume Builder</p>
        </div>
        <div>
          <a href="/about" className="mr-4">About Us</a>
          <a href="/contact" className="mr-4">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
