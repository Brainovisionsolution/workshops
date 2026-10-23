import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Clock, Sparkles, BookOpen, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface EventType {
  id: number;
  trackId: string;
  title: string;
  type: 'workshop' | 'bootcamp' | 'hackathon';
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationFormats: string;
  image: string;
}

export const WORKSHOP_EVENTS: EventType[] = [
  {
    id: 1,
    trackId: 'genai',
    title: 'Generative AI & LLMs: RAG & Fine-Tuning Bootcamp',
    type: 'bootcamp',
    date: 'Upcoming Batch: Nov 10 - 15',
    time: '09:30 AM - 04:30 PM',
    location: 'Hybrid (Campus + Online)',
    participants: 180,
    maxParticipants: 200,
    tags: ['GenAI', 'LLMs', 'RAG', 'LangChain', 'Ollama'],
    difficulty: 'Intermediate',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    trackId: 'agentic-ai',
    title: 'Agentic AI & Multi-Agent Swarms with LangGraph & CrewAI',
    type: 'workshop',
    date: 'Upcoming Batch: Nov 18 - 23',
    time: '10:00 AM - 05:00 PM',
    location: 'IIT Madras Research Park & Online',
    participants: 145,
    maxParticipants: 160,
    tags: ['Agentic AI', 'CrewAI', 'LangGraph', 'Autonomous Agents'],
    difficulty: 'Advanced',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    trackId: 'fde',
    title: 'Forward Deployed Engineering (FDE) Enterprise Masterclass',
    type: 'bootcamp',
    date: 'Upcoming Batch: Nov 25 - 30',
    time: '09:00 AM - 04:30 PM',
    location: 'BITS Pilani & Virtual Lab',
    participants: 90,
    maxParticipants: 100,
    tags: ['FDE', 'Applied AI', 'Docker', 'Kubernetes', 'Enterprise'],
    difficulty: 'Advanced',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    trackId: 'mern-stack',
    title: 'MERN Stack Web Engineering & Production Deployment',
    type: 'workshop',
    date: 'Upcoming Batch: Dec 02 - 07',
    time: '10:00 AM - 04:00 PM',
    location: 'JNTU Hyderabad Campus',
    participants: 210,
    maxParticipants: 250,
    tags: ['MERN', 'React', 'Node.js', 'MongoDB', 'Full Stack'],
    difficulty: 'Beginner',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    trackId: 'python-fs',
    title: 'Python Full Stack: FastAPI, PostgreSQL & React Systems',
    type: 'bootcamp',
    date: 'Upcoming Batch: Dec 09 - 14',
    time: '09:30 AM - 04:30 PM',
    location: 'VIT Vellore Campus & Online',
    participants: 130,
    maxParticipants: 150,
    tags: ['Python FS', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    difficulty: 'Intermediate',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    trackId: 'jfs',
    title: 'Java Full Stack & Microservices (JFS Spring Boot 3)',
    type: 'workshop',
    date: 'Upcoming Batch: Dec 16 - 21',
    time: '10:00 AM - 05:00 PM',
    location: 'SRM University & Live Stream',
    participants: 175,
    maxParticipants: 200,
    tags: ['JFS', 'Spring Boot 3', 'Microservices', 'Kafka', 'React'],
    difficulty: 'Intermediate',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '7' as any,
    trackId: 'ai-tools',
    title: 'AI Tools & Cursor 10x Developer Productivity Workshop',
    type: 'workshop',
    date: 'Upcoming Batch: Dec 23 - 26',
    time: '10:00 AM - 04:00 PM',
    location: 'Online Live Masterclass',
    participants: 280,
    maxParticipants: 300,
    tags: ['AI Tools', 'Cursor IDE', 'v0.dev', 'Copilot', 'Prompting'],
    difficulty: 'Beginner',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '8' as any,
    trackId: 'web-dev-ai',
    title: 'Next-Gen Web Development with AI Tools & Next.js',
    type: 'bootcamp',
    date: 'Upcoming Batch: Jan 05 - 10',
    time: '09:30 AM - 04:30 PM',
    location: 'Bangalore Tech Center & Hybrid',
    participants: 110,
    maxParticipants: 120,
    tags: ['Web Dev + AI', 'Next.js 14', 'Tailwind', 'AI Workflows'],
    difficulty: 'Beginner',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '9' as any,
    trackId: 'ai',
    title: 'Foundations of AI & Machine Learning with PyTorch',
    type: 'workshop',
    date: 'Upcoming Batch: Jan 12 - 17',
    time: '10:00 AM - 04:30 PM',
    location: 'Anna University Campus & Online',
    participants: 190,
    maxParticipants: 220,
    tags: ['AI & ML', 'PyTorch', 'Data Science', 'Neural Networks'],
    difficulty: 'Beginner',
    durationFormats: '3, 5, 6 Days Available',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=compress&cs=tinysrgb&w=800',
  },
];

const UpcomingEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'fullstack'>('all');

  const filteredEvents = WORKSHOP_EVENTS.filter((event) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ai') return ['genai', 'agentic-ai', 'ai', 'ai-tools'].includes(event.trackId);
    if (activeTab === 'fullstack') return ['mern-stack', 'python-fs', 'jfs', 'fde', 'web-dev-ai'].includes(event.trackId);
    return true;
  });

  return (
    <section id="events" className="py-24 bg-slate-50 dark:bg-[#0b1120] relative transition-colors duration-300 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scheduled Batches</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Upcoming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Workshops &amp; Bootcamps
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
            Reserve seats for upcoming certified deeptech batches or inspect the sample syllabus for each program.
          </p>

          {/* Filter Pills from Design System Guide */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`transition-all duration-200 px-4 py-2 rounded-lg text-xs font-semibold ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-orange-400 border border-gray-200 dark:border-gray-700'
              }`}
            >
              All Batches ({WORKSHOP_EVENTS.length})
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`transition-all duration-200 px-4 py-2 rounded-lg text-xs font-semibold ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-orange-400 border border-gray-200 dark:border-gray-700'
              }`}
            >
              AI &amp; GenAI Workshops
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`transition-all duration-200 px-4 py-2 rounded-lg text-xs font-semibold ${
                activeTab === 'fullstack'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-orange-400 border border-gray-200 dark:border-gray-700'
              }`}
            >
              Full Stack &amp; FDE Workshops
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="glass-card rounded-3xl overflow-hidden border border-orange-100/90 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:border-orange-300 dark:hover:border-orange-500/50 flex flex-col justify-between group transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-md">
                    {event.durationFormats}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{event.date}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    <Users className="w-3.5 h-3.5 text-orange-400" />
                    <span>{event.participants} registered</span>
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>

                  <h3 className="font-bold font-serif text-lg text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-orange-50 dark:bg-gray-800 text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/syllabus/${event.trackId}`}
                    className="flex-1 py-2.5 px-3 rounded-xl btn-brand-gradient text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Sample Syllabus (3/5/6D)</span>
                  </Link>

                  <Link
                    to={`/proposal?track=${event.trackId}`}
                    className="py-2.5 px-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-700 dark:text-gray-300 font-medium text-xs flex items-center justify-center gap-1"
                    title="Book for College"
                  >
                    <Building className="w-3.5 h-3.5 text-orange-500" />
                    <span>Proposal</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
