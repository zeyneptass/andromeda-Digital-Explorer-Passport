import React, { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';

const QRCodeScanner = ({ onScan, onClose, isOpen }) => {
  const [scanner, setScanner] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (isOpen && !scanner) {
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader",
        { 
          fps: 10, 
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
          supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
        },
        false
      );

      html5QrcodeScanner.render((decodedText, decodedResult) => {
        try {
          const qrData = JSON.parse(decodedText);
          onScan(qrData);
          html5QrcodeScanner.clear();
          setScanner(null);
        } catch (error) {
          console.error('QR code data is not in JSON format:', error);
          // For simple string format
          onScan({ locationId: decodedText });
          html5QrcodeScanner.clear();
          setScanner(null);
        }
      }, (error) => {
        // Continue silently in case of error
        console.warn('QR code reading error:', error);
      });

      setScanner(html5QrcodeScanner);
    }

    return () => {
      if (scanner) {
        scanner.clear();
        setScanner(null);
      }
    };
  }, [isOpen, scanner, onScan]);

  useEffect(() => {
    if (!isOpen && scanner) {
      scanner.clear();
      setScanner(null);
    }
  }, [isOpen, scanner]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            QR Code Scanner
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-2">
            Please scan the QR code in this area
          </p>
          <div className="w-64 h-64 mx-auto border-2 border-blue-500 rounded-lg relative">
            <div id="qr-reader" className="w-full h-full"></div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white rounded-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeScanner; 