import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Lightbulb, Trophy, Star, Network, Rocket } from 'lucide-react';
 import { Link } from 'react-router-dom';
const benefits = [
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work with diverse, talented individuals and build lasting professional relationships.',
  },
  {
    icon: Lightbulb,
    title: 'Mentor Support',
    description: 'Get guidance from industry experts who help you navigate challenges and optimize solutions.',
  },
  {
    icon: Trophy,
    title: 'Exciting Prizes',
    description: 'Win cash prizes, internships, job offers, and exclusive opportunities from top companies.',
  },
  {
    icon: Star,
    title: 'Recognition',
    description: 'Gain recognition in the tech community and build your reputation as an innovator.',
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'Connect with recruiters, entrepreneurs, and fellow developers from across the country.',
  },
  {
    icon: Rocket,
    title: 'Career Boost',
    description: 'Fast-track your career with real project experience and industry connections.',
  }
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const motionValue = useMemo(() => ({ current: 0 }), []);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        motionValue.current += Math.ceil(value / 50);
        if (motionValue.current >= value) {
          motionValue.current = value;
          clearInterval(interval);
        }
        setDisplayValue(motionValue.current);
      }, 20);
    }
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className="text-4xl font-bold mb-2">
      {displayValue.toLocaleString()}
    </div>
  );
};

const HackathonBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-background-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-charcoal dark:text-dark-text">
            Why Join Our <span className="text-primary-orange">Hackathons?</span>
          </h2>
          <p className="text-lg mt-4 text-text-gray dark:text-dark-muted max-w-2xl mx-auto">
            Our hackathons aren’t just competitions—they’re platforms for collaboration, learning, innovation, and launching your career.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-primary-yellow flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary-orange opacity-30 animate-ping"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-text-charcoal dark:text-dark-text mb-1 group-hover:text-primary-orange transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-text-gray dark:text-dark-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            <span className="flex items-center justify-center space-x-2">
              <Trophy className="w-5 h-5" />
              <span>Join Next Hackathon</span>
            </span>
          </motion.button>
        </div>
        
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
           

<Link to="/proposal">
  <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-xl hover:brightness-110 transition">
    Get Your Proposal
  </button>
</Link>

          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HackathonBenefits;