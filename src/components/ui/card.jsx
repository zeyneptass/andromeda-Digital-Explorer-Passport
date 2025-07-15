// Basit bir Card componenti örneği
import React from "react";

const Card = ({ children, className = "", ...props }) => (
  <div {...props} className={`bg-white rounded shadow p-4 ${className}`}>
    {children}
  </div>
);

export default Card; 