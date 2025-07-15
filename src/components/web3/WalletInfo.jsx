// Basit bir WalletInfo componenti örneği
import React from "react";

const WalletInfo = ({ address, balance }) => (
  <div className="bg-gray-100 rounded p-3 text-sm">
    <div><strong>Adres:</strong> {address}</div>
    <div><strong>Bakiye:</strong> {balance} ATOM</div>
  </div>
);

export default WalletInfo; 