/**
 * Cyber Hygiene Practices Among College Students and Faculty
 * Academic Field Project Web Presentation
 * Theme: Black + White + Red Accent
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundScrollEffect } from './components/BackgroundScrollEffect';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Objectives } from './components/Objectives';
import { Methodology } from './components/Methodology';
import { SurveyCTA } from './components/SurveyCTA';
import { Findings } from './components/Findings';
import { CyberHygieneAreas } from './components/CyberHygieneAreas';
import { Recommendations } from './components/Recommendations';
import { Conclusion } from './components/Conclusion';
import { Limitations } from './components/Limitations';
import { References } from './components/References';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-red-600/20 selection:text-red-700 relative transition-colors duration-200">
      
      {/* Background Interactive Scroll Effect & Progress Tracker */}
      <BackgroundScrollEffect />

      {/* Interactive Cyber Mouse Cursor & Hover Glow */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO / HOME SECTION */}
        <Hero />

        {/* 2. PROJECT OVERVIEW */}
        <Overview />

        {/* 3. RESEARCH OBJECTIVES */}
        <Objectives />

        {/* 4. METHODOLOGY */}
        <Methodology />

        {/* 5. SURVEY SECTION */}
        <SurveyCTA />

        {/* 6. FINDINGS / KEY SURVEY DISCOVERIES */}
        <Findings />

        {/* 7. CYBER HYGIENE AREAS */}
        <CyberHygieneAreas />

        {/* 7. RECOMMENDATIONS */}
        <Recommendations />

        {/* 8. CONCLUSION */}
        <Conclusion />

        {/* 9. LIMITATIONS */}
        <Limitations />

        {/* 10. REFERENCES */}
        <References />

        {/* 11. TEAM */}
        <Team />
      </main>

      {/* 12. FOOTER */}
      <Footer />

    </div>
  </ThemeProvider>
);
}
