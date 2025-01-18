// pages/index.tsx
import Features from '@/components/default/Features';
import Footer from '@/components/default/Footer';
import Header from '@/components/default/Header';
import Hero from '@/components/default/Hero';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
