// src/App.tsx
import React, { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import Links from './pages/Links';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import PhoneWidget from './components/PhoneWidget';

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
            
            {!isLoading && (
              <>
                <CustomCursor />
                <Navigation />
                <ThemeToggle />
                <PhoneWidget />
                
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/showcase" element={<Showcase />} />
                  <Route path="/links" element={<Links />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </>
            )}
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;