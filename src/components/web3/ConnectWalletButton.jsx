// Basit bir ConnectWalletButton componenti örneği
import React from "react";

const ConnectWalletButton = ({ onConnect }) => (
  <button onClick={onConnect} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
    Cüzdanı Bağla
  </button>
);

export default ConnectWalletButton; 