import React, { useState } from 'react';
import { Github, ExternalLink, Trophy, Users, Calendar, Star } from 'lucide-react';

const WinnerShowcases: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EcoTrack - Carbon Footprint Monitor',
      category: 'hackathon',
      event: 'Green Tech Hackathon 2023',
      team: 'EcoWarriors',
      members: ['Priya S.', 'Arjun K.', 'Maya R.'],
      prize: '1st Place - ₹2,00,000',
      description: 'AI-powered mobile app that tracks and reduces personal carbon footprint with gamification elements.',
      technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      date: 'Dec 2023',
      rating: 4.9
    },
    {
      id: 2,
      title: 'MediConnect - Telemedicine Platform',
      category: 'hackathon',
      event: 'HealthTech Challenge 2023',
      team: 'HealthHeroes',
      members: ['Rajesh M.', 'Sneha P.', 'Vikram S.'],
      prize: '2nd Place - ₹1,50,000',
      description: 'Comprehensive telemedicine platform connecting patients with doctors in rural areas.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      date: 'Nov 2023',
      rating: 4.8
    },
    {
      id: 3,
      title: 'SmartLearn - Adaptive Learning System',
      category: 'workshop',
      event: 'EdTech Workshop Series',
      team: 'LearnTech',
      members: ['Anita D.', 'Rohit G.'],
      prize: 'Best Project Award',
      description: 'AI-driven personalized learning platform that adapts to individual student needs.',
      technologies: ['Vue.js', 'Python', 'Machine Learning', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      date: 'Oct 2023',
      rating: 4.7
    },
    {
      id: 4,
      title: 'CryptoWallet - Secure Digital Wallet',
      category: 'hackathon',
      event: 'Blockchain Hackathon 2023',
      team: 'CryptoMasters',
      members: ['Dev P.', 'Kavya L.', 'Amit T.', 'Riya J.'],
      prize: '1st Place - ₹3,00,000',
      description: 'Multi-chain cryptocurrency wallet with advanced security features and DeFi integration.',
      technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      date: 'Sep 2023',
      rating: 4.9
    },
    {
      id: 5,
      title: 'FoodShare - Food Waste Reduction App',
      category: 'hackathon',
      event: 'Social Impact Hackathon',
      team: 'FoodSavers',
      members: ['Neha K.', 'Suresh B.', 'Pooja M.'],
      prize: '3rd Place - ₹75,000',
      description: 'Platform connecting restaurants and individuals to reduce food waste through smart redistribution.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      date: 'Aug 2023',
      rating: 4.6
    },
    {
      id: 6,
      title: 'CloudDeploy - DevOps Automation Tool',
      category: 'workshop',
      event: 'DevOps Mastery Workshop',
      team: 'CloudNinjas',
      members: ['Karthik R.', 'Divya S.'],
      prize: 'Innovation Award',
      description: 'Automated deployment pipeline tool with monitoring and rollback capabilities.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      date: 'Jul 2023',
      rating: 4.8
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'hackathon', label: 'Hackathon Winners', count: projects.filter(p => p.category === 'hackathon').length },
    { id: 'workshop', label: 'Workshop Projects', count: projects.filter(p => p.category === 'workshop').length }
  ];

  return (
    <section id="winner-showcases" className="py-20 bg-background-pale dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Winner <span className="text-primary-yellow">Showcases</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Discover amazing projects built by our community members. Get inspired by innovative solutions 
            and see what's possible when creativity meets technology.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-yellow text-white shadow-glow-yellow'
                  : 'bg-background-white dark:bg-dark-bg text-text-gray dark:text-dark-muted hover:bg-primary-yellow/20'
              }`}
            >
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-primary-yellow/20 text-primary-orange'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-background-white dark:bg-dark-bg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.category === 'hackathon' 
                      ? 'bg-primary-orange text-white' 
                      : 'bg-primary-yellow text-white'
                  }`}>
                    {project.category === 'hackathon' ? 'Hackathon' : 'Workshop'}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  <Trophy className="w-4 h-4 inline mr-1" />
                  Winner
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-orange font-semibold">{project.event}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-text-charcoal dark:text-dark-text">
                      {project.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-2 group-hover:text-primary-orange transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-text-gray dark:text-dark-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Team Info */}
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-4 h-4 text-text-gray dark:text-dark-muted" />
                  <span className="text-sm text-text-gray dark:text-dark-muted">
                    {project.team}: {project.members.join(', ')}
                  </span>
                </div>

                {/* Prize */}
                <div className="bg-primary-yellow/10 text-primary-orange px-3 py-2 rounded-lg text-sm font-semibold mb-4">
                  {project.prize}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-background-pale dark:bg-dark-card text-text-gray dark:text-dark-muted text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-text-gray dark:text-dark-muted">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-primary-orange hover:bg-primary-yellow text-white rounded-lg transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-4">
              Ready to Build Your Next Big Project?
            </h3>
            <p className="text-lg text-text-gray dark:text-dark-muted mb-6">
              Join our community and create innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-yellow hover:bg-primary-orange text-white font-semibold rounded-lg transition-colors duration-200">
                Join Next Hackathon
              </button>
              <button className="px-6 py-3 border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-white font-semibold rounded-lg transition-colors duration-200">
                Submit Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnerShowcases;