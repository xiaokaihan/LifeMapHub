import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const tags = ['Java 开发者', 'AI 探索者', '父亲'];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center mb-12">关于我</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
              <img
                src="/placeholder-avatar.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                你好！我是一名充满热情的技术开发者，专注于探索AI与人类发展的无限可能。
                在过去的几年里，我不断在技术领域深耕，同时保持对新技术的学习热情。
              </p>
              
              <p className="text-lg">
                作为一个终身学习者，我相信技术不仅能改变世界，更能帮助每个人实现自己的人生价值。
                在工作之外，我也是一个热爱家庭的父亲，平衡事业与生活是我追求的目标。
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 