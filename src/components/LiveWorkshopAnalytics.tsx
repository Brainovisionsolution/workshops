import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Layers,
  GraduationCap
} from 'lucide-react';

const appleEase = [0.16, 1, 0.3, 1];

interface TrackMetric {
  id: string;
  name: string;
  studentsTrained: number;
  collegesDelivered: number;
  practicalLabs: number;
  satisfactionScore: number;
  ratingPercent: number;
  color: string;
}

const TRACK_METRICS: TrackMetric[] = [
  {
    id: 'agentic-ai',
    name: 'Agentic AI & Autonomous Swarms',
    studentsTrained: 28400,
    collegesDelivered: 114,
    practicalLabs: 16,
    satisfactionScore: 98.9,
    ratingPercent: 98,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'genai',
    name: 'Generative AI & LLM Engineering',
    studentsTrained: 36200,
    collegesDelivered: 148,
    practicalLabs: 18,
    satisfactionScore: 99.2,
    ratingPercent: 99,
    color: 'from-orange-500 to-rose-500',
  },
  {
    id: 'mern-stack',
    name: 'MERN Stack Enterprise Architecture',
    studentsTrained: 31500,
    collegesDelivered: 132,
    practicalLabs: 22,
    satisfactionScore: 98.4,
    ratingPercent: 95,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'fde',
    name: 'Forward Deployed Engineering',
    studentsTrained: 19800,
    collegesDelivered: 86,
    practicalLabs: 14,
    satisfactionScore: 97.8,
    ratingPercent: 93,
    color: 'from-orange-600 to-amber-600',
  },
  {
    id: 'python-fs',
    name: 'Python Full Stack & FastAPI',
    studentsTrained: 24600,
    collegesDelivered: 104,
    practicalLabs: 16,
    satisfactionScore: 98.1,
    ratingPercent: 94,
    color: 'from-amber-600 to-yellow-500',
  },
];

const GROWTH_DATA = [
  { year: '2021', students: 18000, colleges: 64, x: 50, y: 190 },
  { year: '2022', students: 38000, colleges: 138, x: 190, y: 155 },
  { year: '2023', students: 72000, colleges: 260, x: 330, y: 110 },
  { year: '2024', students: 112000, colleges: 390, x: 470, y: 70 },
  { year: '2025', students: 154000, colleges: 500, x: 610, y: 28 },
];

const LiveWorkshopAnalytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tracks' | 'growth' | 'quality'>('tracks');
  const [hoveredTrack, setHoveredTrack] = useState<TrackMetric | null>(TRACK_METRICS[0]);
  const [hoveredGrowthPoint, setHoveredGrowthPoint] = useState<typeof GROWTH_DATA[0] | null>(
    GROWTH_DATA[GROWTH_DATA.length - 1]
  );

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#070c18] relative transition-colors duration-500 font-poppins overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="absolute w-[600px] h-[600px] bg-orange-400/10 dark:bg-orange-600/15 blur-[160px] rounded-full -top-10 -left-20 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 dark:bg-yellow-500/15 blur-[160px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Academic Impact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Real Student Outcomes.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Measured in Data.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
            Over 150,000 engineering students across 500+ Indian universities have mastered hands-on deeptech architectures. Explore real delivery metrics below.
          </p>

          {/* Tab Navigation */}
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-200/80 dark:bg-gray-800/80 border border-gray-300/80 dark:border-gray-700 mt-8 text-xs font-semibold shadow-inner">
            <button
              onClick={() => setActiveTab('tracks')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'tracks'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-500'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Track Adoption &amp; Hours</span>
            </button>

            <button
              onClick={() => setActiveTab('growth')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'growth'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-500'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>5-Year Growth Curve</span>
            </button>

            <button
              onClick={() => setActiveTab('quality')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'quality'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-500'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Quality &amp; Ratings</span>
            </button>
          </div>
        </div>

        {/* Dynamic Analytics Board */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-orange-200/80 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* VIEW 1: Track Adoption & Practical Hours */}
            {activeTab === 'tracks' && (
              <motion.div
                key="tracks-view"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: appleEase }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Interactive Animated Bar Chart */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Top Domains by Student Enrollment
                    </span>
                    <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                      Hover to Inspect
                    </span>
                  </div>

                  <div className="space-y-4 pt-2">
                    {TRACK_METRICS.map((track) => {
                      const isHovered = hoveredTrack?.id === track.id;
                      return (
                        <div
                          key={track.id}
                          onMouseEnter={() => setHoveredTrack(track)}
                          className={`p-3 rounded-2xl cursor-pointer transition-all duration-300 border ${
                            isHovered
                              ? 'bg-orange-50/80 dark:bg-orange-950/30 border-orange-300 dark:border-orange-500/50 shadow-md translate-x-1'
                              : 'bg-white/60 dark:bg-gray-900/40 border-gray-200/60 dark:border-gray-800'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-semibold mb-2">
                            <span className="text-gray-900 dark:text-white font-medium">
                              {track.name}
                            </span>
                            <span className="text-orange-600 dark:text-orange-400 font-bold">
                              {track.studentsTrained.toLocaleString()} Students
                            </span>
                          </div>

                          <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-0.5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${track.ratingPercent}%` }}
                              transition={{ duration: 0.8, ease: appleEase }}
                              className={`h-full rounded-full bg-gradient-to-r ${track.color}`}
                            />
                          </div>

                          <div className="flex items-center justify-between mt-2 text-[10px] text-gray-500 dark:text-gray-400">
                            <span>{track.collegesDelivered} Universities Delivered</span>
                            <span>{track.practicalLabs} Hands-on Labs</span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              {track.satisfactionScore}% Satisfaction
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Selected Track Deep Dive Card */}
                {hoveredTrack && (
                  <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent border border-orange-200/80 dark:border-orange-500/30 shadow-xl">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/80 px-2.5 py-1 rounded-full">
                      Domain Spotlight
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white mt-3 mb-2">
                      {hoveredTrack.name}
                    </h3>

                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-poppins">
                      Engineered for high-throughput institutional bootcamps with 100% cloud-hosted GPU runtime environments and real student portfolio deliverables.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800">
                        <span className="text-[10px] text-gray-400 uppercase font-semibold">Trained</span>
                        <p className="text-lg font-bold font-serif text-gray-900 dark:text-white mt-0.5">
                          {hoveredTrack.studentsTrained.toLocaleString()}+
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800">
                        <span className="text-[10px] text-gray-400 uppercase font-semibold">Universities</span>
                        <p className="text-lg font-bold font-serif text-gray-900 dark:text-white mt-0.5">
                          {hoveredTrack.collegesDelivered}+
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800">
                        <span className="text-[10px] text-gray-400 uppercase font-semibold">Practical Labs</span>
                        <p className="text-lg font-bold font-serif text-gray-900 dark:text-white mt-0.5">
                          {hoveredTrack.practicalLabs} Modules
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800">
                        <span className="text-[10px] text-gray-400 uppercase font-semibold">Student Rating</span>
                        <p className="text-lg font-bold font-serif text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {hoveredTrack.satisfactionScore}%
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/syllabus/${hoveredTrack.id}`}
                      className="w-full py-3 px-4 rounded-xl btn-brand-gradient text-white font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Check {hoveredTrack.name} Syllabus</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            )}

            {/* VIEW 2: 5-Year Growth Curve Line Chart */}
            {activeTab === 'growth' && (
              <motion.div
                key="growth-view"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: appleEase }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: SVG Curved Line Chart */}
                <div className="lg:col-span-8 p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Pan-India Student Certification Growth (2021 - 2026)
                    </span>
                    <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                      Hover Points to Inspect
                    </span>
                  </div>

                  <div className="relative w-full h-64 sm:h-72">
                    <svg viewBox="0 0 680 230" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F97316" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="growthStroke" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#FBC02D" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="40" y1="30" x2="640" y2="30" stroke="currentColor" strokeOpacity="0.08" />
                      <line x1="40" y1="80" x2="640" y2="80" stroke="currentColor" strokeOpacity="0.08" />
                      <line x1="40" y1="130" x2="640" y2="130" stroke="currentColor" strokeOpacity="0.08" />
                      <line x1="40" y1="180" x2="640" y2="180" stroke="currentColor" strokeOpacity="0.08" />

                      {/* Area Fill */}
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        d="M 50 190 Q 190 155, 330 110 T 610 28 L 610 210 L 50 210 Z"
                        fill="url(#growthArea)"
                      />

                      {/* Curve Stroke */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: appleEase }}
                        d="M 50 190 Q 190 155, 330 110 T 610 28"
                        fill="none"
                        stroke="url(#growthStroke)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />

                      {/* Data Points */}
                      {GROWTH_DATA.map((pt) => {
                        const isHovered = hoveredGrowthPoint?.year === pt.year;
                        return (
                          <g
                            key={pt.year}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredGrowthPoint(pt)}
                          >
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={isHovered ? 8 : 5}
                              className="fill-orange-500 stroke-white dark:stroke-gray-900 transition-all duration-300"
                              strokeWidth="3"
                            />
                            <text
                              x={pt.x}
                              y={225}
                              textAnchor="middle"
                              className="text-[11px] fill-gray-500 font-semibold"
                            >
                              {pt.year}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Right: Year Details Spotlight */}
                {hoveredGrowthPoint && (
                  <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-transparent border border-orange-200/80 dark:border-orange-500/30 shadow-xl">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/80 px-2.5 py-1 rounded-full">
                      Annual Benchmark
                    </span>

                    <h3 className="text-3xl font-bold font-serif text-gray-900 dark:text-white mt-3 mb-1">
                      Year {hoveredGrowthPoint.year}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                      Cumulative Institutional Milestones
                    </p>

                    <div className="space-y-3.5 mb-6">
                      <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Students Trained</span>
                        <span className="text-base font-bold text-orange-600 dark:text-orange-400">
                          {hoveredGrowthPoint.students.toLocaleString()}+
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Partner Colleges</span>
                        <span className="text-base font-bold text-gray-900 dark:text-white">
                          {hoveredGrowthPoint.colleges}+
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Industry Hiring Partners</span>
                        <span className="text-base font-bold text-gray-900 dark:text-white">
                          280+ MNCs &amp; Startups
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/proposal"
                      className="w-full py-3 px-4 rounded-xl btn-brand-gradient text-white font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Host Workshop at Your College</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            )}

            {/* VIEW 3: Quality & Ratings Donut */}
            {activeTab === 'quality' && (
              <motion.div
                key="quality-view"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: appleEase }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Donut Radial Gauge */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-white/70 dark:bg-gray-900/50 rounded-2xl border border-gray-200/80 dark:border-gray-800">
                  <div className="relative w-52 h-52 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="104"
                        cy="104"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="18"
                        className="text-gray-100 dark:text-gray-800"
                        fill="transparent"
                      />
                      <motion.circle
                        initial={{ strokeDashoffset: 553 }}
                        animate={{ strokeDashoffset: 553 * (1 - 0.984) }}
                        transition={{ duration: 1.4, ease: appleEase }}
                        cx="104"
                        cy="104"
                        r="88"
                        stroke="url(#qualityGradient)"
                        strokeWidth="18"
                        strokeDasharray="553"
                        strokeLinecap="round"
                        fill="transparent"
                      />
                      <defs>
                        <linearGradient id="qualityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FBC02D" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute text-center">
                      <span className="text-4xl font-extrabold font-serif text-gray-900 dark:text-white">
                        98.4%
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">
                        Average Approval
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4 max-w-xs">
                    Aggregated from post-workshop audits submitted by students and faculty coordinators.
                  </p>
                </div>

                {/* Right: Key Quality Pillars */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                      80% Hands-On Coding Ratio
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      Every theoretical concept is directly tested through interactive VS Code labs and terminal pipelines.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                      AICTE &amp; ISO Accreditations
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      All participant and winner certificates are digitally verifiable with tamper-proof QR verification.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mb-3">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                      100% Industry Capstone Projects
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      Students build deployable GitHub repositories ready for placement drives and technical interviews.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                      1:25 Mentor-Student Ratio
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      Dedicated teaching assistants resolve syntax and setup bugs in real time right at the lab workbench.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LiveWorkshopAnalytics;
