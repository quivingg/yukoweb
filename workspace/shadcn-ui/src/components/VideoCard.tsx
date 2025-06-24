// src/components/VideoCard.tsx
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
  delay?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, description, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            className={`w-full h-full transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;