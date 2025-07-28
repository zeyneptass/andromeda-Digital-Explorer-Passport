import React from "react";

const CountryCard = ({ country, onCountryClick }) => {
  return (
    <div
      onClick={() => onCountryClick(country)}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{country.flag}</div>
          <div className="text-right">
            <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
            <p className="text-sm text-gray-600">{country.cities.length} şehir</p>
          </div>
        </div>
        
        <div className="space-y-2">
          {country.cities.slice(0, 3).map((city) => (
            <div key={city.id} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">{city.name}</span>
            </div>
          ))}
          {country.cities.length > 3 && (
            <div className="text-xs text-gray-500 mt-2">
              +{country.cities.length - 3} şehir daha
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            NFT koleksiyonlarını keşfet
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard; 