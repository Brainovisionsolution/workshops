import React from 'react';
import { Monitor, MapPin, Globe, GraduationCap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParticipationModes: React.FC = () => {
  const modes = [
    {
      icon: MapPin,
      title: 'Offline College Workshops',
      badge: 'Most Popular for Colleges',
      badgeColor: 'bg-orange-500 text-white',
      description: '100% in-person, hands-on training conducted directly at your college computer labs or seminar halls.',
      features: [
        '2-Day AI Film Making & GenAI Cinema',
        '1-Day Autonomous Robotics & Hardware Kits',
        'In-Person Industry Mentors & Code Review',
        'Physical AICTE-Recognized Certificates'
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-orange-50/80 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      link: '/syllabus/ai-film-making',
      linkText: 'Check Offline Workshops'
    },
    {
      icon: GraduationCap,
      title: 'On-Campus Mega Hackathons',
      badge: 'Institution Bookings',
      badgeColor: 'bg-amber-500 text-white',
      description: 'Exclusive 1, 2, 3, or 5-day hack-bootcamps hosted right inside your college campus with live jury evaluation.',
      features: [
        'Curriculum Tailored to Department (CSE/ECE/IT)',
        'Stage Presentations & Campus Grand Prix',
        'Internship & Placement Corner Opportunities',
        'Faculty Development Programs (FDP)'
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/20',
      borderColor: 'border-amber-200 dark:border-amber-800',
      link: '/proposal',
      linkText: 'Host On Your Campus'
    },
    {
      icon: Globe,
      title: 'Hybrid Blended Cohorts',
      badge: 'Flexible Timing',
      badgeColor: 'bg-purple-600 text-white',
      description: 'Combine live interactive online theory lectures with scheduled in-person lab mentoring and offline project defense.',
      features: [
        'Virtual Live Streaming + Offline Lab Support',
        'Recorded Session Archives & Resource Vault',
        'Weekend Lab Hackathons',
        'Dual Mentor Assistance'
      ],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50/80 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      link: '/tracks',
      linkText: 'Explore Hybrid Tracks'
    },
    {
      icon: Monitor,
      title: 'Virtual Live Streaming',
      badge: 'Global Access',
      badgeColor: 'bg-blue-600 text-white',
      description: 'Join from anywhere with high-definition live coding, cloud GPU sandbox environments, and real-time chat debuggers.',
      features: [
        'Live Code-Along Cloud Workspaces',
        'Instant Interactive Q&A with Mentors',
        'Breakout Rooms for Team Sprints',
        'Digital Verifiable Credentials'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50/80 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      link: '/syllabus',
      linkText: 'View All Online Tracks'
    }
  ];

  return (
    <section id="participation-modes" className="py-24 bg-white dark:bg-[#0b1120] relative overflow-hidden transition-colors duration-500 font-poppins">
      {/* Subtle Glow */}
      <div className="absolute w-[600px] h-[600px] bg-orange-400/10 dark:bg-orange-600/10 blur-[180px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flexible Workshop Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Modes of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 dark:from-yellow-400 dark:to-orange-400">
              Workshop Delivery
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
            Whether your college prefers an energetic in-person campus hackathon, an offline hardware robotics lab, or a seamless hybrid sprint — Brainovision delivers end-to-end curriculum excellence with physical kits and industry experts.
          </p>
        </div>

        {/* Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {modes.map((mode, index) => (
            <div
              key={index}
              className={`group relative glass-card rounded-3xl p-6 sm:p-7 border ${mode.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${mode.color} rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <mode.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm ${mode.badgeColor}`}>
                    {mode.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold font-serif text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {mode.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {mode.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {mode.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs text-gray-700 dark:text-gray-300 gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <Link
                to={mode.link}
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 font-semibold text-xs transition-all text-center mt-2 group/link"
              >
                <span>{mode.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipationModes;