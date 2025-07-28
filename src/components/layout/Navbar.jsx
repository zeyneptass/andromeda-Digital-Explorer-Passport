// Basit bir Navbar componenti örneği
import React from "react";

const Navbar = () => (
  <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between shadow-lg">
    <div className="flex items-center space-x-3">
      <div className="text-2xl">🌍</div>
      <div className="font-bold text-xl">European Digital Heritage NFT</div>
    </div>
    <div className="flex items-center space-x-6">
      <a href="#" className="hover:text-blue-200 transition-colors duration-200 flex items-center space-x-1">
        <span>🏛️</span>
        <span>Collections</span>
      </a>
      <a href="#" className="hover:text-blue-200 transition-colors duration-200 flex items-center space-x-1">
        <span>📚</span>
        <span>About</span>
      </a>
      <a href="#" className="hover:text-blue-200 transition-colors duration-200 flex items-center space-x-1">
        <span>🔗</span>
        <span>Andromeda</span>
      </a>
    </div>
  </nav>
);

export default Navbar; 