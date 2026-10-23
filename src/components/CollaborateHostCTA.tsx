import React from 'react';
import { Users, Calendar, Award, Phone, Mail, Building, Handshake, Target } from 'lucide-react';

const CollaborateHostCTA: React.FC = () => {
  const partnershipBenefits = [
    {
      icon: Users,
      title: 'Reach Thousands',
      description: 'Connect with our community of 50K+ students and professionals',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Brand Recognition',
      description: 'Enhance your brand visibility in the tech education space',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Talent Pipeline',
      description: 'Build a direct pipeline to top tech talent for your organization',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Handshake,
      title: 'Strategic Partnership',
      description: 'Long-term collaboration opportunities and mutual growth',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Corporate Sponsorship',
      description: 'Sponsor our events and get prominent brand placement',
      features: ['Logo placement', 'Speaking opportunities', 'Recruitment access', 'Custom workshops'],
      price: 'Starting from ₹50K',
      popular: false
    },
    {
      title: 'Event Partnership',
      description: 'Co-host workshops and hackathons with us',
      features: ['Joint branding', 'Shared resources', 'Expert speakers', 'Prize sponsorship'],
      price: 'Starting from ₹1L',
      popular: true
    },
    {
      title: 'Educational Alliance',
      description: 'Long-term partnership for curriculum development',
      features: ['Curriculum input', 'Certification programs', 'Internship programs', 'Campus events'],
      price: 'Custom pricing',
      popular: false
    }
  ];

  const hostingOptions = [
    {
      title: 'Workshop Hosting',
      description: 'Host skill-building workshops for students',
      icon: Building,
      requirements: ['Expert speakers', 'Venue/Platform', 'Marketing support'],
      benefits: ['Brand exposure', 'Talent scouting', 'Community building']
    },
    {
      title: 'Hackathon Hosting',
      description: 'Organize innovation-focused hackathons',
      icon: Award,
      requirements: ['Problem statements', 'Mentors', 'Prize money'],
      benefits: ['Innovation solutions', 'Media coverage', 'Recruitment']
    },
    {
      title: 'Campus Events',
      description: 'Bring events directly to college campuses',
      icon: Users,
      requirements: ['College partnership', 'Local coordination', 'Student engagement'],
      benefits: ['Direct access', 'Local presence', 'Student loyalty']
    }
  ];

  return (
    <section id="collaborate-host" className="py-20 bg-gradient-to-br from-primary-yellow via-primary-orange to-primary-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Partner & <span className="text-white">Collaborate</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Join forces with us to create impactful learning experiences. Whether you're a company, 
            educational institution, or organization, we have partnership opportunities for you.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Partnership Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                  type.popular ? 'ring-4 ring-white/50 scale-105' : ''
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-text-charcoal mb-3">{type.title}</h4>
                  <p className="text-text-gray mb-4">{type.description}</p>
                  <div className="text-3xl font-bold text-primary-orange">{type.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text-gray">
                      <div className="w-2 h-2 bg-primary-yellow rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  type.popular 
                    ? 'bg-primary-orange hover:bg-primary-yellow text-white' 
                    : 'border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hosting Options */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Hosting Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{option.title}</h4>
                  </div>
                </div>

                <p className="text-white/80 mb-6">{option.description}</p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Requirements:</h5>
                    <ul className="space-y-1">
                      {option.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-white/70 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-white mb-2">Benefits:</h5>
                    <ul className="space-y-1">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-white/70 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Partner Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-10 h-10 text-white" />
              </div>
              <blockquote className="text-white/90 text-lg mb-4">
                "Partnering with W&H Platform helped us recruit 50+ talented developers. 
                The quality of candidates from their hackathons is exceptional."
              </blockquote>
              <div className="text-white font-semibold">TechCorp Solutions</div>
              <div className="text-white/70">HR Director</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <blockquote className="text-white/90 text-lg mb-4">
                "Our workshop series reached 2000+ students across 10 cities. 
                The platform's reach and engagement is unmatched."
              </blockquote>
              <div className="text-white font-semibold">EduTech Innovations</div>
              <div className="text-white/70">Marketing Head</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Partner With Us */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-text-charcoal mb-6 flex items-center">
              <Handshake className="w-6 h-6 mr-3 text-primary-orange" />
              Partner With Us
            </h3>
            <p className="text-text-gray mb-6">
              Ready to collaborate? Let's discuss how we can create amazing learning experiences together.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-orange" />
                <span className="text-text-charcoal">partnerships@workshophackathon.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-orange" />
                <span className="text-text-charcoal">+91 98765 43210</span>
              </div>
            </div>
            <button className="w-full py-3 bg-primary-orange hover:bg-primary-yellow text-white font-semibold rounded-lg transition-colors duration-200">
              Schedule Partnership Call
            </button>
          </div>

          {/* Host an Event */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-text-charcoal mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary-yellow" />
              Host an Event
            </h3>
            <p className="text-text-gray mb-6">
              Want to host a workshop or hackathon? We'll help you plan and execute a successful event.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-yellow" />
                <span className="text-text-charcoal">events@workshophackathon.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-yellow" />
                <span className="text-text-charcoal">+91 87654 32109</span>
              </div>
            </div>
            <button className="w-full py-3 bg-primary-yellow hover:bg-primary-orange text-white font-semibold rounded-lg transition-colors duration-200">
              Submit Event Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateHostCTA;