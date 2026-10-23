import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, BookOpen, FileText, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSyllabusDropdownOpen, setIsSyllabusDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const syllabusTracks = [
    { name: 'AI Film Making (2-Day Offline)', path: '/syllabus/ai-film-making', tag: '2D Offline' },
    { name: 'Robotics & Hardware (1-Day Offline)', path: '/syllabus/robotics', tag: '1D Offline' },
    { name: 'Generative AI & LLMs', path: '/syllabus/genai', tag: 'High Demand' },
    { name: 'Agentic AI & Swarms', path: '/syllabus/agentic-ai', tag: 'Next-Gen' },
    { name: 'Forward Deployed Eng (FDE)', path: '/syllabus/fde', tag: 'Enterprise' },
    { name: 'MERN Stack Engineering', path: '/syllabus/mern-stack', tag: 'Core' },
    { name: 'Python Full Stack (FastAPI)', path: '/syllabus/python-fs', tag: 'Popular' },
    { name: 'Java Full Stack & Microservices', path: '/syllabus/jfs', tag: 'Enterprise' },
    { name: 'AI Developer Tools & Cursor', path: '/syllabus/ai-tools', tag: '10x Speed' },
    { name: 'Web Dev with AI Tools', path: '/syllabus/web-dev-ai', tag: 'Modern' },
    { name: 'Artificial Intelligence & ML', path: '/syllabus/ai', tag: 'Foundation' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0b1120]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-gray-200/50 dark:border-white/10'
          : 'bg-white/70 dark:bg-[#0b1120]/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/bovyellow.png"
                alt="Brainovision Technologies Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link
              to="/"
              className={`transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-orange-600 dark:text-orange-400 font-semibold'
                  : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-yellow-400'
              }`}
            >
              Home
            </Link>

            {/* Check Syllabus Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSyllabusDropdownOpen(true)}
              onMouseLeave={() => setIsSyllabusDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsSyllabusDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                  location.pathname.startsWith('/syllabus')
                    ? 'text-orange-600 dark:text-orange-400 font-semibold'
                    : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-yellow-400'
                }`}
              >
                <span>Check Syllabus (1 to 6 Days)</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isSyllabusDropdownOpen ? 'rotate-180 text-orange-500' : ''
                  }`}
                />
              </button>

              {/* Apple-style floating frosted dropdown */}
              <div
                className={`absolute top-full -left-8 w-80 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-2 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isSyllabusDropdownOpen
                    ? 'opacity-100 translate-y-1 pointer-events-auto'
                    : 'opacity-0 translate-y-3 pointer-events-none'
                }`}
              >
                <div className="px-3.5 py-2 text-[11px] font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 border-b border-gray-100 dark:border-gray-800">
                  Select Domain to Check Syllabus
                </div>
                <div className="py-1">
                  {syllabusTracks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-950/40 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-150"
                      onClick={() => setIsSyllabusDropdownOpen(false)}
                    >
                      <span className="font-medium truncate mr-2">{item.name}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 shrink-0">
                        {item.tag}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800 px-3 pb-1">
                  <Link
                    to="/syllabus"
                    className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center justify-between py-1"
                    onClick={() => setIsSyllabusDropdownOpen(false)}
                  >
                    <span>Check Full Syllabus Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/syllabus"
              className={`transition-colors duration-200 ${
                location.pathname === '/syllabus'
                  ? 'text-orange-600 dark:text-orange-400 font-semibold'
                  : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-yellow-400'
              }`}
            >
              All Tech Tracks
            </Link>

            <a
              href="/#trusted-colleges"
              className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-yellow-400 transition-colors duration-200"
            >
              Colleges
            </a>

            <a
              href="/#testimonials"
              className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-yellow-400 transition-colors duration-200"
            >
              Testimonials
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
            </button>

            {/* Check Syllabus Main Button */}
            <Link
              to="/syllabus"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl btn-brand-gradient text-white font-semibold text-xs shadow-md hover:shadow-orange-500/30 active:scale-95 transition-all duration-200"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Check Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Host Proposal Button */}
            <Link
              to="/proposal"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-orange-400 font-semibold text-xs shadow-sm hover:shadow transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-orange-500" />
              <span>Host Proposal</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-b-2xl shadow-xl animate-fade-in">
            <nav className="flex flex-col space-y-2 px-2">
              <Link
                to="/"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/syllabus"
                className="px-3 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 flex items-center justify-between shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Check Syllabus (All 9 Tracks)</span>
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile tracks quick list */}
              <div className="pl-4 py-2 space-y-1.5 border-l-2 border-orange-200 dark:border-gray-700 ml-2">
                {syllabusTracks.slice(0, 5).map((track) => (
                  <Link
                    key={track.path}
                    to={track.path}
                    className="block text-xs text-gray-600 dark:text-gray-400 hover:text-orange-500 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Check {track.name} Syllabus
                  </Link>
                ))}
              </div>

              <Link
                to="/proposal"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-gray-700 flex items-center justify-center gap-2 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-4 h-4" />
                <span>Host Proposal for College</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
