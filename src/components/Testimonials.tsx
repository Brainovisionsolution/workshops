import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Generative AI Engineer',
      company: 'Microsoft',
      college: 'IIT Delhi',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote:
        'The Brainovision GenAI & RAG workshop completely transformed my understanding of LLM application architecture. The hands-on project and fine-tuning labs gave me a massive edge during my Microsoft tech interviews!',
      event: 'Generative AI & LLM Bootcamp',
      trackId: 'genai',
    },
    {
      id: 2,
      name: 'Arjun Patel',
      role: 'Forward Deployed Engineer (FDE)',
      company: 'Enterprise AI Unicorn',
      college: 'BITS Pilani',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote:
        'The FDE track was unlike any normal academic workshop. Learning how to connect enterprise SQL silos to modern AI pipelines and deploy with Docker and Kubernetes was the single best technical investment of my degree.',
      event: 'Forward Deployed Engineering Workshop',
      trackId: 'fde',
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      role: 'Full Stack Developer',
      company: 'Atlassian',
      college: 'JNTU Hyderabad',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote:
        'We attended the 5-Day MERN Stack and AI Tools bootcamp at our campus. Within 5 days we built a full collaboration platform with Redux and deployed it live. Truly remarkable mentorship!',
      event: 'MERN Stack & AI Tools Workshop',
      trackId: 'mern-stack',
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      role: 'Backend Java Architect',
      company: 'Amazon',
      college: 'VIT Vellore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote:
        'The Java Full Stack & Microservices track covered Spring Boot 3, Kafka, and Redis caching with production rigour. Our college batch landed 40+ placement offers following the workshop!',
      event: 'Java Full Stack & Microservices',
      trackId: 'jfs',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#0b1120] relative transition-colors duration-300 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alumni Career Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Student &amp; College{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              Success Stories
            </span>
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
            Real outcomes from students and partner college departments who transformed their career trajectories through Brainovision workshops.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-orange-200/80 dark:border-gray-800 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative shrink-0">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-lg border-2 border-orange-400"
              />
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                <Quote className="w-5 h-5" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-base sm:text-xl text-gray-800 dark:text-gray-200 font-serif italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    {testimonials[currentTestimonial].college} • {testimonials[currentTestimonial].event}
                  </p>
                </div>

                <Link
                  to={`/syllabus/${testimonials[currentTestimonial].trackId}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline"
                >
                  <span>Inspect Track Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-600 dark:text-gray-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === idx ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400 text-gray-600 dark:text-gray-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;