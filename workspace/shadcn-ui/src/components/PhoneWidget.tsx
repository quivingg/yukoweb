// src/components/PhoneWidget.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ChatInterface from './ChatInterface';

const PhoneWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);

  useEffect(() => {
    // Show welcome notification after 3 seconds
    const timer = setTimeout(() => {
      if (!hasShownWelcome) {
        setShowNotification(true);
        setHasShownWelcome(true);
        
        // Hide notification after 8 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 8000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShownWelcome]);

  const handlePhoneClick = () => {
    setIsOpen(true);
    setShowNotification(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Phone Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Notification Bubble */}
          {showNotification && (
            <div className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 animate-fade-in-up">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  Y
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-black dark:text-white text-sm">yuko</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">now</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hey! Yuko here, if you like my work on this website please feel free to dm me, I'll be sure to respond quick!
                  </p>
                </div>
              </div>
              {/* Arrow */}
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-700 rotate-45"></div>
            </div>
          )}

          {/* Phone Icon Button */}
          <Button
            onClick={handlePhoneClick}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-black hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            size="icon"
          >
            <div className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Notification dot */}
              {showNotification && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Chat Interface */}
      {isOpen && <ChatInterface onClose={handleClose} />}
    </>
  );
};

export default PhoneWidget;