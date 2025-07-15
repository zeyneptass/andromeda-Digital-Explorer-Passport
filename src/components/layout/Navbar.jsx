// Basit bir Navbar componenti örneği
import React from "react";

const Navbar = () => (
  <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
    <div className="font-bold text-lg">İstanbul Digital Heritage NFT</div>
    <div className="space-x-4">
      <a href="#" className="hover:underline">Koleksiyon</a>
      <a href="#" className="hover:underline">Hakkında</a>
    </div>
  </nav>
);

export default Navbar; 