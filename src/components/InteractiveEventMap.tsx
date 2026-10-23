import React, { useState } from 'react';
import { MapPin, Users, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface RegionalHub {
  state: string;
  city: string;
  colleges: string;
  studentsTrained: string;
  popularTracks: string[];
}

const REGIONAL_HUBS: RegionalHub[] = [
  {
    state: 'Telangana',
    city: 'Hyderabad',
    colleges: '120+ Colleges',
    studentsTrained: '45,000+',
    popularTracks: ['GenAI & LLMs', 'Agentic AI', 'MERN Stack'],
  },
  {
    state: 'Andhra Pradesh',
    city: 'Vijayawada & Vizag',
    colleges: '95+ Colleges',
    studentsTrained: '32,000+',
    popularTracks: ['Python Full Stack', 'AI & ML', 'Java FS'],
  },
  {
    state: 'Karnataka',
    city: 'Bangalore & Mysore',
    colleges: '80+ Colleges',
    studentsTrained: '28,000+',
    popularTracks: ['Forward Deployed Eng', 'Agentic AI', 'AI Tools'],
  },
  {
    state: 'Tamil Nadu',
    city: 'Chennai & Coimbatore',
    colleges: '75+ Colleges',
    studentsTrained: '24,000+',
    popularTracks: ['Java Full Stack', 'Web Dev + AI', 'GenAI'],
  },
  {
    state: 'Maharashtra',
    city: 'Pune & Mumbai',
    colleges: '60+ Colleges',
    studentsTrained: '18,000+',
    popularTracks: ['MERN Stack', 'FDE', 'AI Tools'],
  },
  {
    state: 'Delhi NCR & North',
    city: 'Delhi & Noida',
    colleges: '70+ Colleges',
    studentsTrained: '22,000+',
    popularTracks: ['AI & ML', 'GenAI & LLMs', 'Python FS'],
  },
];

const RealEventMap: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<RegionalHub>(REGIONAL_HUBS[0]);

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0b1120] relative transition-colors duration-300 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>National Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Our Workshop Coverage Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              India
            </span>
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
            Delivering on-premise hands-on bootcamps and faculty development programs across premier university clusters nationwide.
          </p>
        </div>

        {/* Map & Regional Hubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Map Preview */}
          <div className="lg:col-span-6 glass-card p-4 sm:p-6 rounded-3xl border border-orange-100 dark:border-gray-800 shadow-xl overflow-hidden">
            <div className="rounded-2xl overflow-hidden relative shadow-md bg-white dark:bg-gray-900">
              <img
                src="/india .jpg"
                alt="Brainovision Pan-India Event Coverage Map"
                className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-orange-200 dark:border-gray-700 text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Active in 18+ States &amp; 500+ Institutions</span>
              </div>
            </div>
          </div>

          {/* Right: Regional Hub Selector */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Select Regional Cluster:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {REGIONAL_HUBS.map((hub) => {
                const isSelected = selectedHub.state === hub.state;
                return (
                  <button
                    key={hub.state}
                    onClick={() => setSelectedHub(hub)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-md border-transparent'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-orange-400'
                    }`}
                  >
                    <p className="text-xs font-bold leading-tight">{hub.state}</p>
                    <p className={`text-[10px] mt-0.5 ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                      {hub.city}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Hub Details Card */}
            <motion.div
              key={selectedHub.state}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 rounded-2xl border border-orange-200/80 dark:border-gray-800 shadow-lg mt-4"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <h4 className="text-lg font-bold font-serif text-gray-900 dark:text-white">
                    {selectedHub.state} ({selectedHub.city} Hub)
                  </h4>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                    Regional Academic Partner Network
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200 block">
                    {selectedHub.colleges}
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">
                    {selectedHub.studentsTrained} Students
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">
                  Most Requested Tracks in this Cluster:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.popularTracks.map((trk) => (
                    <span
                      key={trk}
                      className="text-xs px-3 py-1 rounded-lg bg-orange-50 dark:bg-gray-800 text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-gray-700 font-medium"
                    >
                      {trk}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEventMap;
