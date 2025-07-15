// Basit bir TransactionModal componenti örneği
import React from "react";

const TransactionModal = ({ open, status, onClose }) => {
  if (!open) return null;
  let content = null;
  if (status === "pending") content = <div>İşlem beklemede...</div>;
  else if (status === "success") content = <div>İşlem başarılı!</div>;
  else if (status === "error") content = <div>İşlem hatası!</div>;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded p-6 min-w-[300px] relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">&times;</button>
        {content}
      </div>
    </div>
  );
};

export default TransactionModal; 