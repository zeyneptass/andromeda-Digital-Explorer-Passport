import React from "react";
import CheckInButton from "../feature/CheckInButton";

const NFTCard = ({ nft, walletAddress, onCheckInSuccess }) => {
  const isVideo = nft.image && (nft.image.includes('.mp4') || nft.image.includes('.webm') || nft.image.includes('.mov'));
  const isVisited = nft.visitStatus === 'visited';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* NFT Media */}
      <div className="relative h-64 bg-gray-200">
        {isVideo ? (
          <video 
            className="w-full h-full object-cover"
            controls
            muted
            loop
            poster={nft.image.replace('.mp4', '.jpg') || nft.image.replace('.webm', '.jpg')}
          >
            <source src={nft.image} type="video/mp4" />
            <source src={nft.image} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={nft.image} 
            alt={nft.name || "NFT"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x300?text=Image+not+found";
            }}
          />
        )}
        
        {/* Visit Status Badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            isVisited 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-500 text-white'
          }`}>
            {isVisited ? '✅ Visited' : '🔍 Not Visited'}
          </span>
        </div>

        {/* NFT Type Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
            {isVideo ? '🎥 Video' : '🖼️ Image'}
          </span>
        </div>
      </div>

      {/* NFT Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {nft.name || `NFT #${nft.tokenId}`}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          {nft.description || "No description available"}
        </p>

        {/* Token ID */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500">Token ID:</span>
          <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
            {nft.tokenId}
          </span>
        </div>

        {/* Contract Address */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500">Contract:</span>
          <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
            {nft.contractAddress?.slice(0, 8)}...{nft.contractAddress?.slice(-6)}
          </span>
        </div>

        {/* Check-in Button */}
        <CheckInButton 
          nft={nft}
          walletAddress={walletAddress}
          onCheckInSuccess={onCheckInSuccess}
        />
      </div>
    </div>
  );
};

export default NFTCard; 