// Basit bir NFTGrid componenti örneği
import React from "react";
import NFTCard from "./NFTCard";

const NFTGrid = ({ nfts }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {nfts.map((nft, idx) => (
      <NFTCard key={idx} {...nft} />
    ))}
  </div>
);

export default NFTGrid; 