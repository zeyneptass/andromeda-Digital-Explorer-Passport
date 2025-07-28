import React, { useEffect, useState } from 'react';

const SuccessAnimation = ({ isVisible, message, onComplete }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
        if (onComplete) onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl">
        {/* Confetti effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            >
              {['🎉', '✨', '🎊', '🌟', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        {/* Success icon */}
        <div className="text-6xl mb-4 animate-pulse">🎉</div>
        
        {/* Success message */}
        <h3 className="text-2xl font-bold text-green-600 mb-2">
          Congratulations!
        </h3>
        
        <p className="text-gray-700 text-lg mb-4">
          {message}
        </p>

        {/* XP reward */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full inline-block font-bold text-lg">
          +150 XP Earned!
        </div>

        {/* Progress bar */}
        <div className="mt-4 bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
        </div>
        
        <p className="text-sm text-gray-500 mt-2">
          150 XP remaining to Level 5
        </p>
      </div>
    </div>
  );
};

export default SuccessAnimation; 