import React from 'react';
import Hero from './Hero';
import FeaturedTracksSection from './FeaturedTracksSection';
import LiveWorkshopAnalytics from './LiveWorkshopAnalytics';
import WorkshopPhotoShowcase from './WorkshopPhotoShowcase';
import WorkshopBenefits from './WorkshopBenefits';
import WorkshopProcess from './WorkshopProcess';
import TrustedColleges from './TrustedColleges';
import Testimonials from './Testimonials';
import InteractiveEventMap from './InteractiveEventMap';
import NewsletterSignup from './NewsletterSignup';

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      {/* 1. Stylish & Professional Apple-Grade Hero */}
      <Hero />

      {/* 2. Core 9 Tech Tracks & 3D Interactive Syllabi Cards */}
      <FeaturedTracksSection />

      {/* 3. Real Workshop Impact & Animated Data Analytics */}
      <LiveWorkshopAnalytics />

      {/* 4. Live Campus Photography & Workshop Showcase Carousel */}
      <WorkshopPhotoShowcase />

      {/* 5. Workshop Benefits */}
      <WorkshopBenefits />

      {/* 4. 5-Step Execution Process */}
      <WorkshopProcess />

      {/* 5. Partner Colleges & Universities */}
      <TrustedColleges />

      {/* 6. Success Stories & Testimonials */}
      <Testimonials />

      {/* 7. Pan-India Academic Coverage Map */}
      <InteractiveEventMap />

      {/* 8. Newsletter Updates */}
      <NewsletterSignup />
    </main>
  );
};

export default HomePage;
