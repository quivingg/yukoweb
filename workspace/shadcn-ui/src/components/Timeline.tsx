// src/components/Timeline.tsx
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [visibleEvents, setVisibleEvents] = useState<boolean[]>(new Array(events.length).fill(false));
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleEvents(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-500"></div>
      
      <div className="space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            data-index={index}
            className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-1000 ${
              visibleEvents[index] ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black shadow-lg z-10"></div>
            
            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {event.year}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;