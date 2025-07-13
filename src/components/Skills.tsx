import { useState, useEffect, useRef } from 'react';
import { Code, Database, Smartphone, Wrench } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'Ionic', level: 80 },
        { name: 'Android (Kotlin)', level: 75 },
      ],
    },
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'React', level: 75 },
      ],
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'PHP/Symfony', level: 85 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Django', level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX Design', level: 80 },
        { name: '3D Modeling', level: 70 },
      ],
    },
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
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical expertise across mobile, web, and design technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>

              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${level}%` : '0%',
                          transitionDelay: `${skills.indexOf({ name, level }) * 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
              'PostgreSQL', 'Git', 'Figma', 'Tailwind CSS', 'REST APIs'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-blue-400/50 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;