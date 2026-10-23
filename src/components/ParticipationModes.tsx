import React from 'react';
import { Monitor, MapPin, Globe, GraduationCap } from 'lucide-react';

const ParticipationModes: React.FC = () => {
  const modes = [
    {
      icon: Monitor,
      title: 'Online',
      description: 'Join from anywhere in the world with our interactive virtual platform and live streaming.',
      features: ['Live Interactive Sessions', 'Screen Sharing', 'Breakout Rooms', 'Digital Certificates'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: MapPin,
      title: 'Offline',
      description: 'Experience in-person collaboration at our premium venues with hands-on activities.',
      features: ['Face-to-Face Networking', 'Physical Resources', 'Team Activities', 'Venue Facilities'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Globe,
      title: 'Hybrid',
      description: 'Best of both worlds - combine online flexibility with offline engagement opportunities.',
      features: ['Flexible Attendance', 'Multi-format Content', 'Global Reach', 'Local Meetups'],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: GraduationCap,
      title: 'Campus Events',
      description: 'Exclusive events hosted directly at your college campus with customized content.',
      features: ['Campus Integration', 'Student Focused', 'Local Mentors', 'College Credits'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  return (
    <section id="participation-modes" className="py-20 bg-background-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Modes of <span className="text-primary-yellow">Participation</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Choose the participation mode that best fits your schedule, location, and learning preferences. 
            We offer flexible options to ensure everyone can join our community.
          </p>
        </div>

        {/* Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modes.map((mode, index) => (
            <div
              key={index}
              className="group relative bg-background-white dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${mode.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${mode.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <mode.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-3 group-hover:text-primary-orange transition-colors duration-200">
                  {mode.title}
                </h3>
                <p className="text-text-gray dark:text-dark-muted leading-relaxed mb-6">
                  {mode.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {mode.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-gray dark:text-dark-muted">
                      <div className="w-2 h-2 bg-primary-yellow rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-yellow/30 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        

       
      </div>
    </section>
  );
};

export default ParticipationModes;