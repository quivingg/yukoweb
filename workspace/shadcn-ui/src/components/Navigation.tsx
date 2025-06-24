// src/components/Navigation.tsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/showcase', label: 'SHOWCASE' },
    { path: '/links', label: 'LINKS' },
    { path: '/about', label: 'ABOUT' }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden w-12 h-12 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
        variant="ghost"
        size="icon"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className={`h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </Button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 dark:border-gray-800">
          {navItems.map(item => (
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              variant={location.pathname === item.path ? "default" : "ghost"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                location.pathname === item.path 
                  ? 'bg-black dark:bg-white text-white dark:text-black' 
                  : 'text-black dark:text-white hover:bg-white/20 dark:hover:bg-black/20'
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-20 left-6 right-6 bg-white dark:bg-black rounded-lg p-6 shadow-xl transition-all duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          <div className="space-y-4">
            {navItems.map(item => (
              <Button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                variant={location.pathname === item.path ? "default" : "ghost"}
                className="w-full justify-start text-lg"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;