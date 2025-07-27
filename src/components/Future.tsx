import React from 'react';
import { motion } from 'framer-motion';

interface Plan {
  title: string;
  description: string;
  timeline: string;
  goals: string[];
}

const Future: React.FC = () => {
  const plans: Plan[] = [
    {
      title: '短期目标',
      timeline: '1年内',
      description: '提升技术深度与广度',
      goals: [
        '掌握 AI 应用开发',
        '考取雅思 7.0+',
        '带领团队完成重点项目',
      ],
    },
    {
      title: '中期目标',
      timeline: '2-3年',
      description: '扩展职业发展空间',
      goals: [
        '成为技术专家',
        '建立个人技术品牌',
        '尝试创业项目',
      ],
    },
    {
      title: '长期目标',
      timeline: '3-5年',
      description: '实现职业理想',
      goals: [
        '成为技术领军人物',
        '建立自己的企业',
        '帮助更多人成长',
      ],
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
        <h2 className="text-center mb-12">未来规划</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800 hidden md:block" />
          
          {/* Plans */}
          <div className="space-y-12 relative">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {plan.timeline}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {plan.description}
                    </p>
                    <ul className="space-y-2">
                      {plan.goals.map((goal) => (
                        <li
                          key={goal}
                          className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                          <span className="mr-2">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline Point */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Future; 