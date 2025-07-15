// Basit bir NFTDetailView componenti örneği
import React from "react";

const NFTDetailView = ({ image, title, description, owner }) => (
  <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
    <img src={image} alt={title} className="w-full h-64 object-cover rounded mb-4" />
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="mb-2 text-gray-700">{description}</p>
    <div className="text-sm text-gray-500">Sahip: {owner}</div>
  </div>
);

export default NFTDetailView; 