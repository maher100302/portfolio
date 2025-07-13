import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        {/* Floating Orbs */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${mousePosition.x * 0.01}px`,
              top: `${mousePosition.y * 0.01}px`,
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
            style={{
              right: `${mousePosition.x * 0.005}px`,
              bottom: `${mousePosition.y * 0.005}px`,
            }}
          ></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Profile Section */}
          <div className="relative">
            <div className="mx-auto w-48 h-48 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center text-6xl font-bold text-white backdrop-blur-sm border border-white/10">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    JD
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 p-2 bg-emerald-500 rounded-full animate-bounce">
                <Sparkles className="text-white" size={16} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-blue-400 font-medium tracking-wider uppercase">
                Full-Stack Developer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Creating Digital</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  Experiences
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful, scalable applications with modern technologies 
              and exceptional user experiences.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </button>
            
            <button 
              onClick={scrollToNext}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            {[
              { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:john@example.com', label: 'Email', color: 'hover:text-emerald-400' },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`group p-4 text-gray-400 ${color} bg-gray-800/30 hover:bg-gray-700/50 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-gray-600`}
                aria-label={label}
              >
                <Icon size={24} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-all duration-300 animate-bounce group"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;