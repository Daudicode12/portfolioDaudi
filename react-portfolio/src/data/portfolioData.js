export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroData = {
  name: 'David Onyango',
  tagline: 'Frontend Developer | Building Modern Web Experiences',
  subtitle:
    'I create immersive, high-performance digital products with clean architecture and futuristic user experiences.',
};

export const stats = [
  { label: 'Years Building', value: '5+' },
  { label: 'Projects Delivered', value: '20+' },
  { label: 'Core Technologies', value: '12+' },
];

export const aboutContent = {
  intro: "I am a full-stack developer passionate about building scalable web applications and intelligent systems that solve real-world problems.",
  description: "With a strong foundation in both frontend and backend development, I specialize in crafting seamless digital experiences. My expertise spans React for dynamic frontend interfaces and Java (Spring Boot) / Node.js (Express) for robust backend systems. I'm proficient in designing and managing databases like PostgreSQL and MySQL, with a keen interest in building scalable architectures using microservices patterns. I'm passionate about emerging technologies including Machine Learning and IoT integration, with hands-on experience in projects like AgroVault that solve real-world challenges in agriculture and technology.",
  cta: "I'm always open to collaborating on innovative projects and opportunities.",
};

export const aboutHighlights = [
  { 
    title: 'Full-Stack Development',
    icon: '⚡',
    description: 'Frontend to backend, I build complete digital products.'
  },
  { 
    title: 'API Design & Integration',
    icon: '🔗',
    description: 'Robust RESTful APIs and seamless integrations.'
  },
  { 
    title: 'Microservices Architecture',
    icon: '🏗️',
    description: 'Scalable systems designed for growth.'
  },
  { 
    title: 'Machine Learning & IoT',
    icon: '🤖',
    description: 'Intelligent systems for real-world problems.'
  },
  { 
    title: 'Database Design',
    icon: '💾',
    description: 'Optimized data structures and queries.'
  },
  { 
    title: 'Performance Optimization',
    icon: '⚙️',
    description: 'Fast, efficient, production-ready code.'
  },
];

export const skillsCategories = [
  {
    id: 'backend',
    name: 'Backend Development',
    icon: '⚙️',
    color: '#ff0080',
    colorClass: 'neon-pink',
    skills: [
      { name: 'Java (Spring Boot)', level: 85, icon: '☕' },
      { name: 'Node.js (Express)', level: 88, icon: '🟩' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: '✨',
    color: '#00ffff',
    colorClass: 'neon-cyan',
    skills: [
      { name: 'React.js', level: 93, icon: '⚛️' },
      { name: 'Modern JavaScript (ES6+)', level: 90, icon: '📜' },
      { name: 'HTML5 & CSS3', level: 92, icon: '🎨' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: '🗄️',
    color: '#a65dff',
    colorClass: 'neon-purple',
    skills: [
      { name: 'PostgreSQL', level: 86, icon: '🐘' },
      { name: 'MySQL', level: 84, icon: '🐬' },
    ],
  },
  {
    id: 'api',
    name: 'API & Integration',
    icon: '🔌',
    color: '#00ff80',
    colorClass: 'neon-green',
    skills: [
      { name: 'REST API Development', level: 89, icon: '🔗' },
      { name: 'API Integration', level: 87, icon: '🔀' },
      { name: 'Postman Testing', level: 88, icon: '📮' },
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture & Systems',
    icon: '🏗️',
    color: '#ffff00',
    colorClass: 'neon-yellow',
    skills: [
      { name: 'Microservices Architecture', level: 82, icon: '🧩' },
    ],
  },
  {
    id: 'emerging',
    name: 'Emerging Technologies',
    icon: '🚀',
    color: '#3a7dff',
    colorClass: 'neon-blue',
    skills: [
      { name: 'Machine Learning', level: 78, icon: '🤖' },
      { name: 'IoT Integration', level: 75, icon: '📡' },
    ],
  },
];

export const skills = [
  { name: 'React', level: 93, color: 'var(--neon-cyan)' },
  { name: 'JavaScript', level: 90, color: 'var(--neon-blue)' },
  { name: 'TypeScript', level: 82, color: 'var(--neon-purple)' },
  { name: 'Node.js', level: 84, color: 'var(--neon-pink)' },
  { name: 'Tailwind CSS', level: 88, color: 'var(--neon-cyan)' },
  { name: 'REST APIs', level: 86, color: 'var(--neon-blue)' },
];

export const projects = [
  {
    id: 1,
    title: 'Foundation of Christ Church Website',
    description:
      'A modern website developed for a church to provide information, events, and community engagement.',
    stack: ['React', 'HTML', 'CSS', 'JavaScript'],
    image: '/images/placeholder1.svg',
    codeUrl: 'https://github.com/Daudicode12/foundationWeb.git',
    category: 'Web',
    featured: false,
  },
  {
    id: 2,
    title: 'AgroVault',
    description:
      'A smart agriculture storage monitoring system that integrates IoT and machine learning to monitor conditions and reduce post-harvest losses.',
    stack: ['React', 'Node.js', 'Machine Learning', 'IoT Integration'],
    image: '/images/placeholder2.svg',
    codeUrl: 'https://github.com/Raxcore-dev/AgroVault.git',
    category: 'IoT',
    featured: true,
  },
  {
    id: 3,
    title: 'School Fee Management System',
    description:
      'A web-based system for managing school fee payments, tracking transactions, and improving financial transparency.',
    stack: ['React', 'Node.js', 'MySQL'],
    image: '/images/placeholder3.svg',
    codeUrl: 'https://github.com/Daudicode12/school-payment-sysstem.git',
    category: 'Fullstack',
    featured: false,
  },
];

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Daudicode12',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/daudislugger',
  },
  {
    label: 'Email',
    href: 'mailto:davidonya2@gmail.com',
  },
];
