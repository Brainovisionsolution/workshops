import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Hammer, Users, Target, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: BookOpen,
    title: 'Hands-on Skill Mastery',
    description: 'Build real-world projects in AI, GenAI, FDE, and Full Stack with industry datasets.',
  },
  {
    icon: Award,
    title: 'Recognized Certifications',
    description: 'Earn verified, industry and AICTE-aligned technical credentials for placements.',
  },
  {
    icon: Hammer,
    title: 'Production-Grade Projects',
    description: 'Deploy real apps, agents, and microservices live to cloud infrastructure.',
  },
  {
    icon: Users,
    title: 'Frontier Tech Mentors',
    description: 'Direct mentorship from senior engineers at top product companies and AI labs.',
  },
  {
    icon: Target,
    title: 'Campus Placement Focus',
    description: 'Target high-paying deeptech roles with tailored interview prep and portfolios.',
  },
  {
    icon: Zap,
    title: 'Fast-Track 3/5/6-Day Formats',
    description: 'High-velocity intensive curriculum designed to fit academic college calendars.',
  },
];

const WorkshopBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0b1120] relative transition-colors duration-300 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Why Brainovision?
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight mt-2">
            Why Colleges Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Our Workshops
            </span>
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 font-poppins mt-3 max-w-2xl mx-auto">
            Practical, mentor-driven, and designed to launch students into modern engineering careers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl text-center border border-orange-100/80 dark:border-gray-800 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-poppins leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block p-8 sm:p-10 rounded-3xl border border-orange-200 dark:border-gray-800 shadow-xl max-w-2xl">
            <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">
              Transform Your Engineering Department
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6">
              Join 500+ top engineering institutions across India with certified workshops.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/syllabus"
                className="btn-brand-gradient text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md"
              >
                Inspect Sample Syllabi
              </Link>
              <Link
                to="/proposal"
                className="px-6 py-3 rounded-xl border border-orange-300 dark:border-gray-700 text-orange-600 dark:text-orange-400 font-semibold text-xs sm:text-sm hover:bg-orange-50 dark:hover:bg-orange-950/40"
              >
                Host Proposal for College
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopBenefits;
