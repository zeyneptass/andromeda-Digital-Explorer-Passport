import React from "react";

const CityCard = ({ city, onCityClick }) => {
  return (
    <div
      onClick={() => onCityClick(city)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200 overflow-hidden"
    >
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-3 left-3">
          <div className="text-2xl">{city.flag}</div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-white opacity-90">{city.country}</span>
            {city.isCapital && (
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                🏛️ Capital
              </span>
            )}
          </div>
          <p className="text-sm text-white opacity-90">{city.description}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-600">
            NFT Collection
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-green-600">Active</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-gray-500">
            Contract: {city.contractAddress.slice(0, 10)}...{city.contractAddress.slice(-8)}
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            +{city.xpReward} XP
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
          View NFTs
        </button>
      </div>
    </div>
  );
};

export default CityCard; 