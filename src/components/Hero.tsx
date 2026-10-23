'use client';

import React, { useState } from 'react';
import { ArrowRight, BookOpen, Building, CheckCircle2, ShieldCheck, Terminal, Sparkles, Layers, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const quickTracks = [
  { id: 'ai-film-making', name: 'AI Film Making (Offline)', badge: '2-Day Workshop' },
  { id: 'robotics', name: 'Robotics & Hardware (Offline)', badge: '1-Day Lab' },
  { id: 'genai', name: 'GenAI & LLMs', badge: 'High Demand' },
  { id: 'agentic-ai', name: 'Agentic AI & Swarms', badge: 'Next-Gen' },
  { id: 'fde', name: 'Forward Deployed Eng', badge: 'Enterprise' },
  { id: 'mern-stack', name: 'MERN Stack' },
  { id: 'python-fs', name: 'Python Full Stack' },
  { id: 'ai-tools', name: 'AI Tools & Cursor' },
];

const durationPreviews = {
  '1day': {
    label: '1-Day Hardware Lab (Offline)',
    hours: '8 Hours (Single-Day Sprint)',
    focus: 'Microcontrollers, Sonar Sensors & Embedded C',
    capstone: 'Assemble & program an autonomous obstacle-avoiding robot on campus',
  },
  '2days': {
    label: '2-Day Studio Bootcamp (Offline)',
    hours: '14 Hours (2-Day Sprint)',
    focus: 'GenAI Film Production, ElevenLabs & Runway Gen-3',
    capstone: 'Direct, voice-act, score & screen a 4K AI short film in college auditorium',
  },
  '3days': {
    label: '3-Day Fast Track',
    hours: '18 Hours',
    focus: 'Rapid MVP & Core Model Integration',
    capstone: 'Deploy a live functional prototype with working inference API',
  },
  '5days': {
    label: '5-Day Comprehensive',
    hours: '30 Hours',
    focus: 'Production Architecture, Docker & Tests',
    capstone: 'Full-stack enterprise application with automated CI/CD pipeline',
  },
  '6days': {
    label: '6-Day Masterclass & FDP',
    hours: '36 Hours',
    focus: 'High-Throughput Serving & Enterprise Defense',
    capstone: 'Multi-tier distributed cloud deployment with industry jury evaluation',
  },
};

const Hero: React.FC = () => {
  const [activeDuration, setActiveDuration] = useState<'1day' | '2days' | '3days' | '5days' | '6days'>('2days');

  // Apple-grade spring easing
  const appleEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-white dark:bg-[#0b1120] overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-12 transition-colors duration-500 font-poppins">
      {/* Subtle Ambient Light Gradients */}
      <div className="absolute w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-gradient-to-tr from-orange-400/10 via-amber-400/10 to-transparent dark:from-orange-600/15 dark:via-yellow-500/10 blur-[140px] md:blur-[220px] rounded-full -top-40 -left-40 pointer-events-none" />
      <div className="absolute w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-bl from-yellow-400/10 via-orange-500/10 to-transparent dark:from-yellow-500/15 dark:via-orange-600/10 blur-[130px] md:blur-[200px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Editorial Content */}
          <motion.div
            className="w-full lg:w-7/12 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
          >
            {/* Top Minimalist Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 text-orange-600 dark:text-orange-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>National Deeptech Skilling &amp; Curriculum Initiative</span>
            </div>

            {/* Apple-Style Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight leading-[1.12] text-gray-900 dark:text-white mb-6">
              Master Offline Workshops, AI Cinema &amp; Deeptech in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-600 dark:from-yellow-400 dark:via-orange-400 dark:to-amber-400">
                1 to 6 Days.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-poppins leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Hands-on offline college workshops and accredited technical syllabi: from 1-Day Autonomous Robotics hardware labs and 2-Day AI Film Making bootcamps to full-stack engineering sprints across India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10">
              <Link to="/syllabus" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-brand-gradient text-white font-semibold text-sm shadow-[0_10px_25px_-5px_rgba(249,115,22,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(249,115,22,0.5)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Check All Workshop Syllabi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link to="/proposal" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/80 hover:border-orange-400 dark:hover:border-orange-500 text-gray-800 dark:text-gray-200 font-semibold text-sm shadow-sm hover:shadow-md active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                  <Building className="w-4 h-4 text-orange-500" />
                  <span>Request Institutional Proposal</span>
                </button>
              </Link>
            </div>

            {/* Quick Track Access Chips (No Emojis) */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Direct Syllabus Previews:
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {quickTracks.map((qt) => (
                  <Link
                    key={qt.id}
                    to={`/syllabus/${qt.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-gray-50 dark:bg-gray-800/60 hover:bg-orange-50 dark:hover:bg-orange-950/40 border border-gray-200/80 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 text-gray-700 dark:text-gray-300 transition-all duration-200"
                  >
                    <span>{qt.name}</span>
                    {qt.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange-100 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300 font-semibold">
                        {qt.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Apple-Style Interactive Lab & Curriculum Stage */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: appleEase }}
          >
            <div className="relative glass-card rounded-3xl p-6 sm:p-7 border border-orange-200/70 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
              {/* Header Bar: Live Interactive Duration Selector */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center shadow-sm">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                      Curriculum Stage
                    </h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Sample Format Switcher</p>
                  </div>
                </div>

                {/* Duration Pills */}
                <div className="flex p-1 rounded-xl bg-gray-100 dark:bg-gray-800/90 text-xs font-semibold gap-0.5">
                  {(['1day', '2days', '3days', '5days', '6days'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setActiveDuration(d)}
                      className={`px-2.5 py-1 rounded-lg transition-all duration-200 text-[11px] ${
                        activeDuration === d
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-sm font-bold'
                          : 'text-gray-600 dark:text-gray-400 hover:text-orange-500'
                      }`}
                    >
                      {d === '1day' ? '1D' : d === '2days' ? '2D' : d === '3days' ? '3D' : d === '5days' ? '5D' : '6D'}
                    </button>
                  ))}
                </div>
              </div>

              {/* High-Resolution Professional Image of Engineers & Students in Modern Workshop */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4 shadow-inner border border-gray-100 dark:border-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional hands-on tech workshop at Brainovision"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Floating Micro Badge in Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[11px] font-semibold text-gray-800 dark:text-white shadow-md border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>AICTE &amp; University Partnered</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  <p className="font-semibold text-white/95 text-xs sm:text-sm">
                    Interactive Hands-On Deeptech Labs
                  </p>
                  <p className="text-[11px] text-white/70">
                    Real coding on cloud GPU clusters with zero slide decks
                  </p>
                </div>
              </div>

              {/* Dynamic Duration Summary Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDuration}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: appleEase }}
                  className="p-3.5 rounded-xl bg-orange-50/80 dark:bg-gray-800/60 border border-orange-100 dark:border-gray-700 text-xs mb-4"
                >
                  <div className="flex items-center justify-between font-bold text-gray-900 dark:text-white mb-1">
                    <span className="text-orange-600 dark:text-orange-400">
                      {durationPreviews[activeDuration].label}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">
                      {durationPreviews[activeDuration].hours}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                    {durationPreviews[activeDuration].focus}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Capstone: {durationPreviews[activeDuration].capstone}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Direct Link to Inspect All 9 Syllabi */}
              <Link
                to="/syllabus"
                className="w-full py-2.5 px-4 rounded-xl btn-brand-gradient text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-md hover:shadow-orange-500/25 transition-all"
              >
                <span>Inspect Full Day-by-Day Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Apple-Style Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-200/60 dark:border-gray-800">
          <div className="text-center p-4 rounded-2xl bg-white/60 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-800 shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-yellow-500 dark:text-yellow-400 font-poppins">
              150,000+
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              Students Trained
            </p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-white/60 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-800 shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-orange-500 dark:text-orange-400 font-poppins">
              500+
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              Colleges Partnered
            </p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-white/60 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-800 shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-yellow-500 dark:text-yellow-400 font-poppins">
              1,000+
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              Certified Workshops
            </p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-white/60 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-800 shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-500 dark:text-amber-400 font-poppins">
              96.8%
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              Satisfaction Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
