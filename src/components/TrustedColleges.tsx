import React from 'react';
import { Building, Users, Award, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const appleEase = [0.16, 1, 0.3, 1];

interface CollegeLogo {
  id: string;
  src: string;
  alt: string;
}

const COLLEGE_LOGOS: CollegeLogo[] = [
  { id: 'agarsen', src: '/colleges/agarsen.png', alt: 'Partner College Logo' },
  { id: 'aditya', src: '/colleges/aditya.png', alt: 'Partner University Logo' },
  { id: 'aitm', src: '/colleges/aitm.png', alt: 'Partner Technical Institute Logo' },
  { id: 'ambedkar', src: '/colleges/ambedkar.png', alt: 'Partner Institute of Technology Logo' },
  { id: 'amc', src: '/colleges/amc.png', alt: 'Partner Education Group Logo' },
];

const TrustedColleges: React.FC = () => {
  const stats = [
    {
      icon: Building,
      value: '500+',
      label: 'Partner Colleges & Universities',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      value: '150,000+',
      label: 'Engineering Students Upskilled',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: Award,
      value: '1,000+',
      label: 'Hands-On Bootcamps Delivered',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      value: '98.4%',
      label: 'Institutional Approval Score',
      color: 'from-orange-500 to-amber-600',
    },
  ];

  // Quadruple array for infinite, seamless marquee scroll with 0 lag
  const marqueeRow1 = [...COLLEGE_LOGOS, ...COLLEGE_LOGOS, ...COLLEGE_LOGOS, ...COLLEGE_LOGOS];
  const marqueeRow2 = [...COLLEGE_LOGOS.slice().reverse(), ...COLLEGE_LOGOS.slice().reverse(), ...COLLEGE_LOGOS.slice().reverse(), ...COLLEGE_LOGOS.slice().reverse()];

  return (
    <section id="colleges" className="py-24 bg-white dark:bg-[#0b1120] relative transition-colors duration-500 font-poppins overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-400/10 dark:bg-orange-600/15 blur-[160px] rounded-full top-10 left-10 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 dark:bg-yellow-500/15 blur-[160px] rounded-full bottom-10 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pan-India Academic Footprint</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              500+ Engineering Colleges
            </span>
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
            Brainovision collaborates directly with university leadership, deans, and academic departments across India to deliver accredited deeptech bootcamps and faculty development programs.
          </p>
        </div>

        {/* Institutional Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: appleEase }}
              className="glass-card p-6 rounded-3xl border border-orange-100/90 dark:border-white/10 text-center shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md text-white group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-serif tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ZERO-LAG HARDWARE-ACCELERATED LOGO MARQUEE SHOWCASE (LOGOS ONLY) */}
      <div className="relative w-full overflow-hidden py-4 space-y-6">
        {/* Left & Right Soft Blur Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white dark:from-[#0b1120] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white dark:from-[#0b1120] to-transparent z-20" />

        {/* Row 1: Leftward Drift */}
        <div className="animate-marquee-left flex gap-5 sm:gap-8 items-center">
          {marqueeRow1.map((logo, idx) => (
            <div
              key={`row1-${logo.id}-${idx}`}
              className="flex-shrink-0 w-48 sm:w-56 h-24 sm:h-28 rounded-2xl bg-white/95 dark:bg-white/95 border border-gray-200/90 dark:border-white/20 shadow-md hover:shadow-xl hover:border-orange-500 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center p-4 cursor-pointer group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 sm:max-h-16 w-auto max-w-[85%] object-contain filter group-hover:brightness-105 transition-all duration-300 select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Rightward Drift */}
        <div className="animate-marquee-right flex gap-5 sm:gap-8 items-center">
          {marqueeRow2.map((logo, idx) => (
            <div
              key={`row2-${logo.id}-${idx}`}
              className="flex-shrink-0 w-48 sm:w-56 h-24 sm:h-28 rounded-2xl bg-white/95 dark:bg-white/95 border border-gray-200/90 dark:border-white/20 shadow-md hover:shadow-xl hover:border-orange-500 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center p-4 cursor-pointer group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 sm:max-h-16 w-auto max-w-[85%] object-contain filter group-hover:brightness-105 transition-all duration-300 select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Institutional CTA */}
      <div className="mt-14 text-center px-4 relative z-10">
        <Link
          to="/proposal"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl btn-brand-gradient text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
        >
          <Building className="w-4 h-4" />
          <span>Host a Brainovision Workshop at Your College</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default TrustedColleges;