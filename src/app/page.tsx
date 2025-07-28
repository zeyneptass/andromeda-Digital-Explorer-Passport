"use client";
import React, { useState } from "react";
import EuropeanCollection from "../components/europe/EuropeanCollection";
import WalletNFTList from "../components/nft/WalletNFTList";

interface City {
  id: string;
  name: string;
  country: string;
  isCapital: boolean;
  flag: string;
  contractAddress: string;
  description: string;
  image: string;
  xpReward: number;
}

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [view, setView] = useState("collection"); // "collection" veya "nfts"
  
  // Test için sabit wallet adresi
  const walletAddress = "andr1y0z7x68j39p5ygfe60q4v3a8y4lzky7lkm9phf";

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setView("nfts");
  };

  const handleBackToCollection = () => {
    setSelectedCity(null);
    setView("collection");
  };

  if (view === "nfts" && selectedCity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* NFT Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={handleBackToCollection}
                className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{selectedCity.flag}</div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {selectedCity.name} NFT Collection
                  </h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-gray-600">{selectedCity.country}</p>
                    {selectedCity.isCapital && (
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        🏛️ Capital
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg mb-4">
              {selectedCity.description}
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-800">
                  <strong>Contract Address:</strong> {selectedCity.contractAddress}
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  +{selectedCity.xpReward} XP
                </div>
              </div>
            </div>
          </div>

          <WalletNFTList 
            contractAddress={selectedCity.contractAddress} 
            walletAddress={walletAddress} 
          />
        </div>
      </div>
    );
  }

  return <EuropeanCollection onCitySelect={handleCitySelect} />;
}