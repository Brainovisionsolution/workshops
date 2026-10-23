import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Calendar, Users, Award } from 'lucide-react';

const PastHighlights: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      id: 1,
      title: 'AI Innovation Summit 2023',
      type: 'Hackathon',
      date: 'December 2023',
      participants: 500,
      projects: 120,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A groundbreaking hackathon focused on AI solutions for social good, featuring industry leaders and innovative projects.',
      highlights: ['₹5L Prize Pool', '50+ Mentors', '15 Companies']
    },
    {
      id: 2,
      title: 'Full Stack Development Bootcamp',
      type: 'Workshop',
      date: 'November 2023',
      participants: 300,
      completion: '95%',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intensive 3-day bootcamp covering modern web development technologies with hands-on projects.',
      highlights: ['300 Certificates', '95% Completion', '4.9/5 Rating']
    },
    {
      id: 3,
      title: 'Blockchain Challenge 2023',
      type: 'Hackathon',
      date: 'October 2023',
      participants: 250,
      projects: 60,
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Exploring the future of decentralized applications with Web3 technologies and smart contracts.',
      highlights: ['₹3L Prize Pool', '25 Teams', '10 Judges']
    },
    {
      id: 4,
      title: 'Mobile App Development Workshop',
      type: 'Workshop',
      date: 'September 2023',
      participants: 400,
      completion: '92%',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cross-platform mobile development using Flutter and React Native with real-world project building.',
      highlights: ['400 Students', '50 Apps Built', '20 Mentors']
    },
    {
      id: 5,
      title: 'Cloud Computing Hackathon',
      type: 'Hackathon',
      date: 'August 2023',
      participants: 350,
      projects: 80,
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Building scalable cloud solutions using AWS, Azure, and Google Cloud Platform technologies.',
      highlights: ['₹4L Prize Pool', '35 Teams', '12 Cloud Experts']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <section id="past-highlights" className="py-20 bg-background-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Past Event <span className="text-primary-orange">Highlights</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Relive the excitement and innovation from our previous workshops and hackathons. 
            See what amazing projects and learning experiences we've created together.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {highlights.map((highlight, index) => (
                <div key={highlight.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 lg:h-[500px]">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                      <div className="max-w-4xl">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            highlight.type === 'Workshop' 
                              ? 'bg-primary-yellow text-white' 
                              : 'bg-primary-orange text-white'
                          }`}>
                            {highlight.type}
                          </span>
                          <span className="text-sm opacity-80">{highlight.date}</span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">{highlight.title}</h3>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl">{highlight.description}</p>
                        
                        <div className="flex flex-wrap gap-6 mb-6">
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5" />
                            <span>{highlight.participants} Participants</span>
                          </div>
                          {highlight.projects && (
                            <div className="flex items-center space-x-2">
                              <Award className="w-5 h-5" />
                              <span>{highlight.projects} Projects</span>
                            </div>
                          )}
                          {highlight.completion && (
                            <div className="flex items-center space-x-2">
                              <Award className="w-5 h-5" />
                              <span>{highlight.completion} Completion</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {highlight.highlights.map((item, itemIndex) => (
                            <span key={itemIndex} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Play Button */}
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index ? 'bg-primary-orange' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-orange to-primary-yellow hover:from-primary-yellow hover:to-primary-orange text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Join Our Next Event</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastHighlights;