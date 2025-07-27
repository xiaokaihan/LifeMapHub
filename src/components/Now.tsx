import React from 'react';
import { motion } from 'framer-motion';

interface SkillTag {
  name: string;
  category: string;
}

const Now: React.FC = () => {
  const techStack: SkillTag[] = [
    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
  ];

  const learning = [
    { name: 'AI 工具开发', category: 'Tech' },
    { name: '雅思备考', category: 'Language' },
    { name: '项目管理', category: 'Soft Skills' },
  ];

  const priorities = [
    {
      title: '职业发展',
      description: '深入 AI 领域，提升技术广度与深度',
      icon: '💼',
    },
    {
      title: '英语提升',
      description: '准备雅思考试，提高英语交流能力',
      icon: '📚',
    },
    {
      title: '家庭陪伴',
      description: '平衡工作与家庭时间，关注孩子成长',
      icon: '👨‍👩‍👧‍👦',
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center mb-12">现在的我</h2>
        
        {/* Current Status */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">技术栈</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">正在学习</h3>
            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item.name}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Current Priorities */}
        <div className="grid md:grid-cols-3 gap-8">
          {priorities.map((priority) => (
            <motion.div
              key={priority.title}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="text-4xl mb-4">{priority.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{priority.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {priority.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Now; 