// src/pages/About.tsx
import React from 'react';
import Timeline from '@/components/Timeline';

const About: React.FC = () => {
  const timelineEvents = [
    {
      year: '2020',
      title: 'Creative Journey Begins',
      description: 'Started exploring digital art and creative programming, discovering a passion for innovative design.'
    },
    {
      year: '2021',
      title: 'First Major Project',
      description: 'Launched breakthrough creative project that gained recognition in the digital community.'
    },
    {
      year: '2022',
      title: 'Skill Expansion',
      description: 'Mastered advanced techniques in multimedia production and interactive design.'
    },
    {
      year: '2023',
      title: 'Community Impact',
      description: 'Built a following through innovative content and collaborative projects.'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Continuing to push boundaries and create amazing experiences that inspire others.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-700">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-8 animate-fade-in">
            ABOUT YUKO
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-delay">
            A creative visionary dedicated to pushing the boundaries of digital art, 
            interactive design, and innovative storytelling. Every project is an opportunity 
            to inspire, innovate, and create something extraordinary.
          </p>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent animate-spin-slow"></div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
              The Story Behind the Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  From a young age, I've been fascinated by the intersection of technology 
                  and creativity. My journey began with simple digital experiments and has 
                  evolved into a comprehensive approach to multimedia creation.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, I specialize in creating immersive experiences that blend cutting-edge 
                  technology with artistic vision, always striving to tell compelling stories 
                  through innovative mediums.
                </p>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center text-6xl animate-pulse">
                  🎨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-16">
            CREATIVE MILESTONES
          </h2>
          <Timeline events={timelineEvents} />
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-12">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Creative Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Recognized for innovative approach to digital storytelling
              </p>
            </div>
            <div className="bg-white dark:bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Inspiring the next generation of digital creators
              </p>
            </div>
            <div className="bg-white dark:bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Innovation Leader
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pioneering new techniques in interactive media
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;