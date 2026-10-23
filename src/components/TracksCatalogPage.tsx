import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  ArrowRight,
  Clock,
  Sparkles,
  BrainCircuit,
  Bot,
  Server,
  Code,
  Globe,
  Wand2,
  Terminal,
  Layers,
  Star,
  CheckCircle2,
  Building,
  Film,
  Cpu,
  MapPin
} from 'lucide-react';
import { TRACKS_DATA, TrackData } from '../data/tracksData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BrainCircuit,
  Sparkles,
  Bot,
  Server,
  Code,
  Terminal,
  Layers,
  Wand2,
  Globe,
  Film,
  Cpu,
};

const TracksCatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDurationFilter, setSelectedDurationFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tracks (11)' },
    { id: 'offline', label: 'Offline Workshops (1D & 2D)' },
    { id: 'Artificial Intelligence', label: 'AI & GenAI' },
    { id: 'Creative AI & Media', label: 'AI Film & Media' },
    { id: 'Robotics & Hardware', label: 'Robotics & Hardware' },
    { id: 'Full Stack Engineering', label: 'Full Stack' },
    { id: 'Applied Deeptech', label: 'Applied Deeptech' },
  ];

  const filteredTracks = TRACKS_DATA.filter((track) => {
    let matchesCategory = true;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'offline') {
      matchesCategory = track.id === 'ai-film-making' || track.id === 'robotics' || !!track.deliveryMode?.toLowerCase().includes('offline');
    } else {
      matchesCategory = track.category.toLowerCase() === selectedCategory.toLowerCase();
    }

    const matchesSearch =
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.toolsAndTech.some((tool) => tool.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-gray-900 dark:text-gray-100 font-poppins pt-24 pb-20 transition-colors duration-300">
      {/* Ambient Glow Blobs */}
      <div className="fixed w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-orange-400/10 dark:bg-orange-600/15 blur-[160px] md:blur-[200px] rounded-full -top-20 -left-20 pointer-events-none" />
      <div className="fixed w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-yellow-400/10 dark:bg-yellow-500/15 blur-[140px] md:blur-[180px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Curriculum Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight leading-tight text-gray-900 dark:text-white mb-4">
            Explore All{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Tech Tracks &amp; Syllabi
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
            Every track is meticulously structured with customizable{' '}
            <strong className="text-orange-600 dark:text-orange-400">1-Day</strong>,{' '}
            <strong className="text-orange-600 dark:text-orange-400">2-Day</strong>,{' '}
            <strong className="text-orange-600 dark:text-orange-400">3-Day</strong>,{' '}
            <strong className="text-orange-600 dark:text-orange-400">5-Day</strong>, and{' '}
            <strong className="text-orange-600 dark:text-orange-400">6-Day</strong> hands-on modules designed for engineering colleges, hackathons, and offline workshops across India.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-card p-4 sm:p-6 rounded-3xl border border-orange-100 dark:border-gray-800 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tracks, AI, React, LangChain, PyTorch..."
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:border-orange-500 outline-none text-gray-800 dark:text-white placeholder:text-gray-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                        : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-orange-400 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTracks.map((track) => {
            const Icon = iconMap[track.iconName] || BrainCircuit;
            return (
              <motion.div
                key={track.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-3xl overflow-hidden border border-orange-100/90 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:border-orange-300 dark:hover:border-orange-500/50 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Photo Banner with Overlay */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Bar: Icon + Category + Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        {track.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-semibold text-orange-700 dark:text-orange-300 bg-white/95 dark:bg-gray-900/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                        {track.badge}
                      </span>
                    </div>

                    {/* Card Title inside Photo */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h2 className="text-lg sm:text-xl font-bold font-serif leading-tight">
                        {track.title}
                      </h2>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-poppins leading-relaxed mb-4 line-clamp-2">
                      {track.tagline}
                    </p>

                    {/* Available Duration Badges */}
                    <div className="mb-4 p-2.5 rounded-xl bg-orange-50/70 dark:bg-gray-800/50 border border-orange-100 dark:border-gray-700 flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-orange-500" /> Formats:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        {Object.keys(track.syllabi).map((k) => {
                          const label =
                            k === '1day' ? '1D' :
                            k === '2days' ? '2D' :
                            k === '3days' ? '3D' :
                            k === '5days' ? '5D' : '6D';
                          const isOfflineHighlight = k === '1day' || k === '2days';
                          return (
                            <span
                              key={k}
                              className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                                isOfflineHighlight
                                  ? 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-800'
                                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                              }`}
                            >
                              {label}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {track.toolsAndTech.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        >
                          {tool}
                        </span>
                      ))}
                      {track.toolsAndTech.length > 4 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md text-gray-400 font-medium">
                          +{track.toolsAndTech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800 mt-2 flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/syllabus/${track.id}`}
                    className="flex-1 py-2.5 px-4 rounded-xl btn-brand-gradient text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Check Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to={`/proposal?track=${track.id}`}
                    className="py-2.5 px-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 text-xs text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center gap-1"
                    title="Request Workshop Proposal for College"
                  >
                    <Building className="w-3.5 h-3.5 text-orange-500" />
                    <span>Proposal</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-bold font-serif mb-4">
              Need a Custom Multi-Track Workshop for Your College?
            </h3>
            <p className="text-sm sm:text-base text-white/90 font-poppins mb-8 leading-relaxed">
              We customize 3-day, 5-day, or 6-day hands-on bootcamps with complete kit materials, cloud GPU credits, and AICTE-recognized certificates for engineering departments.
            </p>
            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-orange-600 font-bold text-sm shadow-xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Submit College Workshop Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksCatalogPage;
