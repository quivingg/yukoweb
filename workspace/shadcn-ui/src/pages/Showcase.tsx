// src/pages/Showcase.tsx
import React, { useEffect, useState } from 'react';
import VideoCard from '@/components/VideoCard';

const Showcase: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videos = [
    { id: 'example1', title: 'Project Alpha', description: 'Revolutionary creative work' },
    { id: 'example2', title: 'Project Beta', description: 'Innovative design solution' },
    { id: 'example3', title: 'Project Gamma', description: 'Cutting-edge development' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-700">
      {/* Parallax Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-6 animate-fade-in">
            SHOWCASE
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 animate-fade-in-delay">
            Where creativity meets innovation
          </p>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Video Gallery */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              title={video.title}
              description={video.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>

      {/* Parallax separator */}
      <div 
        className="h-64 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <p className="text-2xl font-light text-gray-700 dark:text-gray-300">
          More amazing work coming soon...
        </p>
      </div>
    </div>
  );
};

export default Showcase;