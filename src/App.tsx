import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Now from './components/Now';
import Future from './components/Future';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800">
          <Journey />
        </section>
        
        <section id="now" className="py-20">
          <Now />
        </section>
        
        <section id="future" className="py-20 bg-gray-50 dark:bg-gray-800">
          <Future />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 