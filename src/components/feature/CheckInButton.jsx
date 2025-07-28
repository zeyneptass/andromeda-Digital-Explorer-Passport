import React, { useState } from 'react';
import QRCodeScanner from './QRCodeScanner';
import SuccessAnimation from '../ui/SuccessAnimation';

const CheckInButton = ({ nft, walletAddress, onCheckInSuccess }) => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkInStatus, setCheckInStatus] = useState(nft.visitStatus || 'not_visited');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckIn = async (qrData) => {
    setIsLoading(true);
    setIsScannerOpen(false);

    try {
      const response = await fetch('/api/check-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locationId: qrData.locationId,
          nonce: qrData.nonce,
          walletAddress: walletAddress,
          tokenId: nft.tokenId,
          contractAddress: nft.contractAddress,
          collectionSymbol: qrData.collectionSymbol
        }),
      });

      const result = await response.json();

      if (result.success) {
        setCheckInStatus('visited');
        setSuccessMessage(`Your visit to ${result.locationName} has been confirmed!`);
        setShowSuccessAnimation(true);
        if (onCheckInSuccess) {
          onCheckInSuccess(result);
        }
      } else {
        alert('Check-in failed: ' + result.error);
      }
    } catch (error) {
      console.error('Check-in error:', error);
      alert('An error occurred during check-in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonText = () => {
    switch (checkInStatus) {
      case 'visited':
        return '✅ Visited';
      case 'pending':
        return '⏳ Confirming...';
      default:
        return '📍 Confirm Visit';
    }
  };

  const getButtonStyle = () => {
    switch (checkInStatus) {
      case 'visited':
        return 'bg-green-500 hover:bg-green-600 text-white cursor-not-allowed';
      case 'pending':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white cursor-not-allowed';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const isButtonDisabled = checkInStatus === 'visited' || checkInStatus === 'pending' || isLoading;

  return (
    <>
      <button
        onClick={() => !isButtonDisabled && setIsScannerOpen(true)}
        disabled={isButtonDisabled}
        className={`check-in-button px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${getButtonStyle()} ${
          isButtonDisabled ? 'opacity-75' : 'shadow-lg hover:shadow-xl'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Confirming...</span>
          </div>
        ) : (
          getButtonText()
        )}
      </button>

      <QRCodeScanner
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onScan={handleCheckIn}
      />
      
      <SuccessAnimation
        isVisible={showSuccessAnimation}
        message={successMessage}
        onComplete={() => setShowSuccessAnimation(false)}
      />
    </>
  );
};

export default CheckInButton; 