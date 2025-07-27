import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: 'education' | 'career' | 'milestone';
}

const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'AI 技术探索',
    description: '开始深入研究 AI 技术，并将其应用于实际项目中',
    category: 'milestone',
  },
  {
    year: '2021',
    title: '高级开发工程师',
    description: '负责核心业务系统的架构设计与开发',
    category: 'career',
  },
  {
    year: '2019',
    title: '研究生毕业',
    description: '计算机科学与技术硕士学位',
    category: 'education',
  },
  // 添加更多经历...
];

const Journey: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center mb-12">我的旅程</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800" />
          
          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="w-5/12">
                <div className={`p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700 ${
                  item.category === 'education' ? 'border-l-4 border-green-500' :
                  item.category === 'career' ? 'border-l-4 border-blue-500' :
                  'border-l-4 border-purple-500'
                }`}>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Journey; 