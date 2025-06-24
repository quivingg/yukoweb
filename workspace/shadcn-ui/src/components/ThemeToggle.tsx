// src/components/ThemeToggle.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="fixed top-6 right-6 z-40 w-12 h-12 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
    >
      <div className="relative w-6 h-6">
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
          }`}
        >
          ☀️
        </div>
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
          }`}
        >
          🌙
        </div>
      </div>
    </Button>
  );
};

export default ThemeToggle;