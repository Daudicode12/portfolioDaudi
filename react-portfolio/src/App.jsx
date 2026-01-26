import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Server, Brain, Database, Cloud, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      title: 'Frontend Engineering',
      icon: <Code className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      techs: ['React', 'Flutter', 'Next.js', 'HTML5', 'CSS3', 'JavaScript'],
      mastery: 85
    },
    {
      title: 'Backend Architecture',
      icon: <Server className="w-12 h-12" />,
      color: 'from-red-500 to-pink-500',
      techs: ['Node.js', 'Express', 'Java', 'Spring Boot', 'RESTful APIs'],
      mastery: 88
    },
    {
      title: 'AI & Intelligence',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      techs: ['Machine Learning', 'Computer Vision', 'NLP', 'TensorFlow'],
      mastery: 75
    },
    {
      title: 'Database Systems',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      techs: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
      mastery: 82
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      techs: ['AWS', 'Docker', 'Git', 'CI/CD', 'Kubernetes'],
      mastery: 78
    }
  ];

  const projects = [
    {
      title: 'Blood Connect System',
      description: 'Lifesaving technology platform connecting blood donors with hospitals in critical moments',
      tech: ['Next.js', 'Node.js', 'MySQL', 'Real-time Matching'],
      status: 'Production Ready',
      impact: 'Healthcare Infrastructure',
      gradient: 'from-red-500 to-pink-500',
      github: 'https://github.com/Daudicode12/blood-donation-with-next.js.git',
      features: ['Real-time donor-hospital matching', 'Geolocation emergency response', 'HIPAA-compliant security']
    },
    {
      title: 'CropCare AI',
      description: 'AI-powered mobile app for crop disease detection and pest identification',
      tech: ['Flutter', 'TensorFlow', 'Computer Vision', 'Firebase'],
      status: 'Active Development',
      impact: 'AgriTech Revolution',
      gradient: 'from-green-500 to-emerald-500',
      github: 'https://github.com/Daudicode12/plant-care.git',
      features: ['95%+ accuracy disease detection', 'Instant treatment recommendations', 'Predictive crop analytics']
    },
    {
      title: 'Agri Connect',
      description: 'Digital platform empowering farmers with direct market access',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      status: 'Scaling Phase',
      impact: 'Agricultural Economics',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Transparent pricing analytics', 'Direct farmer-buyer connections', 'Supply chain optimization']
    },
    {
      title: 'Quantum Chatbot AI',
      description: 'Next-gen conversational AI for seamless user interactions',
      tech: ['Node.js', 'NLP', 'Machine Learning', 'WebSocket'],
      status: 'Beta Release',
      impact: 'Customer Experience',
      gradient: 'from-purple-500 to-indigo-500',
      features: ['Context-aware conversations', 'Multi-language support', 'Real-time optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {'<DO />'}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 hover:text-cyan-400 transition-colors"
                  onClick={() => { setActiveSection(item.toLowerCase()); setIsMenuOpen(false); }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="text-center z-10 px-6 md:px-8">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              DAVID ONYANGO
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 space-y-2">
              <p className="animate-fade-in">💻 Full-Stack Architect</p>
              <p className="animate-fade-in delay-100">🤖 AI Engineer</p>
              <p className="animate-fade-in delay-200">🚀 Digital Innovator</p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Engineering scalable solutions that bridge technology and humanity
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/Daudicode12" className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/daudislugger" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:davidonya2@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a href="#about" className="inline-block animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I architect <span className="text-cyan-400 font-semibold">next-generation applications</span> that don't just solve problems—they <span className="text-purple-400 font-semibold">redefine possibilities</span>. From intelligent AI systems to enterprise-grade platforms, I transform complex challenges into elegant, scalable solutions that drive real-world impact.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-gray-400">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">20+</div>
                <div className="text-gray-400">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
                <div className="text-3xl font-bold text-green-400">10+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-12 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className={`inline-block p-12 bg-gradient-to-r ${skill.color} rounded-lg mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  {skill.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Mastery</span>
                    <span className="text-sm font-bold text-cyan-400">{skill.mastery}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.mastery}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className={`inline-block px-4 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-semibold mb-4`}>
                  {project.status}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm text-cyan-400 font-semibold mb-2">Impact: {project.impact}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold mb-2 text-purple-400">Key Features:</div>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-400">• {feature}</li>
                    ))}
                  </ul>
                </div>

                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-8 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Open for collaboration, innovation, and creating extraordinary solutions
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:davidonya2@gmail.com" className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="font-semibold">Email</div>
              <div className="text-sm text-gray-400">davidonya2@gmail.com</div>
            </a>
            
            <a href="https://linkedin.com/in/daudislugger" target="_blank" rel="noopener noreferrer" className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-gray-400">Connect with me</div>
            </a>
            
            <a href="https://github.com/Daudicode12" target="_blank" rel="noopener noreferrer" className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="font-semibold">GitHub</div>
              <div className="text-sm text-gray-400">Check my work</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-2">⚡ "Code is poetry written in logic, and innovation is the verse that changes the world." ⚡</p>
          <p className="text-sm">© 2025 David Onyango. Engineered with precision.</p>
        </div>
      </footer>
    </div>
  );
}
