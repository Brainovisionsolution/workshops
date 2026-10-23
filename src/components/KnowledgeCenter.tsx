import React, { useState } from 'react';
import { BookOpen, Video, Download, FileText, Search, Filter, Clock, Eye } from 'lucide-react';

const KnowledgeCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Complete React.js Guide for Beginners',
      type: 'blog',
      category: 'Frontend',
      description: 'Learn React from scratch with practical examples and real-world projects.',
      readTime: '15 min read',
      views: '12.5K',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['React', 'JavaScript', 'Frontend'],
      date: '2024-01-10'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals Video Series',
      type: 'video',
      category: 'AI/ML',
      description: '10-part video series covering ML algorithms, implementation, and best practices.',
      duration: '2.5 hours',
      views: '8.3K',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Machine Learning', 'Python', 'AI'],
      date: '2024-01-08'
    },
    {
      id: 3,
      title: 'Node.js Project Template',
      type: 'template',
      category: 'Backend',
      description: 'Production-ready Node.js template with authentication, database, and API structure.',
      downloads: '2.1K',
      views: '5.7K',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Node.js', 'Express', 'MongoDB'],
      date: '2024-01-05'
    },
    {
      id: 4,
      title: 'DevOps Best Practices Guide',
      type: 'guide',
      category: 'DevOps',
      description: 'Comprehensive guide covering CI/CD, containerization, and cloud deployment strategies.',
      readTime: '25 min read',
      views: '9.2K',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['DevOps', 'Docker', 'AWS'],
      date: '2024-01-03'
    },
    {
      id: 5,
      title: 'Flutter Mobile App Development Tutorial',
      type: 'video',
      category: 'Mobile',
      description: 'Build a complete mobile app from scratch using Flutter and Firebase.',
      duration: '3.2 hours',
      views: '6.8K',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Flutter', 'Dart', 'Mobile'],
      date: '2024-01-01'
    },
    {
      id: 6,
      title: 'Blockchain Development Starter Kit',
      type: 'template',
      category: 'Blockchain',
      description: 'Complete starter kit for building DApps with Solidity and Web3.js.',
      downloads: '1.5K',
      views: '4.3K',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Blockchain', 'Solidity', 'Web3'],
      date: '2023-12-28'
    },
    {
      id: 7,
      title: 'Data Structures and Algorithms Cheat Sheet',
      type: 'guide',
      category: 'Programming',
      description: 'Quick reference guide for common DSA concepts with code examples.',
      readTime: '10 min read',
      views: '15.1K',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['DSA', 'Programming', 'Interview'],
      date: '2023-12-25'
    },
    {
      id: 8,
      title: 'UI/UX Design Principles Video Course',
      type: 'video',
      category: 'Design',
      description: 'Learn modern design principles and create stunning user interfaces.',
      duration: '1.8 hours',
      views: '7.5K',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['UI/UX', 'Design', 'Figma'],
      date: '2023-12-22'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources', count: resources.length },
    { id: 'blog', label: 'Blogs', count: resources.filter(r => r.type === 'blog').length },
    { id: 'video', label: 'Videos', count: resources.filter(r => r.type === 'video').length },
    { id: 'template', label: 'Templates', count: resources.filter(r => r.type === 'template').length },
    { id: 'guide', label: 'Guides', count: resources.filter(r => r.type === 'guide').length }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesTab = activeTab === 'all' || resource.type === activeTab;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'blog': return FileText;
      case 'video': return Video;
      case 'template': return Download;
      case 'guide': return BookOpen;
      default: return FileText;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'video': return 'bg-red-500';
      case 'template': return 'bg-green-500';
      case 'guide': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="knowledge-center" className="py-20 bg-background-pale dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Knowledge <span className="text-primary-orange">Center</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Access our comprehensive library of free resources including blogs, video tutorials, 
            project templates, and guides to accelerate your learning journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-gray dark:text-dark-muted" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-background-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent text-text-charcoal dark:text-dark-text"
            />
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-background-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-primary-yellow/20 transition-colors duration-200">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-primary-orange text-white shadow-lg'
                  : 'bg-background-white dark:bg-dark-bg text-text-gray dark:text-dark-muted hover:bg-primary-orange/20'
              }`}
            >
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeTab === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-primary-orange/20 text-primary-orange'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredResources.map((resource) => {
            const IconComponent = getResourceIcon(resource.type);
            return (
              <div
                key={resource.id}
                className="group bg-background-white dark:bg-dark-bg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Resource Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`${getResourceColor(resource.type)} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1`}>
                      <IconComponent className="w-4 h-4" />
                      <span className="capitalize">{resource.type}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {resource.category}
                  </div>
                </div>

                {/* Resource Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-3 group-hover:text-primary-orange transition-colors duration-200">
                    {resource.title}
                  </h3>
                  
                  <p className="text-text-gray dark:text-dark-muted mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Resource Meta */}
                  <div className="flex items-center justify-between mb-4 text-sm text-text-gray dark:text-dark-muted">
                    <div className="flex items-center space-x-4">
                      {resource.readTime && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.readTime}</span>
                        </div>
                      )}
                      {resource.duration && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                      )}
                      {resource.downloads && (
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>{resource.downloads}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{resource.views}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-background-pale dark:bg-dark-card text-text-gray dark:text-dark-muted text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3 bg-primary-orange hover:bg-primary-yellow text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <IconComponent className="w-5 h-5" />
                    <span>
                      {resource.type === 'video' ? 'Watch Now' :
                       resource.type === 'template' ? 'Download' :
                       'Read More'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="bg-gradient-to-r from-primary-yellow to-primary-orange rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Featured This Week</h3>
            <p className="text-lg opacity-90">Hand-picked resources by our expert team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Advanced React Patterns</h4>
              <p className="opacity-80">Master complex React patterns and performance optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Full Stack Boilerplate</h4>
              <p className="opacity-80">Complete MERN stack template with authentication</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">System Design Guide</h4>
              <p className="opacity-80">Comprehensive guide to designing scalable systems</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-4">
              Want to Contribute?
            </h3>
            <p className="text-lg text-text-gray dark:text-dark-muted mb-6">
              Share your knowledge with the community. Submit your own tutorials, templates, and guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-orange hover:bg-primary-yellow text-white font-semibold rounded-lg transition-colors duration-200">
                Submit Resource
              </button>
              <button className="px-6 py-3 border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white font-semibold rounded-lg transition-colors duration-200">
                Join as Author
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenter;