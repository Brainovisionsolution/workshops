import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Gift, Calendar, Bell, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
  };

  const benefits = [
    {
      icon: Calendar,
      title: 'Batch Schedules First',
      description: 'Get notified about upcoming AI, GenAI, and Full Stack cohorts before public announcements',
    },
    {
      icon: Gift,
      title: 'Free Sample Syllabi & Study Kits',
      description: 'Direct access to downloadable PDF course curricula and sample project codebases',
    },
    {
      icon: Bell,
      title: 'Hackathon & Internship Alerts',
      description: 'Direct alerts for national hackathons, hiring challenges, and partner company internships',
    },
  ];

  return (
    <section id="newsletter" className="py-24 bg-white dark:bg-[#0b1120] relative transition-colors duration-300 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-14 border border-orange-200/80 dark:border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3.5 py-1 rounded-full text-xs font-semibold shadow-md tracking-wide mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join the Brainovision Learning Community</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
                Stay Ahead in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
                  AI &amp; Deeptech
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Subscribe for weekly deeptech tutorials, sample syllabi drops, and announcements of upcoming 3/5/6-day workshop cohorts across India.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5 bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 border border-orange-100 dark:border-gray-700 shadow-xl">
              {isSubscribed ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h3 className="font-bold font-serif text-xl text-gray-900 dark:text-white mb-2">
                    Welcome to Brainovision
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-6">
                    You're now subscribed! Check your inbox for your starter deeptech syllabus guide.
                  </p>
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-serif text-xl text-center text-gray-900 dark:text-white mb-1">
                    Get Free Syllabus Drops
                  </h3>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
                    Join 150,000+ students and faculty members.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your student/faculty email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm text-gray-900 dark:text-white outline-none focus:border-orange-500 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-xl btn-brand-gradient text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isLoading ? 'Subscribing...' : 'Subscribe to Syllabus Updates'}</span>
                    </button>
                  </form>

                  <p className="text-[11px] text-gray-400 text-center mt-4">
                    Zero spam. Unsubscribe at any time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;