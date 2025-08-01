import React from 'react';
import Header from './components/Header';
import ScrollProgressBar from './components/ScrollProgressBar';
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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 custom-scrollbar">
      {/* 滚动进度条 */}
      <ScrollProgressBar />
      
      {/* 固定头部 */}
      <Header />
      
      <main className="pt-16"> {/* 为固定头部预留空间 */}
        {/* Hero 区域 */}
        <Hero />
        
        {/* About 区域 */}
        <section 
          id="about" 
          className="py-20 scroll-mt-16 transition-all duration-500 ease-in-out"
        >
          <About />
        </section>
        
        {/* Journey 区域 */}
        <section 
          id="journey" 
          className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-16 transition-all duration-500 ease-in-out"
        >
          <Journey />
        </section>
        
        {/* Now 区域 */}
        <section 
          id="now" 
          className="py-20 scroll-mt-16 transition-all duration-500 ease-in-out"
        >
          <Now />
        </section>
        
        {/* Future 区域 */}
        <section 
          id="future" 
          className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-16 transition-all duration-500 ease-in-out"
        >
          <Future />
        </section>
        
        {/* Projects 区域 */}
        <section 
          id="projects" 
          className="py-20 scroll-mt-16 transition-all duration-500 ease-in-out"
        >
          <Projects />
        </section>
        
        {/* Contact 区域 */}
        <section 
          id="contact" 
          className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-16 transition-all duration-500 ease-in-out"
        >
          <Contact />
        </section>
      </main>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}

export default App; 