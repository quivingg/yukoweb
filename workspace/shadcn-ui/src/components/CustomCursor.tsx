// src/components/CustomCursor.tsx
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-10); // Keep only last 10 positions
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
        `}
      </style>

      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-100 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      >
        <div className="w-4 h-4 bg-black dark:bg-white rounded-full shadow-lg border-2 border-white dark:border-black animate-pulse" />
      </div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (index + 1) / trail.length * 0.5,
          }}
        >
          <div className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full" />
        </div>
      ))}
    </>
  );
};

export default CustomCursor;