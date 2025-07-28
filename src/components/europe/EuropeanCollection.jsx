import React from "react";
import CityCard from "./CityCard";
import { europeanCities } from "../../data/europeanCities";

const EuropeanCollection = ({ onCitySelect }) => {
  const handleCityClick = (city) => {
    if (onCitySelect) {
      onCitySelect(city);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            European Cities
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Discover the digital heritage NFT collection of each city
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-blue-600">{europeanCities.length}</div>
              <div className="text-sm text-gray-600">Total Cities</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-green-600">
                {europeanCities.filter(city => city.isCapital).length}
              </div>
              <div className="text-sm text-gray-600">Capitals</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-purple-600">
                {europeanCities.reduce((sum, city) => sum + city.xpReward, 0)}
              </div>
              <div className="text-sm text-gray-600">Total XP</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-orange-600">
                {new Set(europeanCities.map(city => city.country)).size}
              </div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {europeanCities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              onCityClick={handleCityClick}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 European Digital Heritage NFT Platform</p>
            <p className="text-sm mt-2">
              Secure NFT collections on Andromeda Protocol
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropeanCollection; 