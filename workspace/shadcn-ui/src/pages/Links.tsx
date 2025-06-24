// src/pages/Links.tsx
import React from 'react';
import SocialIcon from '@/components/SocialIcon';

const Links: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Roblox', 
      url: 'https://roblox.com/users/example', 
      icon: '🎮',
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Discord', 
      url: 'https://discord.com/users/example', 
      icon: '💬',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/example', 
      icon: '🐙',
      color: 'from-gray-700 to-gray-800'
    },
    { 
      name: 'TikTok', 
      url: 'https://tiktok.com/@example', 
      icon: '🎵',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@example', 
      icon: '📺',
      color: 'from-red-600 to-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 py-20 transition-all duration-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-black dark:text-white mb-6 animate-fade-in-up">
            CONNECT
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in-up animation-delay-200">
            Find me across the digital universe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={link.name}
              name={link.name}
              url={link.url}
              icon={link.icon}
              color={link.color}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Floating elements for visual interest */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;