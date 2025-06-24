// src/components/SocialIcon.tsx
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
  color: string;
  delay?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, url, icon, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className={`cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${isHovered ? 'animate-pulse' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <CardContent className="p-8 text-center">
        <div className={`relative mb-4 transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`}>
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-4xl shadow-lg ${isHovered ? 'shadow-xl rotate-12' : ''} transition-all duration-300`}>
            {icon}
          </div>
          {isHovered && (
            <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/20 to-transparent animate-ping"></div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
          {name}
        </h3>
        
        <div className={`w-12 h-1 bg-gradient-to-r ${color} mx-auto rounded-full transition-all duration-300 ${isHovered ? 'w-20' : ''}`}></div>
        
        {isHovered && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 animate-fade-in">
            Click to visit
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default SocialIcon;