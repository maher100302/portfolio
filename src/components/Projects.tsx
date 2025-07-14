
import { ExternalLink, Github, Zap, Users, ShoppingCart, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'LearnHub',
      description: 'A modern online learning platform with course management, video lessons, quizzes, and progress tracking. Built with Next.js for optimal performance and SEO, featuring a clean, user-friendly interface for both students and instructors.',
      image: 'https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [
        'Next.js 14',
        'TypeScript',
        'Tailwind CSS',
        'Shadcn/UI',
        'React Query',
        'Zustand',
        'Stripe Integration',
        'Firebase Auth'
      ],
      liveUrl: '#',
      githubUrl: '#',
      icon: Brain,
      featured: true,
    },
    {
      id: 2,
      title: 'FitGear Pro Shop',
      description: 'A modern e-commerce platform for premium gym equipment, featuring product catalog, user authentication, and secure checkout. Built with Next.js and Tailwind CSS for a seamless shopping experience.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
        'JWT Auth',
        'Stripe Integration'
      ],
      liveUrl: '#',
      githubUrl: '#',
      icon: ShoppingCart,
      featured: true,
    },
    {
id: 3,
      title: 'Scylla App',
      description: 'Industrial monitoring application built with React Native and Django for real-time equipment tracking and maintenance scheduling.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Django', 'REST API', 'Redux', 'WebSockets'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Zap,
      featured: true,
    },
    {
id: 3,
      title: 'Skill-Swap Platform',
      description: 'A peer-to-peer skill exchange platform where users can teach and learn from each other through video calls and interactive sessions. Built with modern web technologies for a seamless user experience.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [
        'Next.js 15',
        'TypeScript',
        'Tailwind CSS',
        'Supabase',
        'PostgreSQL',
        'Real-time Chat',
        'Authentication',
        'File Storage'
      ],
      liveUrl: '#',
      githubUrl: '#',
      icon: Users,
      featured: true,
    },
    {
id: 4,
      title: 'University of Gabès Website',
      description: 'Responsive university website with dynamic content management and event calendar.',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Users,
      featured: false,
    },
    {
id: 5,
      title: 'ISIMG Mobile App',
      description: 'Mobile application for ISIM Gabès students with course materials, schedules, and notifications.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Ionic', 'Angular', 'Firebase', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Brain,
      featured: false,
    },
    {
id: 6,
      title: 'STB Bank App',
      description: 'Mobile banking prototype with secure authentication and transaction features.',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'Android Studio', 'Firebase', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
      icon: ShoppingCart,
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Highlighting my experience in mobile and web application development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30">
                      <project.icon className="text-blue-400" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30">
                      <project.icon className="text-blue-400" size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;