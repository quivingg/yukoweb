// src/components/TypingAnimation.tsx
import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  texts, 
  className = '', 
  speed = 100 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, speed]);

  return (
    <div className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingAnimation;