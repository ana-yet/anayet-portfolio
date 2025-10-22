export const personalInfo = {
  name: "MD ANAYET MIAH",
  title: "MERN Stack Developer",
  email: "mdanayet.dev@gmail.com",
  phone: "+88 01733-552322",
  location: "Habiganj, Bangladesh",
  avatar: "/images/avatar.jpg",
  bio: "Crafting scalable web applications with MongoDB, Express, React, and Node.js. Turning ideas into elegant solutions.",
  availability: "available", // available, busy, unavailable
  social: {
    github: "https://github.com/ana-yet",
    linkedin: "https://linkedin.com/in/ana-yet",
    twitter: "https://x.com/md_anayet_m",
    dev: "https://dev.to/johndoe",
    dribbble: "https://dribbble.com/johndoe",
  },
};

export const techStack = [
  {
    id: 1,
    name: "MongoDB",
    icon: "SiMongodb",
    color: "#47A248",
    proficiency: 90,
    category: "database",
  },
  {
    id: 2,
    name: "Express.js",
    icon: "SiExpress",
    color: "#FFFFFF",
    proficiency: 85,
    category: "backend",
  },
  {
    id: 3,
    name: "React.js",
    icon: "FaReact",
    color: "#61DAFB",
    proficiency: 95,
    category: "frontend",
  },
  {
    id: 4,
    name: "Node.js",
    icon: "FaNode",
    color: "#339933",
    proficiency: 92,
    category: "backend",
  },
  {
    id: 5,
    name: "Next.js",
    icon: "SiNextdotjs",
    color: "#FFFFFF",
    proficiency: 88,
    category: "frontend",
  },
  // {
  //   id: 6,
  //   name: "TypeScript",
  //   icon: "SiTypescript",
  //   color: "#3178C6",
  //   proficiency: 82,
  //   category: "language",
  // },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06B6D4",
    proficiency: 90,
    category: "frontend",
  },
  {
    id: 7,
    name: "Git",
    icon: "FaGitAlt",
    color: "#F05032",
    proficiency: 88,
    category: "tools",
  },
  // {
  //   id: 9,
  //   name: "Docker",
  //   icon: "FaDocker",
  //   color: "#2496ED",
  //   proficiency: 75,
  //   category: "devops",
  // },
  // {
  //   id: 10,
  //   name: "AWS",
  //   icon: "FaAws",
  //   color: "#FF9900",
  //   proficiency: 70,
  //   category: "devops",
  // },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with payment integration, real-time inventory, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    tags: ["MongoDB", "React", "Node.js", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    status: "live",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "WebSocket-powered chat app with rooms, file sharing, typing indicators, and message encryption.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    tags: ["MongoDB", "React", "Socket.io", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/chat",
    status: "live",
    featured: true,
  },
  {
    id: 3,
    title: "Project Management Tool",
    description:
      "Kanban-style project management with drag-and-drop, team collaboration, and analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["MongoDB", "Next.js", "TypeScript", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/pm-tool",
    status: "in-progress",
    featured: true,
  },
  {
    id: 4,
    title: "Blogging Platform",
    description:
      "Medium-like blogging platform with markdown editor, comments, likes, and SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    tags: ["MongoDB", "React", "Express", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/blog",
    status: "live",
    featured: false,
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description:
      "Business intelligence dashboard with real-time data visualization and custom reports.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["MongoDB", "React", "D3.js", "GraphQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/analytics",
    status: "live",
    featured: false,
  },
  {
    id: 6,
    title: "Social Network App",
    description:
      "Full-featured social platform with posts, stories, messaging, and friend connections.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["MongoDB", "React Native", "Socket.io", "AWS S3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/social",
    status: "live",
    featured: false,
  },
];

export const skills = {
  frontend: [
    { name: "React.js", level: "Expert" },
    { name: "JavaScript/ES6+", level: "Expert" },
    { name: "CSS/Tailwind", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "HTML5", level: "Expert" },
    { name: "Responsive Design", level: "Expert" },
  ],
  backend: [
    { name: "Node.js", level: "Expert" },
    { name: "Express.js", level: "Expert" },
    { name: "MongoDB", level: "Advanced" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "JWT/Auth", level: "Advanced" },
    { name: "GraphQL", level: "Intermediate" },
  ],
  tools: [
    { name: "Git/GitHub", level: "Expert" },
    { name: "Docker", level: "Advanced" },
    { name: "AWS", level: "Intermediate" },
    { name: "CI/CD", level: "Advanced" },
    { name: "Linux/Bash", level: "Advanced" },
    { name: "Testing (Jest)", level: "Intermediate" },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Senior MERN Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    current: true,
    description:
      "Leading development of enterprise-level web applications using MERN stack. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Architected microservices handling 1M+ daily users",
      "Reduced API response time by 60%",
      "Led team of 5 developers",
    ],
    color: "primary",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2021 - 2023",
    current: false,
    description:
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with design team for optimal UX.",
    achievements: [
      "Built 10+ production applications",
      "Implemented CI/CD pipelines",
      "Improved code coverage to 85%",
    ],
    color: "secondary",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "WebAgency Pro",
    period: "2020 - 2021",
    current: false,
    description:
      "Started my professional journey building responsive websites and learning full-stack development fundamentals.",
    achievements: [
      "Converted designs to responsive code",
      "Collaborated with senior developers",
      "Learned MERN stack fundamentals",
    ],
    color: "accent",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO @ TechCorp",
    avatar: "https://i.pravatar.cc/100?img=12",
    content:
      "John is an exceptional developer. His expertise in MERN stack helped us scale our platform to handle millions of users. Highly recommended!",
    rating: 5,
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder @ StartupXYZ",
    avatar: "https://i.pravatar.cc/100?img=33",
    content:
      "Working with John was a game-changer. He delivered our MVP in record time with clean, maintainable code. A true professional!",
    rating: 5,
    linkedin: "https://linkedin.com/in/michaelchen",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/100?img=47",
    content:
      "John's attention to detail and problem-solving skills are outstanding. He consistently delivers high-quality work and is great to collaborate with.",
    rating: 5,
    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
];

export const githubStats = {
  contributions: 500,
  repositories: 45,
  stars: 234,
  followers: 156,
};

export const codeSnippet = `// Express.js REST API with Error Handling
const express = require('express');
const router = express.Router();

// Async handler wrapper
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Get user profile
router.get('/profile/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ success: true, data: user });
}));`;
