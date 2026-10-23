import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, UserPlus, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: BookOpen,
    title: 'Choose Deeptech Domain',
    description:
      'Select from AI, GenAI, Agentic AI, FDE, MERN, Python FS, Java FS, or AI Developer Tools.',
  },
  {
    icon: Calendar,
    title: 'Pick Workshop Duration',
    description:
      'Choose between 3-Day Fast-Track, 5-Day Comprehensive, or 6-Day Masterclass & FDP formats.',
  },
  {
    icon: UserPlus,
    title: 'Host or Register',
    description:
      'Departments submit quick proposals or students join scheduled open cohorts.',
  },
  {
    icon: Users,
    title: 'Live Hands-On Coding',
    description:
      'Daily practical labs with industry architects, cloud GPU environments, and zero PPT lectures.',
  },
  {
    icon: Award,
    title: 'Build Capstone & Get Certified',
    description:
      'Ship a live deployed capstone project and earn verified, placement-ready credentials.',
  },
];

const WorkshopProcess: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0b1120] relative transition-colors duration-300 font-poppins">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight mt-2">
            The Workshop{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Execution Process
            </span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
            A frictionless 5-step pathway from curriculum alignment to live capstone deployment.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-orange-300 dark:border-orange-800/80 ml-6 sm:ml-8 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Icon Bubble */}
              <div className="absolute left-[-21px] top-1.5 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white shadow-md ring-4 ring-white dark:ring-gray-900">
                <step.icon className="w-5 h-5" />
              </div>

              {/* Card */}
              <div className="glass-card p-6 rounded-2xl border border-orange-100 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                    Step 0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/syllabus"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl btn-brand-gradient text-white font-semibold text-sm shadow-md hover:shadow-orange-500/30 transition-all"
          >
            <span>Browse All 9 Tracks &amp; Syllabi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkshopProcess;
