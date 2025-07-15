// Basit bir Dialog componenti örneği
import React from "react";

const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded p-6 min-w-[300px] relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Dialog; 