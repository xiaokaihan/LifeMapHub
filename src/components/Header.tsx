import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: 'about' },
    { name: 'Journey', href: 'journey' },
    { name: 'Now', href: 'now' },
    { name: 'Future', href: 'future' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  // 滚动配置
  const scrollConfig = {
    smooth: true,
    duration: 800, // 快速滚动：800ms
    offset: -80,   // 考虑固定头部的偏移量
    spy: true,     // 启用滚动监听
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            smooth={scrollConfig.smooth}
            duration={600} // logo 点击稍快一些
            offset={0}     // 回到顶部不需要偏移
            className="text-2xl font-bold cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LifeMapHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={scrollConfig.smooth}
                duration={scrollConfig.duration}
                offset={scrollConfig.offset}
                spy={scrollConfig.spy}
                activeClass="text-blue-600 dark:text-blue-400 font-semibold"
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? '关闭菜单' : '打开菜单'}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={scrollConfig.smooth}
                  duration={scrollConfig.duration}
                  offset={scrollConfig.offset}
                  spy={scrollConfig.spy}
                  activeClass="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 