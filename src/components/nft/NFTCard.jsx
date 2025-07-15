// Basit bir NFTCard componenti örneği
import React from "react";

const NFTCard = ({ image, title, description, visited }) => (
  <div className="border rounded shadow p-4 relative">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
    <h3 className="mt-2 font-bold text-lg">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
    {visited && <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">Ziyaret Edildi</span>}
  </div>
);

export default NFTCard; 