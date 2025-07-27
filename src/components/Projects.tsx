import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'AI 助手平台',
      description: '基于大语言模型的智能助手平台，提供多场景的 AI 服务支持',
      techStack: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      link: 'https://github.com/yourusername/ai-assistant',
      image: '/project-1.jpg',
    },
    {
      title: '企业级微服务框架',
      description: '基于 Spring Cloud 的微服务架构，支持高并发、高可用的企业级应用',
      techStack: ['Java', 'Spring Cloud', 'Docker', 'Kubernetes'],
      link: 'https://github.com/yourusername/microservices',
      image: '/project-2.jpg',
    },
    {
      title: '智能数据分析平台',
      description: '结合机器学习的数据分析平台，提供可视化的数据洞察',
      techStack: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      link: 'https://github.com/yourusername/data-analytics',
      image: '/project-3.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center mb-12">代表项目</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  查看项目
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 