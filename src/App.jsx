import React from 'react';
import Header from './components/Header';
import HeroV2 from './components/HeroV2';
import HeroV3 from './components/HeroV3';

import LogoTicker from './components/LogoTicker';
import Features from './components/Features';
import Stats from './components/Stats';
import CustomerSegments from './components/CustomerSegments';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ArrowBackground from './components/ArrowBackground';
import TestimonialSlider from './components/TestimonialSlider';
import FAQSection from './components/FAQSection';

import VideoTestimonials from './components/VideoTestimonials';
import TracxnAI from './components/TracxnAI';

function App() {
  return (
    <div className="App">
      <ArrowBackground />
      <Header />
      <main>
        <HeroV3 />

        <AnimatedSection>
          <CustomerSegments />
        </AnimatedSection>

        <AnimatedSection>
          <Features />
        </AnimatedSection>

        <AnimatedSection>
          <Stats />
        </AnimatedSection>

        <AnimatedSection>
          <TestimonialSlider />
        </AnimatedSection>

        <AnimatedSection>
          <TracxnAI />
        </AnimatedSection>

        <AnimatedSection>
          <VideoTestimonials />
        </AnimatedSection>

        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
