import { useEffect, useRef, useState } from 'react';
import { User, MapPin, Calendar, Heart, Code, Coffee, Star } from 'lucide-react';
import meImage from '../assets/me.jpeg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    { icon: User, label: 'Experience', value: '3+ Years', color: 'text-blue-400' },
    { icon: MapPin, label: 'Location', value: 'Tataouine, Tunisia', color: 'text-emerald-400' },
    { icon: Calendar, label: 'Education', value: 'ISIM Gabès', color: 'text-purple-400' },
    { icon: Heart, label: 'Focus', value: 'Mobile & Web Dev', color: 'text-pink-400' },
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+', color: 'from-blue-500 to-cyan-500' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+', color: 'from-amber-500 to-orange-500' },
    { icon: Star, label: 'Client Satisfaction', value: '99%', color: 'from-emerald-500 to-green-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            IT student and developer passionate about creating innovative mobile and web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual Elements */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-400/30">
                    <img 
                      src={meImage} 
                      alt="Maher Alaya" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 10%' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Maher Alaya</h3>
                    <p className="text-blue-400 font-medium">Mobile & Web Developer</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  IT student at ISIM Gabès with a strong focus on mobile and web development. 
                  I'm passionate about learning and applying new technologies to create meaningful digital solutions. 
                  Active in tech communities like IEEE and AIESEC, and always looking to grow my skills.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value, color }, index) => (
                <div
                  key={label}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-800/50 rounded-lg">
                      <Icon className={color} size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{label}</p>
                      <p className="text-white font-semibold">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value, color }, index) => (
                <div
                  key={label}
                  className={`text-center p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-400/30 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${color} rounded-lg mb-2`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></span>
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With over 5 years of experience in full-stack development, I've evolved from a curious 
                  beginner to a seasoned developer who thrives on turning complex challenges into elegant 
                  solutions. My journey has taken me through various industries, from fintech startups 
                  to established e-commerce platforms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full mr-4"></span>
                  What Drives Me
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the transformative power of technology. Whether it's building scalable 
                  web applications, optimizing user experiences, or architecting robust backend systems, 
                  I approach each project with curiosity, precision, and a commitment to excellence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-4"></span>
                  Beyond the Code
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not immersed in code, you'll find me exploring emerging technologies, 
                  contributing to open-source projects, or mentoring aspiring developers. I'm a firm 
                  believer in continuous learning and the power of community-driven growth.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </button>
              <button className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 font-semibold rounded-lg transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;