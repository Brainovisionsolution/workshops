import React from 'react';
import { Briefcase, TrendingUp, Users, Award, Building, MapPin, Clock, DollarSign, Code, BrainCircuit, Cloud, Smartphone } from 'lucide-react';

const CareerInternshipCorner: React.FC = () => {
  const jobOffers = [
    {
      company: 'Google',
      role: 'Software Engineer',
      location: 'Bangalore',
      salary: '₹25-30 LPA',
      type: 'Full-time',
      logo: 'G',
      color: 'bg-blue-500'
    },
    {
      company: 'Microsoft',
      role: 'Full Stack Developer',
      location: 'Hyderabad',
      salary: '₹22-28 LPA',
      type: 'Full-time',
      logo: 'M',
      color: 'bg-green-500'
    },
    {
      company: 'Amazon',
      role: 'DevOps Engineer',
      location: 'Chennai',
      salary: '₹20-25 LPA',
      type: 'Full-time',
      logo: 'A',
      color: 'bg-orange-500'
    },
    {
      company: 'Flipkart',
      role: 'Product Manager',
      location: 'Bangalore',
      salary: '₹18-22 LPA',
      type: 'Full-time',
      logo: 'F',
      color: 'bg-purple-500'
    }
  ];

  const internships = [
    {
      company: 'Uber',
      role: 'Mobile App Development Intern',
      location: 'Remote',
      stipend: '₹50K/month',
      duration: '6 months',
      logo: 'U',
      color: 'bg-black'
    },
    {
      company: 'Zomato',
      role: 'Data Science Intern',
      location: 'Gurgaon',
      stipend: '₹40K/month',
      duration: '4 months',
      logo: 'Z',
      color: 'bg-red-500'
    },
    {
      company: 'Paytm',
      role: 'Frontend Developer Intern',
      location: 'Noida',
      stipend: '₹35K/month',
      duration: '3 months',
      logo: 'P',
      color: 'bg-blue-600'
    },
    {
      company: 'Swiggy',
      role: 'Backend Developer Intern',
      location: 'Bangalore',
      stipend: '₹45K/month',
      duration: '5 months',
      logo: 'S',
      color: 'bg-orange-600'
    }
  ];

  const placementStats = [
    {
      icon: Briefcase,
      value: '2,500+',
      label: 'Job Placements',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Placement Rate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      value: '₹18L',
      label: 'Average Package',
      color: 'from-primary-yellow to-primary-orange'
    },
    {
      icon: Building,
      value: '500+',
      label: 'Partner Companies',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const careerPaths = [
    {
      title: 'Software Development',
      roles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
      avgSalary: '₹12-25 LPA',
      demand: 'High',
      icon: Code
    },
    {
      title: 'Data Science & AI',
      roles: ['Data Scientist', 'ML Engineer', 'AI Researcher'],
      avgSalary: '₹15-30 LPA',
      demand: 'Very High',
      icon: BrainCircuit
    },
    {
      title: 'DevOps & Cloud',
      roles: ['DevOps Engineer', 'Cloud Architect', 'Site Reliability Engineer'],
      avgSalary: '₹18-35 LPA',
      demand: 'High',
      icon: Cloud
    },
    {
      title: 'Mobile Development',
      roles: ['iOS Developer', 'Android Developer', 'React Native Developer'],
      avgSalary: '₹10-22 LPA',
      demand: 'Medium',
      icon: Smartphone
    }
  ];

  return (
    <section id="career-corner" className="py-20 bg-background-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Career & <span className="text-primary-yellow">Internship Corner</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Launch your tech career with exclusive job opportunities, internships, and placement support. 
            Our industry partnerships open doors to your dream companies.
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {placementStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-text-charcoal dark:text-dark-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-gray dark:text-dark-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Job Opportunities and Internships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Job Offers */}
          <div>
            <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary-orange" />
              Recent Job Offers
            </h3>
            <div className="space-y-4">
              {jobOffers.map((job, index) => (
                <div
                  key={index}
                  className="bg-background-pale dark:bg-dark-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${job.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                      {job.logo}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-text-charcoal dark:text-dark-text mb-1">
                        {job.role}
                      </h4>
                      <p className="text-primary-orange font-semibold mb-2">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-text-gray dark:text-dark-muted">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary-yellow" />
              Available Internships
            </h3>
            <div className="space-y-4">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="bg-background-pale dark:bg-dark-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${internship.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                      {internship.logo}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-text-charcoal dark:text-dark-text mb-1">
                        {internship.role}
                      </h4>
                      <p className="text-primary-yellow font-semibold mb-2">{internship.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-text-gray dark:text-dark-muted">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{internship.stipend}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-8 text-center">
            Popular Career Paths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <div
                key={index}
                className="bg-background-pale dark:bg-dark-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                  <path.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-text-charcoal dark:text-dark-text mb-3">
                  {path.title}
                </h4>
                <div className="space-y-2 mb-4">
                  {path.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="text-sm text-text-gray dark:text-dark-muted">
                      {role}
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="text-sm text-text-gray dark:text-dark-muted mb-1">Average Salary</div>
                  <div className="font-bold text-primary-orange">{path.avgSalary}</div>
                  <div className={`text-xs mt-2 px-2 py-1 rounded-full ${
                    path.demand === 'Very High' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                    path.demand === 'High' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {path.demand} Demand
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-primary-yellow to-primary-orange rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Placement Success Story</h3>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl mb-6">
                "After completing the Full Stack Development workshop, I received 3 job offers within a month. 
                The practical skills and portfolio projects made all the difference in my interviews."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Success story"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold">Ananya Gupta</div>
                  <div className="opacity-80">Software Engineer at Flipkart</div>
                  <div className="opacity-80">Package: ₹18 LPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-background-pale dark:bg-dark-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-4">
              Ready to Launch Your Career?
            </h3>
            <p className="text-lg text-text-gray dark:text-dark-muted mb-6">
              Join our placement program and get direct access to top companies and exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-yellow hover:bg-primary-orange text-white font-semibold rounded-lg transition-colors duration-200">
                View All Opportunities
              </button>
              <button className="px-6 py-3 border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-white font-semibold rounded-lg transition-colors duration-200">
                Upload Your Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerInternshipCorner;