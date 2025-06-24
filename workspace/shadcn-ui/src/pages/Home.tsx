// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import TypingAnimation from '@/components/TypingAnimation';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEasterEgg = () => {
    const element = document.querySelector('.easter-egg');
    if (element) {
      element.classList.add('animate-spin');
      setTimeout(() => {
        element.classList.remove('animate-spin');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 transition-all duration-700">
      <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 
          className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-pulse easter-egg cursor-pointer"
          onClick={handleEasterEgg}
        >
          YUKO
        </h1>
        
        <div className="h-16 flex items-center justify-center">
          <TypingAnimation 
            texts={['Innovate. Inspire. Create.']}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300"
          />
        </div>

        <div className="pt-8">
          <Button
            onClick={() => navigate('/showcase')}
            className="px-12 py-6 text-xl font-semibold bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Explore My Work
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;