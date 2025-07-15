// Basit bir Button componenti örneği
import React from "react";

const Button = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
    {children}
  </button>
);

export default Button; 