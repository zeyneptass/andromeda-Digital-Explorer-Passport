// Basit bir Footer componenti örneği
import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-100 text-gray-600 px-6 py-4 text-center mt-8">
    © {new Date().getFullYear()} İstanbul Digital Heritage NFT
  </footer>
);

export default Footer; 