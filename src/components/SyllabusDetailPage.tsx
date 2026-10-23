import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  BookOpen,
  Download,
  Share2,
  Sparkles,
  Layers,
  Terminal,
  BrainCircuit,
  Bot,
  Server,
  Code,
  Globe,
  Wand2,
  Users,
  Building,
  GraduationCap,
  ChevronRight,
  Send,
  Star,
  FileText,
  Film,
  Cpu,
  MapPin,
  Video,
  Wrench
} from 'lucide-react';
import { TRACKS_DATA, getTrackById, TrackData, DurationKey } from '../data/tracksData';

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
  Video,
  Wrench,
};

const durationMeta: Record<DurationKey, { label: string; sub: string }> = {
  '1day': { label: '1 Day', sub: 'Hands-on Lab (8 hrs)' },
  '2days': { label: '2 Days', sub: 'Offline Sprint (14 hrs)' },
  '3days': { label: '3 Days', sub: 'Fast Track (18 hrs)' },
  '5days': { label: '5 Days', sub: 'Bootcamp (30 hrs)' },
  '6days': { label: '6 Days', sub: 'Masterclass (36 hrs)' },
};

const SyllabusDetailPage: React.FC = () => {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();

  // Find track or fallback to first
  const currentTrack: TrackData = getTrackById(trackId || 'genai') || TRACKS_DATA[1];
  
  const availableDurations = (['1day', '2days', '3days', '5days', '6days'] as DurationKey[]).filter(
    (d) => !!currentTrack.syllabi[d]
  );
  const initialDuration = currentTrack.defaultDuration || availableDurations[0] || '5days';

  const [selectedDuration, setSelectedDuration] = useState<DurationKey>(initialDuration);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    role: 'Student',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveDayIndex(0);
    const trackDurations = (['1day', '2days', '3days', '5days', '6days'] as DurationKey[]).filter(
      (d) => !!currentTrack.syllabi[d]
    );
    if (currentTrack.defaultDuration && currentTrack.syllabi[currentTrack.defaultDuration]) {
      setSelectedDuration(currentTrack.defaultDuration);
    } else if (!currentTrack.syllabi[selectedDuration]) {
      setSelectedDuration(trackDurations[0] || '3days');
    }
  }, [trackId, currentTrack]);

  const activeSyllabus = currentTrack.syllabi[selectedDuration] || currentTrack.syllabi[availableDurations[0]]!;
  const IconComponent = iconMap[currentTrack.iconName] || BrainCircuit;

  const handleDownloadSyllabus = () => {
    // Generate clean text syllabus file for the user to download
    const content = `
========================================================================
BRAINOVISION TECHNOLOGIES - SAMPLE WORKSHOP SYLLABUS
Track: ${currentTrack.title} (${currentTrack.shortTitle})
Duration: ${activeSyllabus.durationLabel} - ${activeSyllabus.hours}
Recommended For: ${activeSyllabus.recommendedFor}
========================================================================

OVERVIEW:
${currentTrack.overview}

TOOLS & TECHNOLOGIES:
${currentTrack.toolsAndTech.join(', ')}

TARGET CAREER ROLES:
${currentTrack.careerRoles.join(', ')}

------------------------------------------------------------------------
DAY-BY-DAY CURRICULUM BREAKDOWN (${selectedDuration.toUpperCase()}):
------------------------------------------------------------------------
${activeSyllabus.days
  .map(
    (d) => `
DAY ${d.dayNumber}: ${d.title}
Focus: ${d.focus}
Topics Covered:
${d.topics.map((t) => `  - ${t}`).join('\n')}
Hands-on Lab:
  ${d.handsOnLab}
Daily Deliverable:
  ${d.deliverable}
`
  )
  .join('\n')}

------------------------------------------------------------------------
CAPSTONE PROJECT:
Title: ${activeSyllabus.capstoneTitle}
Description: ${activeSyllabus.capstoneDescription}
------------------------------------------------------------------------

KEY LEARNING OUTCOMES:
${currentTrack.learningOutcomes.map((o) => `  * ${o}`).join('\n')}

PREREQUISITES:
${currentTrack.prerequisites.map((p) => `  - ${p}`).join('\n')}

========================================================================
For College Workshop Bookings, Custom Corporate FDPs & Inquiries:
Website: https://brainovision.in/
Email: contact@brainovision.in
Brainovision Technologies Private Limited
========================================================================
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Brainovision_${currentTrack.id}_${selectedDuration}_Sample_Syllabus.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setIsRegisterModalOpen(false);
      setRegisterForm({ name: '', email: '', phone: '', college: '', role: 'Student' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-gray-900 dark:text-gray-100 font-poppins pt-24 pb-20 transition-colors duration-300">
      {/* Ambient Glow Blobs */}
      <div className="fixed w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-orange-400/10 dark:bg-orange-600/15 blur-[160px] md:blur-[200px] rounded-full -top-20 -left-20 pointer-events-none" />
      <div className="fixed w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-yellow-400/10 dark:bg-yellow-500/15 blur-[140px] md:blur-[180px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <span>/</span>
          <Link to="/syllabus" className="hover:text-orange-500 transition-colors">
            All Tracks
          </Link>
          <span>/</span>
          <span className="text-orange-600 dark:text-orange-400 font-semibold">{currentTrack.shortTitle}</span>
        </div>

        {/* Track Hero Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 mb-10 border border-orange-200/60 dark:border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1 rounded-full text-xs font-semibold shadow-md tracking-wide">
                  {currentTrack.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                  {currentTrack.category}
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{currentTrack.rating}</span>
                  <span className="text-gray-400">({currentTrack.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
                {currentTrack.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed mb-6">
                {currentTrack.overview}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-gray-200/80 dark:border-gray-800">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Students Trained</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{currentTrack.studentsTrained}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Colleges Partnered</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{currentTrack.partnerColleges}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Skill Level</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{currentTrack.level}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Certification</p>
                  <p className="text-lg font-bold text-orange-600 dark:text-orange-400">Industry Approved</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="lg:w-80 flex flex-col gap-4 bg-white/90 dark:bg-gray-800/90 p-6 rounded-2xl border border-orange-100 dark:border-gray-700 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                    {currentTrack.shortTitle} Syllabus
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sample Curricula Available</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300 py-2 border-y border-gray-100 dark:border-gray-700">
                {currentTrack.deliveryMode && (
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800/60">
                    <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{currentTrack.deliveryMode}</span>
                  </div>
                )}
                {availableDurations.map((dur) => (
                  <div key={dur} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{currentTrack.syllabi[dur]?.durationLabel}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleDownloadSyllabus}
                className="w-full py-3 px-4 rounded-xl border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/40 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Sample Syllabus</span>
              </button>

              <Link
                to={`/proposal?track=${currentTrack.id}&duration=${selectedDuration}`}
                className="w-full py-3 px-4 rounded-xl btn-brand-gradient text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-orange-500/25 transition-all text-center"
              >
                <Building className="w-4 h-4" />
                <span>Request College Proposal</span>
              </Link>

              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-orange-500 transition-colors text-center font-medium"
              >
                Need individual student enrollment? Click here
              </button>
            </div>
          </div>
        </div>

        {/* DURATION SWITCHER TABS (DYNAMICALLY 1D, 2D, 3D, 5D, 6D) */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 font-poppins">
                Interactive Schedule Selector
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 dark:text-white">
                Sample Syllabus Breakdown
              </h2>
            </div>

            {/* Duration Pills */}
            <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md gap-1">
              {availableDurations.map((tabId) => {
                const meta = durationMeta[tabId] || { label: tabId, sub: '' };
                const isActive = selectedDuration === tabId;
                return (
                  <button
                    key={tabId}
                    onClick={() => {
                      setSelectedDuration(tabId);
                      setActiveDayIndex(0);
                    }}
                    className={`px-4 sm:px-5 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex flex-col items-center ${
                      isActive
                        ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 text-white shadow-md font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
                    }`}
                  >
                    <span>{meta.label}</span>
                    <span className={`text-[10px] ${isActive ? 'text-white/90' : 'text-gray-400'}`}>{meta.sub}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Duration Information Callout */}
          <div className="p-5 rounded-2xl bg-orange-50/80 dark:bg-orange-950/30 border border-orange-200/80 dark:border-orange-800/60 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {activeSyllabus.durationLabel} ({activeSyllabus.hours})
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                  {activeSyllabus.description}
                </p>
                <p className="text-xs text-orange-700 dark:text-orange-300 font-medium mt-1">
                  <strong>Recommended for:</strong> {activeSyllabus.recommendedFor}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start md:self-center shrink-0">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Mode:</span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{currentTrack.deliveryMode || 'Offline & On-Campus'}</span>
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 text-orange-600 dark:text-orange-400 shadow-sm">
                100% Hands-on
              </span>
            </div>
          </div>

          {/* DAY-BY-DAY INTERACTIVE TIMELINE & CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Day Selector Navigation (Tabs) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0">
              {activeSyllabus.days.map((day, idx) => {
                const isSelected = activeDayIndex === idx;
                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => setActiveDayIndex(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 shrink-0 min-w-[240px] lg:min-w-0 ${
                      isSelected
                        ? 'bg-white dark:bg-gray-800 border-orange-500 shadow-lg ring-2 ring-orange-400/20'
                        : 'bg-white/60 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        Day {day.dayNumber}
                      </span>
                      <span className="text-[11px] text-gray-400">6 Hours</span>
                    </div>
                    <h4
                      className={`font-semibold text-sm line-clamp-1 ${
                        isSelected ? 'text-orange-600 dark:text-orange-400' : 'text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {day.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">{day.focus}</p>
                  </button>
                );
              })}
            </div>

            {/* Selected Day Detailed Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {activeSyllabus.days[activeDayIndex] && (
                  <motion.div
                    key={`${selectedDuration}-day-${activeDayIndex}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="glass-card rounded-3xl p-6 sm:p-8 border border-orange-100 dark:border-gray-700 shadow-lg"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-sm">
                            Day {activeSyllabus.days[activeDayIndex].dayNumber} Schedule
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {selectedDuration.replace('days', '-Day Program')}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white">
                          {activeSyllabus.days[activeDayIndex].title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          disabled={activeDayIndex === 0}
                          onClick={() => setActiveDayIndex((prev) => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Previous Day
                        </button>
                        <button
                          disabled={activeDayIndex === activeSyllabus.days.length - 1}
                          onClick={() =>
                            setActiveDayIndex((prev) => Math.min(activeSyllabus.days.length - 1, prev + 1))
                          }
                          className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-600"
                        >
                          Next Day
                        </button>
                      </div>
                    </div>

                    {/* Focus Statement */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-1">
                        Core Focus & Learning Objectives
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-poppins">
                        {activeSyllabus.days[activeDayIndex].focus}
                      </p>
                    </div>

                    {/* Topics Covered */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Detailed Topics & Code Sessions (Hour-by-Hour)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeSyllabus.days[activeDayIndex].topics.map((topic, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 flex items-start gap-2.5 shadow-sm"
                          >
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 text-xs font-bold shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-snug">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hands-on Lab & Deliverable Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                        <div className="flex items-center gap-2 mb-1 text-amber-700 dark:text-amber-300 font-semibold text-xs sm:text-sm">
                          <Terminal className="w-4 h-4" />
                          <span>Hands-on Practical Lab</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          {activeSyllabus.days[activeDayIndex].handsOnLab}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60">
                        <div className="flex items-center gap-2 mb-1 text-emerald-700 dark:text-emerald-300 font-semibold text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>End-of-Day Deliverable</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          {activeSyllabus.days[activeDayIndex].deliverable}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CAPSTONE PROJECT SPOTLIGHT */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 mb-12 border border-orange-200/70 dark:border-gray-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2">
                <Award className="w-4 h-4 text-orange-500" />
                <span>Capstone Project Outcome ({selectedDuration.toUpperCase()})</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 dark:text-white mb-2">
                {activeSyllabus.capstoneTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {activeSyllabus.capstoneDescription}
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-3">
              <Link
                to={`/proposal?track=${currentTrack.id}&duration=${selectedDuration}`}
                className="btn-brand-gradient text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md flex items-center justify-center gap-2 text-center"
              >
                <span>Host This Project at College</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* DETAILS GRID: Tools, Outcomes, Prerequisites, Career Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Tools & Tech */}
          <div className="glass-card p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md">
            <h4 className="font-semibold text-base font-poppins text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-500" /> Tools &amp; Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentTrack.toolsAndTech.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-orange-50 dark:bg-gray-800 text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-gray-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learning Outcomes */}
          <div className="glass-card p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md">
            <h4 className="font-semibold text-base font-poppins text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" /> Learning Outcomes
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
              {currentTrack.learningOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prerequisites */}
          <div className="glass-card p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md">
            <h4 className="font-semibold text-base font-poppins text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" /> Prerequisites
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
              {currentTrack.prerequisites.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Roles */}
          <div className="glass-card p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md">
            <h4 className="font-semibold text-base font-poppins text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-orange-500" /> Target Career Roles
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
              {currentTrack.careerRoles.map((role, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* EXPLORE OTHER FEATURED TRACKS */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 font-poppins">
                Explore More Domains
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 dark:text-white">
                Other Brainovision Deeptech Tracks
              </h2>
            </div>
            <Link
              to="/syllabus"
              className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
            >
              View All 9 Tracks <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS_DATA.filter((t) => t.id !== currentTrack.id)
              .slice(0, 3)
              .map((otherTrack) => {
                const OtherIcon = iconMap[otherTrack.iconName] || BrainCircuit;
                return (
                  <Link
                    key={otherTrack.id}
                    to={`/syllabus/${otherTrack.id}`}
                    className="glass-card p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:text-white transition-all">
                          <OtherIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-2.5 py-0.5 rounded-full border border-orange-200/60 dark:border-orange-800">
                          {otherTrack.badge}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg font-serif text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {otherTrack.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 font-poppins">
                        {otherTrack.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">3, 5, 6 Days Available</span>
                      <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Syllabus <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      {/* REGISTRATION MODAL */}
      <AnimatePresence>
        {isRegisterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-gray-200 dark:border-gray-700 shadow-2xl relative"
            >
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">
                Register Interest: {currentTrack.shortTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 font-poppins">
                Receive the complete official syllabus, upcoming workshop schedule, and discount codes directly to your inbox.
              </p>

              {registerSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-center text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-emerald-500" />
                  <h4 className="font-bold text-lg">Thank You!</h4>
                  <p className="text-xs mt-1">Our coordinator will connect with your sample kit and dates shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                        placeholder="you@college.edu"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={registerForm.phone}
                        onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      College / Institution Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={registerForm.college}
                      onChange={(e) => setRegisterForm({ ...registerForm, college: e.target.value })}
                      placeholder="e.g. JNTU Hyderabad / IIT Delhi"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Duration Format
                    </label>
                    <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value as DurationKey)}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-orange-500"
                    >
                      {availableDurations.map((d) => (
                        <option key={d} value={d}>
                          {currentTrack.syllabi[d]?.durationLabel} ({currentTrack.syllabi[d]?.hours})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 rounded-xl btn-brand-gradient text-white font-semibold text-sm shadow-md hover:brightness-110 transition-all"
                  >
                    Submit &amp; Download Sample Syllabus
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SyllabusDetailPage;
