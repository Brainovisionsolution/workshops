import React from 'react';
import { Linkedin, Github, Twitter, Star, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorsTrainers: React.FC = () => {
  const mentors = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Principal GenAI Researcher & LLM Lead',
      company: 'Ex-Google Research',
      track: 'GenAI & Agentic AI',
      trackId: 'genai',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=compress&cs=tinysrgb&w=400',
      expertise: ['LangChain', 'RAG', 'Agent Swarms', 'Llama 3'],
      experience: '12+ years',
      rating: 4.98,
      studentsGuided: '15,000+',
    },
    {
      name: 'Arjun Patel',
      role: 'Staff Forward Deployed Engineer (FDE)',
      company: 'Enterprise AI Architect',
      track: 'FDE & Cloud Systems',
      trackId: 'fde',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Kubernetes', 'Docker', 'FastAPI', 'High Throughput'],
      experience: '10+ years',
      rating: 4.95,
      studentsGuided: '12,000+',
    },
    {
      name: 'Sneha Reddy',
      role: 'Full Stack Tech Lead & React Specialist',
      company: 'Fintech Unicorn',
      track: 'MERN & Web Dev + AI',
      trackId: 'mern-stack',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=compress&cs=tinysrgb&w=400',
      expertise: ['React 18', 'Node.js', 'Next.js', 'Tailwind CSS'],
      experience: '8+ years',
      rating: 4.92,
      studentsGuided: '18,000+',
    },
    {
      name: 'Rajesh Varma',
      role: 'Principal Java Microservices Architect',
      company: 'Ex-Amazon / Oracle',
      track: 'Java Full Stack (JFS)',
      trackId: 'jfs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Spring Boot 3', 'Kafka', 'Spring Cloud', 'Hibernate'],
      experience: '14+ years',
      rating: 4.94,
      studentsGuided: '16,500+',
    },
    {
      name: 'Kavita Menon',
      role: 'Python Full Stack & Deep Learning Specialist',
      company: 'AI Automation Labs',
      track: 'Python FS & AI Tools',
      trackId: 'python-fs',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=compress&cs=tinysrgb&w=400',
      expertise: ['FastAPI', 'PostgreSQL', 'PyTorch', 'Cursor IDE'],
      experience: '9+ years',
      rating: 4.96,
      studentsGuided: '14,000+',
    },
    {
      name: 'Vikram Joshi',
      role: 'Autonomous Agentic Systems Developer',
      company: 'Open-Source AI Contributor',
      track: 'Agentic AI & AI Tools',
      trackId: 'agentic-ai',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=compress&cs=tinysrgb&w=400',
      expertise: ['CrewAI', 'LangGraph', 'AutoGen', 'Tool Calling'],
      experience: '7+ years',
      rating: 4.97,
      studentsGuided: '9,800+',
    },
  ];

  return (
    <section id="mentors" className="py-24 bg-slate-50 dark:bg-[#0b1120] relative transition-colors duration-300 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>World-Class Faculty &amp; Architects</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Learn from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Industry Mentors
            </span>
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
            Our trainers are practicing deeptech practitioners with battle-tested experience building real-world enterprise architectures and frontier AI models.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-orange-100/90 dark:border-gray-800 shadow-md hover:shadow-2xl hover:border-orange-400 dark:hover:border-orange-500/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Header: Photo + Info */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-300 dark:border-orange-500/50 shadow-md group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-1 rounded-full text-[10px] shadow">
                      <Award className="w-3 h-3" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold font-serif text-lg text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 font-poppins">
                      {mentor.role}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">{mentor.company}</p>
                  </div>
                </div>

                {/* Rating & Stats */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-orange-50/60 dark:bg-gray-800/60 border border-orange-100/80 dark:border-gray-700 text-xs mb-4">
                  <div className="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{mentor.rating} Rating</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    {mentor.studentsGuided} Guided
                  </span>
                </div>

                {/* Expertise Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Link to track */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {mentor.track}
                </span>
                <Link
                  to={`/syllabus/${mentor.trackId}`}
                  className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>View Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsTrainers;
