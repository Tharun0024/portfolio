// src/components/Navigation.tsx - FULLY UPDATED: Purple Resume + Logo only in tab
import { useState, useEffect } from 'react';
import { Menu, X, User, GraduationCap, Target, FolderKanban, Award, FileText } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Academic & Professional Journey', href: '#education', icon: GraduationCap },
  { label: 'Vision', href: '#aspirations', icon: Target },
  { label: 'Technical Arsenal', href: '#technical-arsenal', icon: FolderKanban },
  { label: 'Achievements', href: '#achievements', icon: Award },
  { label: 'Projects', href: '#projects', icon: FolderKanban },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 rounded-xl bg-white/80 backdrop-blur-md shadow-xl border hover:bg-white transition-all"
      >
        <Menu className="w-6 h-6 text-gray-900" />
      </button>

      {/* Main navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/95 backdrop-blur-xl shadow-2xl' 
          : 'py-4 bg-white/90 backdrop-blur-xl shadow-xl'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Navbar title - Logo only in browser tab */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl md:text-2xl font-bold tracking-tight hover:text-purple-500 transition-all duration-300 bg-gradient-to-r from-gray-900 to-purple-500 bg-clip-text text-transparent"
          >
            Portfolio<span className="text-purple-500 font-normal">.</span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 relative group flex items-center gap-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {link.label}
              </button>
            ))}
            {/* Purple Resume button - Desktop */}
            <a
              href="/resume"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 border border-purple-500/30 hover:border-purple-500"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu overlay */}
          {isOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50" 
              onClick={() => setIsOpen(false)}
            >
              <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-8 flex flex-col">
                <button onClick={() => setIsOpen(false)} className="self-end p-2">
                  <X className="w-6 h-6 text-gray-900" />
                </button>
                
                <div className="flex-1 flex flex-col justify-center space-y-6 mt-8">
                  {navLinks.map((link, index) => (
                    <button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-xl font-medium text-gray-900 flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                        index === navLinks.length - 1 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-[-20px]'
                      }`}
                      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    >
                      <link.icon className="w-6 h-6" />
                      {link.label}
                    </button>
                  ))}
                  
                  {/* Purple Resume button - Mobile */}
                  <a
                    href="/resume"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3 opacity-0 translate-x-[-20px] border border-purple-500/30 hover:border-purple-500"
                    style={{ transitionDelay: '450ms' }}
                  >
                    <FileText className="w-5 h-5" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
