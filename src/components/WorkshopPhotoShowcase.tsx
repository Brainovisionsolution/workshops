import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  MapPin,
  Users,
  Award,
  Calendar,
  CheckCircle2
} from 'lucide-react';

const appleEase = [0.16, 1, 0.3, 1];

interface ShowcasePhoto {
  id: string;
  title: string;
  category: string;
  college: string;
  location: string;
  attendees: string;
  image: string;
  highlight: string;
}

const PHOTOS: ShowcasePhoto[] = [
  {
    id: 'photo-1',
    title: 'AICTE Certified National Hackathon & Agentic AI Sprint',
    category: 'Hackathon Sprint',
    college: 'JNTU College of Engineering',
    location: 'Hyderabad, Telangana',
    attendees: '1,200+ Students',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=compress&cs=tinysrgb&w=1200',
    highlight: '48-hour continuous coding with cloud-hosted GPU clusters and live mentor guidance.',
  },
  {
    id: 'photo-2',
    title: 'Hands-on Generative AI & Deeptech Engineering Lab',
    category: 'Hands-on Coding Lab',
    college: 'SRM Institute of Science and Technology',
    location: 'Chennai, Tamil Nadu',
    attendees: '650+ Participants',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Building LangChain RAG pipelines, Vector Embeddings, and fine-tuning open LLMs.',
  },
  {
    id: 'photo-3',
    title: 'Full Stack Microservices & Cloud Architecture Masterclass',
    category: 'Architecture Bootcamp',
    college: 'Vellore Institute of Technology (VIT)',
    location: 'Vellore, Tamil Nadu',
    attendees: '800+ Students',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Containerizing Node/Express services with Docker, Kubernetes, and Redis caching.',
  },
  {
    id: 'photo-4',
    title: 'Inaugural Keynote & Industry 4.0 Orientation',
    category: 'Campus Keynote',
    college: 'Osmania University University College of Engg',
    location: 'Hyderabad, Telangana',
    attendees: '1,500+ Auditorium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Principals, Deans, and HODs inaugurating state-of-the-art AI Centers of Excellence.',
  },
  {
    id: 'photo-5',
    title: 'Capstone Project Jury Defense & Placement Pitching',
    category: 'Project Defense',
    college: 'KL University',
    location: 'Vijayawada, Andhra Pradesh',
    attendees: '450+ Finalists',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Presenting deployable full-stack products to technical interviewers from Tier-1 product firms.',
  },
];

const WorkshopPhotoShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<ShowcasePhoto | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === PHOTOS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = PHOTOS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PHOTOS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white dark:bg-[#0b1120] relative transition-colors duration-500 font-poppins overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-400/10 dark:bg-orange-600/15 blur-[160px] rounded-full top-1/2 -left-20 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 dark:bg-yellow-500/15 blur-[160px] rounded-full top-10 right-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campus Moments in Action</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight">
              Life Inside Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
                Live Bootcamps
              </span>
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-300 mt-2 max-w-xl">
              High-energy auditoriums, late-night hackathon code sprints, and institutional project defenses across top engineering campuses.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white flex items-center justify-center hover:border-orange-500 hover:text-orange-500 shadow-sm transition-all duration-300"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center justify-center shadow-md hover:shadow-orange-500/25 transition-all duration-300"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Large Stage Display Card */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="relative rounded-3xl overflow-hidden glass-card border border-orange-200/80 dark:border-white/10 shadow-2xl group"
        >
          <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: appleEase }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden sm:block" />

            {/* Top Bar Badges */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                {current.category}
              </span>

              <button
                onClick={() => setLightboxPhoto(current)}
                className="w-10 h-10 rounded-xl bg-white/90 dark:bg-black/70 backdrop-blur-md text-gray-900 dark:text-white flex items-center justify-center hover:scale-110 shadow-lg transition-transform"
                title="Expand Full Screen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Content Spotlight */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white">
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-yellow-300 mb-2">
                <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-400/30">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{current.college} — {current.location}</span>
                </span>

                <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Users className="w-3.5 h-3.5 text-yellow-400" />
                  <span>{current.attendees}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold font-serif leading-tight max-w-3xl mb-2 drop-shadow-md">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 font-poppins max-w-2xl leading-relaxed drop-shadow-sm line-clamp-2 sm:line-clamp-none">
                {current.highlight}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
          {PHOTOS.map((photo, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={photo.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`relative rounded-2xl overflow-hidden h-20 sm:h-24 transition-all duration-300 text-left border-2 group ${
                  isSelected
                    ? 'border-orange-500 shadow-lg scale-[1.02]'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-1.5 left-2 right-2 text-white">
                  <p className="text-[10px] font-bold truncate">{photo.category}</p>
                  <p className="text-[9px] text-gray-300 truncate">{photo.college}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: appleEase, duration: 0.3 }}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <img
                  src={lightboxPhoto.image}
                  alt={lightboxPhoto.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 bg-gray-950 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800">
                    {lightboxPhoto.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {lightboxPhoto.college} &bull; {lightboxPhoto.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2">
                  {lightboxPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-poppins">
                  {lightboxPhoto.highlight}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkshopPhotoShowcase;
