import React from 'react';
import { Lightbulb, Users, Code, Presentation, Trophy, ArrowRight } from 'lucide-react';
 import { Link } from 'react-router-dom';
const HackathonProcess: React.FC = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Theme',
      description: 'Explore exciting themes and problem statements that challenge your creativity and technical skills.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team',
      description: 'Form diverse teams with complementary skills or join existing teams to collaborate effectively.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Build',
      description: 'Develop innovative solutions using cutting-edge technologies with mentor guidance and support.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Presentation,
      title: 'Pitch',
      description: 'Present your solution to industry experts and judges, showcasing your innovation and impact.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Trophy,
      title: 'Win',
      description: 'Compete for exciting prizes, recognition, and opportunities to take your project to the next level.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="hackathon-process" className="py-20 bg-background-pale dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Hackathon <span className="text-primary-orange">Journey</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Experience the complete hackathon journey from ideation to victory. Follow our proven process to maximize your success.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Step Card */}
                  <div className="group bg-background-white dark:bg-dark-bg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 w-56">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-3 text-center group-hover:text-primary-orange transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-text-gray dark:text-dark-muted text-center leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-orange" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    {/* Step Number */}
                    <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-2">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      {/* Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-text-charcoal dark:text-dark-text mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-gray dark:text-dark-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-6 bg-primary-orange/30 mx-4 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-orange to-primary-yellow hover:from-primary-yellow hover:to-primary-orange text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center space-x-2">
              <Trophy className="w-5 h-5" />
              <span>Join Next Hackathon</span>
            </span>
            
          </button>
        </div>
        <div className="text-center mt-16">
            <Link to="/proposal">
  <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-xl hover:brightness-110 transition">
    Get Your Proposal
  </button>
</Link>

            
         
        </div>
      </div>
    </section>
  );
};

export default HackathonProcess;