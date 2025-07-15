// Basit bir CheckInButton componenti örneği
import React from "react";

const CheckInButton = ({ onCheckIn }) => (
  <button onClick={onCheckIn} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
    Check-in Yap
  </button>
);

export default CheckInButton; 