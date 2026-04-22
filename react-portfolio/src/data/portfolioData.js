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
    title: 'AgroVault',
    description: 'IoT-powered smart storage monitoring system using machine learning to reduce post-harvest losses.',
    fullDescription: 'AgroVault is an innovative agriculture technology solution that combines IoT sensors with advanced machine learning algorithms to monitor storage conditions in real-time. It helps farmers and agricultural businesses reduce post-harvest losses by providing actionable insights on temperature, humidity, and other critical environmental factors.',
    stack: ['React', 'Node.js (Express)', 'Machine Learning', 'IoT Integration'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
    codeUrl: 'https://github.com/Raxcore-dev/AgroVault.git',
    category: ['AI', 'IoT'],
    featured: true,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Crop Care System',
    description: 'A system designed to monitor crop health and provide actionable insights for farmers.',
    fullDescription: 'Crop Care System is an intelligent monitoring platform that uses computer vision and machine learning to detect crop diseases and health issues early. Farmers receive real-time alerts and recommendations to optimize their crop yield and reduce losses.',
    stack: ['React', 'Machine Learning', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=600&fit=crop',
    category: ['AI', 'Agriculture'],
    featured: false,
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Crop Recommendation System',
    description: 'A machine learning-based system that recommends the best crops to plant based on environmental conditions.',
    fullDescription: 'This intelligent recommendation engine analyzes soil quality, climate data, weather patterns, and historical yields to suggest optimal crops for any given location. It helps farmers make data-driven decisions to maximize profitability and sustainability.',
    stack: ['Python', 'Machine Learning', 'APIs'],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
    category: ['AI', 'Agriculture'],
    featured: false,
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Blood Connect',
    description: 'A web platform that connects blood donors with recipients to improve emergency response and save lives.',
    fullDescription: 'Blood Connect is a critical healthcare platform that revolutionizes blood donation by creating direct connections between donors and recipients. During emergencies, hospitals can quickly locate compatible donors, and donors can find nearby patients in need.',
    stack: ['React', 'Node.js (Express)', 'Database'],
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&h=600&fit=crop',
    category: ['Healthcare', 'Web'],
    featured: false,
    rating: 4.7,
  },
  {
    id: 5,
    title: 'Foundation of Christ Church Website',
    description: 'A modern website for church communication, events, and community engagement.',
    fullDescription: 'Built for Foundation of Christ Church, this responsive website provides a platform for church members and visitors to access service times, events, sermons, and community information. It features an elegant design that reflects the church\'s values and mission.',
    stack: ['React', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop',
    codeUrl: 'https://github.com/Daudicode12/foundationWeb.git',
    category: ['Web'],
    featured: false,
    rating: 4.4,
  },
  {
    id: 6,
    title: 'School Fee Management System',
    description: 'A full-stack system for managing school payments and tracking financial records.',
    fullDescription: 'This comprehensive school fee management system streamlines payment processing, tracks financial records, and provides detailed analytics for school administrators. It supports multiple payment methods and generates automated receipts and reports.',
    stack: ['React', 'Node.js (Express)', 'MySQL/PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    codeUrl: 'https://github.com/Daudicode12/school-payment-sysstem.git',
    category: ['Fullstack', 'Education'],
    featured: false,
    rating: 4.6,
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
