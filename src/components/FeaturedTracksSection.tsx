import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Bot,
  Server,
  Code,
  Globe,
  Wand2,
  Terminal,
  Layers,
  Clock,
  BookOpen,
  Building,
  Eye,
  X,
  CheckCircle2,
  Calendar,
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

const appleEase = [0.16, 1, 0.3, 1];

// Interactive 3D Perspective Tilt Card Component
const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {/* Specular Glare Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 60%)`,
        }}
      />
    </div>
  );
};

const FeaturedTracksSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'offline' | 'ai' | 'fullstack' | 'applied'>('all');
  const [quickPreviewTrack, setQuickPreviewTrack] = useState<TrackData | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All 11 Tech Tracks' },
    { id: 'offline', label: 'Offline Workshops (1D & 2D)' },
    { id: 'ai', label: 'AI, GenAI & Creative Media' },
    { id: 'fullstack', label: 'Full Stack Engineering' },
    { id: 'applied', label: 'Robotics & Deeptech' },
  ] as const;

  const filteredTracks = TRACKS_DATA.filter((track) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'offline') return track.id === 'ai-film-making' || track.id === 'robotics' || track.deliveryMode?.toLowerCase().includes('offline');
    if (activeFilter === 'ai') return ['ai', 'genai', 'agentic-ai', 'ai-film-making'].includes(track.id);
    if (activeFilter === 'fullstack') return ['mern-stack', 'python-fs', 'jfs', 'web-dev-ai'].includes(track.id);
    if (activeFilter === 'applied') return ['fde', 'ai-tools', 'agentic-ai', 'robotics'].includes(track.id);
    return true;
  });

  return (
    <section id="tracks" className="py-24 bg-white dark:bg-[#0b1120] relative overflow-hidden transition-colors duration-500 font-poppins">
      {/* Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-400/10 dark:bg-orange-600/15 blur-[160px] rounded-full -top-10 -right-20 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 dark:bg-yellow-500/15 blur-[160px] rounded-full -bottom-10 -left-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Curricula Directory</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Check Syllabi in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              1, 2, 3, 5, or 6 Days
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
            Hands-on offline college workshops, hardware labs, and visual project-driven roadmaps for every technical domain. Click any track to view day-by-day labs and deliverables.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md shadow-orange-500/20 scale-105'
                      : 'glass-card text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 border border-gray-200/60 dark:border-gray-800'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Interactive Tracks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTracks.map((track, idx) => {
            const Icon = iconMap[track.iconName] || BrainCircuit;

            return (
              <TiltCard key={track.id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.04, ease: appleEase }}
                  className="glass-card rounded-3xl overflow-hidden border border-orange-100/90 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-orange-400 dark:hover:border-orange-500/60 flex flex-col justify-between group transition-all duration-300 h-full"
                >
                  <div>
                    {/* High-Resolution Photo Banner */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center shadow-md">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          {track.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <button
                          onClick={() => setQuickPreviewTrack(track)}
                          className="w-7 h-7 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md text-gray-800 dark:text-white flex items-center justify-center hover:scale-110 shadow-sm"
                          title="Quick Snapshot Preview"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-semibold text-orange-700 dark:text-orange-300 bg-white/95 dark:bg-gray-900/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                          {track.badge}
                        </span>
                      </div>

                      {/* Card Title inside Photo */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-lg sm:text-xl font-bold font-serif leading-tight">
                          {track.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6">
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-poppins leading-relaxed mb-4 line-clamp-2">
                        {track.tagline}
                      </p>

                      {/* Available Formats Bar */}
                      <div className="p-2.5 rounded-xl bg-orange-50/60 dark:bg-gray-800/60 border border-orange-100/80 dark:border-gray-700 flex items-center justify-between text-xs mb-4">
                        <span className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-orange-500" /> Formats:
                        </span>
                        <div className="flex flex-wrap items-center gap-1 font-semibold text-[10px] text-gray-800 dark:text-gray-200">
                          {Object.keys(track.syllabi).map((k) => {
                            const label =
                              k === '1day' ? '1 Day' :
                              k === '2days' ? '2 Days' :
                              k === '3days' ? '3 Days' :
                              k === '5days' ? '5 Days' : '6 Days';
                            const isOfflineHighlight = k === '1day' || k === '2days';
                            return (
                              <span
                                key={k}
                                className={`px-1.5 py-0.5 rounded border ${
                                  isOfflineHighlight
                                    ? 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-800 font-bold'
                                    : 'bg-white dark:bg-gray-700 border-gray-100 dark:border-gray-600'
                                }`}
                              >
                                {label}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tech Tools Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {track.toolsAndTech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {track.toolsAndTech.length > 4 && (
                          <span className="text-[10px] px-1.5 py-0.5 text-gray-400 font-medium self-center">
                            +{track.toolsAndTech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800/80 mt-2 flex items-center gap-2">
                    <Link
                      to={`/syllabus/${track.id}`}
                      className="flex-1 py-2.5 px-3.5 rounded-xl btn-brand-gradient text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/20 group/btn"
                    >
                      <span>Check Syllabus (3/5/6D)</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to={`/proposal?track=${track.id}`}
                      className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                      title="Request Workshop Proposal for College"
                    >
                      <Building className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>

        {/* View All Syllabi Link */}
        <div className="mt-14 text-center">
          <Link
            to="/syllabus"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-orange-500/30 hover:border-orange-500 text-orange-600 dark:text-orange-400 font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
          >
            <span>Check All 9 Tech Syllabi &amp; Detailed Day Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Interactive Quick Preview Modal rendered via Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {quickPreviewTrack && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                onClick={() => setQuickPreviewTrack(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ ease: appleEase, duration: 0.3 }}
                  className="relative max-w-2xl w-full rounded-3xl bg-white dark:bg-gray-900 border border-orange-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950 px-3 py-1 rounded-full">
                        {quickPreviewTrack.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {quickPreviewTrack.badge}
                      </span>
                    </div>

                    <button
                      onClick={() => setQuickPreviewTrack(null)}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">
                    {quickPreviewTrack.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-poppins">
                    {quickPreviewTrack.tagline}
                  </p>

                  {/* Dynamic Duration Overview */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                    {Object.entries(quickPreviewTrack.syllabi).map(([key, syl]) => {
                      if (!syl) return null;
                      return (
                        <div key={key} className="p-3 rounded-2xl bg-orange-50/70 dark:bg-gray-800/60 border border-orange-100 dark:border-gray-700 text-center">
                          <span className="text-[10px] font-bold uppercase text-orange-600 dark:text-orange-400 block truncate">
                            {syl.durationLabel.split(' ')[0]}
                          </span>
                          <p className="text-xs font-semibold text-gray-900 dark:text-white mt-1">
                            {syl.hours}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Key Learning Outcomes / Capstone */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                      Key Practical Outcomes &amp; Deliverables:
                    </span>
                    <div className="space-y-1.5">
                      {quickPreviewTrack.learningOutcomes.slice(0, 3).map((outcome, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Link
                      to={`/syllabus/${quickPreviewTrack.id}`}
                      onClick={() => setQuickPreviewTrack(null)}
                      className="flex-1 py-3 px-4 rounded-xl btn-brand-gradient text-white font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Check Full Day-by-Day Syllabus</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to={`/proposal?track=${quickPreviewTrack.id}`}
                      onClick={() => setQuickPreviewTrack(null)}
                      className="py-3 px-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 text-xs font-semibold text-gray-700 dark:text-gray-300 text-center flex items-center justify-center gap-1.5"
                    >
                      <Building className="w-3.5 h-3.5 text-orange-500" />
                      <span>Host Proposal</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default FeaturedTracksSection;
