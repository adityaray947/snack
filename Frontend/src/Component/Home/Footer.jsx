import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 Snack Saver. All rights reserved.
        </p>
        <p className="text-sm">
          Designed and developed by Aditya & Aman
        </p>
        <div className="mt-2">
          <a href="#" className="text-teal-400 hover:text-teal-600 mx-2">Privacy Policy</a>
          <a href="#" className="text-teal-400 hover:text-teal-600 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
