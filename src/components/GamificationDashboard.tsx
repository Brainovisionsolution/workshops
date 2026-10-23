import React, { useState } from 'react';
import { Trophy, Star, Zap, Target, Award, TrendingUp, Calendar, Users } from 'lucide-react';

const GamificationDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = {
    level: 12,
    xp: 2450,
    nextLevelXP: 3000,
    rank: 'Advanced Developer',
    totalEvents: 24,
    completedWorkshops: 18,
    hackathonsWon: 3,
    badges: 15
  };

  const badges = [
    { name: 'First Workshop', icon: Star, color: 'bg-yellow-500', earned: true },
    { name: 'Team Player', icon: Users, color: 'bg-blue-500', earned: true },
    { name: 'Code Master', icon: Trophy, color: 'bg-purple-500', earned: true },
    { name: 'Innovation Leader', icon: Zap, color: 'bg-green-500', earned: true },
    { name: 'Hackathon Winner', icon: Award, color: 'bg-red-500', earned: true },
    { name: 'Mentor Helper', icon: Target, color: 'bg-indigo-500', earned: false },
    { name: 'Community Builder', icon: Users, color: 'bg-pink-500', earned: false },
    { name: 'Tech Explorer', icon: TrendingUp, color: 'bg-orange-500', earned: false }
  ];

  const recentEvents = [
    { name: 'React Advanced Workshop', type: 'Workshop', xp: 150, date: '2024-01-10' },
    { name: 'AI Hackathon 2024', type: 'Hackathon', xp: 300, date: '2024-01-05' },
    { name: 'Node.js Masterclass', type: 'Workshop', xp: 120, date: '2023-12-28' },
    { name: 'Blockchain Challenge', type: 'Hackathon', xp: 250, date: '2023-12-20' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', xp: 4250, avatar: 'AC' },
    { rank: 2, name: 'Sarah Kumar', xp: 3890, avatar: 'SK' },
    { rank: 3, name: 'Mike Johnson', xp: 3654, avatar: 'MJ' },
    { rank: 4, name: 'You', xp: 2450, avatar: 'YU', isCurrentUser: true },
    { rank: 5, name: 'Emma Davis', xp: 2340, avatar: 'ED' }
  ];

  return (
    <section id="gamification" className="py-20 bg-background-pale dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Your Learning <span className="text-primary-yellow">Dashboard</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Track your progress, earn badges, climb the leaderboard, and showcase your achievements 
            in our gamified learning environment.
          </p>
        </div>

        {/* User Stats Overview */}
        <div className="bg-gradient-to-r from-primary-yellow to-primary-orange rounded-3xl p-8 text-white mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Level {userStats.level}</div>
              <div className="text-sm opacity-80">{userStats.rank}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{userStats.xp} XP</div>
              <div className="text-sm opacity-80">Total Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{userStats.totalEvents}</div>
              <div className="text-sm opacity-80">Events Attended</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{userStats.badges}</div>
              <div className="text-sm opacity-80">Badges Earned</div>
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Level {userStats.level + 1}</span>
              <span>{userStats.xp}/{userStats.nextLevelXP} XP</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${(userStats.xp / userStats.nextLevelXP) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'badges', label: 'Badges', icon: Award },
            { id: 'history', label: 'Event History', icon: Calendar },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-yellow text-white shadow-glow-yellow'
                  : 'bg-background-white dark:bg-dark-bg text-text-gray dark:text-dark-muted hover:bg-primary-yellow/20'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-4">Recent Achievements</h3>
                <div className="space-y-4">
                  {badges.filter(badge => badge.earned).slice(0, 3).map((badge, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${badge.color} rounded-full flex items-center justify-center`}>
                        <badge.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-charcoal dark:text-dark-text">{badge.name}</div>
                        <div className="text-sm text-text-gray dark:text-dark-muted">Recently earned</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-gray dark:text-dark-muted">Workshops Completed</span>
                    <span className="font-bold text-text-charcoal dark:text-dark-text">{userStats.completedWorkshops}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-gray dark:text-dark-muted">Hackathons Won</span>
                    <span className="font-bold text-text-charcoal dark:text-dark-text">{userStats.hackathonsWon}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-gray dark:text-dark-muted">Current Rank</span>
                    <span className="font-bold text-primary-orange">#4</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Badges Tab */}
          {activeTab === 'badges' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg text-center transition-all duration-300 ${
                    badge.earned ? 'transform hover:-translate-y-2' : 'opacity-50'
                  }`}
                >
                  <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4 ${
                    badge.earned ? '' : 'grayscale'
                  }`}>
                    <badge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-text-charcoal dark:text-dark-text mb-2">{badge.name}</h4>
                  <div className={`text-sm ${badge.earned ? 'text-green-600' : 'text-text-gray dark:text-dark-muted'}`}>
                    {badge.earned ? 'Earned' : 'Not Earned'}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Event History Tab */}
          {activeTab === 'history' && (
            <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-6">Recent Events</h3>
              <div className="space-y-4">
                {recentEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background-pale dark:bg-dark-card rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        event.type === 'Workshop' ? 'bg-blue-500' : 'bg-green-500'
                      }`}>
                        {event.type === 'Workshop' ? 
                          <Star className="w-5 h-5 text-white" /> : 
                          <Trophy className="w-5 h-5 text-white" />
                        }
                      </div>
                      <div>
                        <div className="font-semibold text-text-charcoal dark:text-dark-text">{event.name}</div>
                        <div className="text-sm text-text-gray dark:text-dark-muted">{event.type} • {event.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-orange">+{event.xp} XP</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <div className="bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-6">Top Performers</h3>
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      user.isCurrentUser 
                        ? 'bg-primary-yellow/20 border-2 border-primary-yellow' 
                        : 'bg-background-pale dark:bg-dark-card'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        user.rank === 1 ? 'bg-yellow-500' :
                        user.rank === 2 ? 'bg-gray-400' :
                        user.rank === 3 ? 'bg-orange-600' :
                        'bg-gray-500'
                      }`}>
                        {user.rank}
                      </div>
                      <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold">
                        {user.avatar}
                      </div>
                      <div>
                        <div className={`font-semibold ${user.isCurrentUser ? 'text-primary-orange' : 'text-text-charcoal dark:text-dark-text'}`}>
                          {user.name}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-text-charcoal dark:text-dark-text">{user.xp} XP</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GamificationDashboard;