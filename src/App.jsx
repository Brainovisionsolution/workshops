import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import ProposalForm from './components/ProposalForm';
import SyllabusDetailPage from './components/SyllabusDetailPage';
import TracksCatalogPage from './components/TracksCatalogPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-[#0b1120] text-gray-900 dark:text-gray-100 font-poppins selection:bg-orange-500 selection:text-white transition-colors duration-500">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/syllabus" element={<TracksCatalogPage />} />
            <Route path="/tracks" element={<TracksCatalogPage />} />
            <Route path="/syllabus/:trackId" element={<SyllabusDetailPage />} />
            <Route path="/track/:trackId" element={<SyllabusDetailPage />} />
            <Route path="/proposal" element={<ProposalForm />} />
            <Route path="/events" element={<TracksCatalogPage />} />
            <Route path="/allevents" element={<TracksCatalogPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
