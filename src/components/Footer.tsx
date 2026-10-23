import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
  Heart,
  BookOpen,
  Building,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const techTracks = [
    { name: 'Generative AI & LLMs', path: '/syllabus/genai' },
    { name: 'Agentic AI & Swarms', path: '/syllabus/agentic-ai' },
    { name: 'Forward Deployed Eng (FDE)', path: '/syllabus/fde' },
    { name: 'MERN Stack Engineering', path: '/syllabus/mern-stack' },
    { name: 'Python Full Stack (FastAPI)', path: '/syllabus/python-fs' },
    { name: 'Java Full Stack & Microservices', path: '/syllabus/jfs' },
    { name: 'AI Developer Tools & Cursor', path: '/syllabus/ai-tools' },
    { name: 'Web Dev with AI Tools', path: '/syllabus/web-dev-ai' },
    { name: 'Artificial Intelligence & ML', path: '/syllabus/ai' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Check All 9 Syllabi', path: '/syllabus' },
    { name: 'Host Workshop Proposal', path: '/proposal' },
    { name: 'Partner Colleges & Footprint', path: '/#trusted-colleges' },
    { name: 'Student & Faculty Reviews', path: '/#testimonials' },
  ];

  return (
    <footer className="bg-white dark:bg-[#070b14] border-t border-gray-200/80 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-poppins pt-16 pb-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-200/80 dark:border-gray-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/bovyellow.png"
                alt="Brainovision Technologies Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-poppins leading-relaxed mb-6">
              Brainovision Technologies is India’s premier deeptech training organization, empowering 150,000+ students and 500+ engineering colleges in AI, GenAI, Agentic AI, FDE, and Full Stack development through hands-on 3-day, 5-day, and 6-day programs.
            </p>

            <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>contact@brainovision.in / partnerships@brainovision.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>+91 98765 43210 / +91 91234 56789</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>Hyderabad &amp; Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: 9 Tech Tracks */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-4 font-poppins flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Check Syllabus by Track</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {techTracks.map((track) => (
                <Link
                  key={track.path}
                  to={track.path}
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-yellow-400 transition-colors py-1 flex items-center gap-1"
                >
                  <span className="text-orange-500 text-[10px]">•</span>
                  <span>{track.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4 font-poppins">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-yellow-400 transition-colors block py-0.5"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-yellow-400 transition-colors block py-0.5"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: College Proposal CTA */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4 font-poppins">
              For Colleges
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              Book a custom 3, 5, or 6-day certified workshop or FDP for your department.
            </p>
            <Link
              to="/proposal"
              className="inline-flex items-center gap-1.5 w-full justify-center px-4 py-2.5 rounded-xl btn-brand-gradient text-white text-xs font-semibold shadow-md active:scale-95 transition-all"
            >
              <Building className="w-3.5 h-3.5" />
              <span>Host Proposal</span>
            </Link>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Brainovision Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with precision for engineering colleges across India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
