// Basit bir MobileMenu componenti örneği
import React, { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">
        <span className="material-icons">menu</span>
      </button>
      {open && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md z-50">
          <a href="#" className="block px-4 py-2 border-b">Koleksiyon</a>
          <a href="#" className="block px-4 py-2">Hakkında</a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 