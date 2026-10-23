import React, { useState, useEffect } from 'react';
import { Users, Calendar, GraduationCap, Award, Building, Globe, TrendingUp, Star } from 'lucide-react';

const ImpactCounters: React.FC = () => {
  const [counters, setCounters] = useState({
    students: 0,
    events: 0,
    colleges: 0,
    mentors: 0,
    companies: 0,
    countries: 0,
    projects: 0,
    satisfaction: 0
  });

  const finalValues = {
    students: 50000,
    events: 1000,
    colleges: 200,
    mentors: 500,
    companies: 150,
    countries: 25,
    projects: 2500,
    satisfaction: 4.9
  };

  const stats = [
    {
      key: 'students',
      icon: Users,
      label: 'Students Trained',
      value: counters.students,
      suffix: '+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'events',
      icon: Calendar,
      label: 'Events Conducted',
      value: counters.events,
      suffix: '+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      key: 'colleges',
      icon: GraduationCap,
      label: 'Partner Colleges',
      value: counters.colleges,
      suffix: '+',
      color: 'from-primary-yellow to-primary-orange'
    },
    {
      key: 'mentors',
      icon: Award,
      label: 'Expert Mentors',
      value: counters.mentors,
      suffix: '+',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      key: 'companies',
      icon: Building,
      label: 'Hiring Partners',
      value: counters.companies,
      suffix: '+',
      color: 'from-red-500 to-pink-500'
    },
    {
      key: 'countries',
      icon: Globe,
      label: 'Countries Reached',
      value: counters.countries,
      suffix: '+',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      key: 'projects',
      icon: TrendingUp,
      label: 'Projects Built',
      value: counters.projects,
      suffix: '+',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      key: 'satisfaction',
      icon: Star,
      label: 'Satisfaction Rating',
      value: counters.satisfaction,
      suffix: '/5',
      color: 'from-yellow-500 to-orange-500',
      decimal: true
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        currentValue += increment;
        
        if (step >= steps) {
          currentValue = finalValue;
          clearInterval(intervals.find(interval => interval === this));
        }

        setCounters(prev => ({
          ...prev,
          [key]: key === 'satisfaction' ? Number(currentValue.toFixed(1)) : Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const formatValue = (value: number, decimal: boolean = false) => {
    if (decimal) {
      return value.toFixed(1);
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  return (
    <section id="impact-counters" className="py-20 bg-background-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Our <span className="text-primary-yellow">Impact</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Numbers that tell our story of empowering students, fostering innovation, 
            and building the next generation of tech leaders across the globe.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="group text-center transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>

              {/* Counter */}
              <div className="text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-2">
                {formatValue(stat.value, stat.decimal)}{stat.suffix}
              </div>

              {/* Label */}
              <div className="text-text-gray dark:text-dark-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Impact Breakdown */}
        <div className="bg-background-pale dark:bg-dark-card rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-charcoal dark:text-dark-text mb-4">
              Impact Breakdown
            </h3>
            <p className="text-lg text-text-gray dark:text-dark-muted">
              Detailed view of how we're making a difference in the tech education landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Success */}
            <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-text-charcoal dark:text-dark-text">
                  Student Success
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Job Placements</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Skill Improvement</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Salary Increase</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">78%</span>
                </div>
              </div>
            </div>

            {/* Event Quality */}
            <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-text-charcoal dark:text-dark-text">
                  Event Quality
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Completion Rate</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Repeat Attendance</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">76%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Referral Rate</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">89%</span>
                </div>
              </div>
            </div>

            {/* Global Reach */}
            <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-text-charcoal dark:text-dark-text">
                  Global Reach
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Online Events</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">75%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">International Students</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray dark:text-dark-muted">Remote Mentoring</span>
                  <span className="font-semibold text-text-charcoal dark:text-dark-text">68%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Growth */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-8 text-center">
            Our Growth Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-yellow/30"></div>
            <div className="space-y-12">
              {[
                { year: '2020', milestone: 'Platform Launch', description: 'Started with 100 students and 5 workshops' },
                { year: '2021', milestone: 'First Hackathon', description: 'Organized our first major hackathon with 500 participants' },
                { year: '2022', milestone: 'College Partnerships', description: 'Partnered with 50+ colleges across India' },
                { year: '2023', milestone: 'Global Expansion', description: 'Reached 25 countries with online events' },
                { year: '2024', milestone: 'Major Milestone', description: 'Achieved 50K+ students and 1000+ events' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-background-white dark:bg-dark-card rounded-2xl p-6 shadow-lg">
                      <div className="text-primary-orange font-bold text-lg mb-2">{item.year}</div>
                      <div className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-2">{item.milestone}</div>
                      <div className="text-text-gray dark:text-dark-muted">{item.description}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-yellow rounded-full border-4 border-background-white dark:border-dark-bg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-yellow to-primary-orange rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Growing Impact</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our community and help us reach even greater milestones together.
            </p>
            <button className="px-8 py-4 bg-white text-primary-orange font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;