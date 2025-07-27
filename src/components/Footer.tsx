import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © 2025 LifeMapHub. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            "每一步都是新的开始，每一天都是新的机会"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 