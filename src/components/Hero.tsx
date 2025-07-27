import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6">
            <span className="block text-gray-900 dark:text-white">你的名字</span>
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              探索人生路径的开发者
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            通过技术与创新，探索并记录人生的每一个重要时刻
          </p>
          
          <Link
            to="journey"
            smooth={true}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            查看我的旅程
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 