import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaNodeJs, FaVuejs, FaFire, FaDatabase, FaCloud } from 'react-icons/fa';


import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg5 from '../assets/project5.avif';



export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML','CSS','JavaScript','React','Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'Coding',
    icon: FaCode,
    description: 'Implementing logical and structured code to solve real-world programming challenges.',
    tags: ['C', 'C++', 'Java', 'Python']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Postman','Vercel', 'MS Word', 'Notepad']
  }
];



export const projects = [
  {
    title: "Microdome",
    description: "Microdome is a coaching platform for different M.Sc. biology entrance exams, providing courses, study materials, and smooth student–educator interaction.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://www.microdomeclasses.in/",
    code: "https://github.com/GuptaRohit2001/microdome",
  },
  {
    title: "Chat App",
    description: "A real-time chat application built for fast and interactive communication, offering text messaging, emoji support, file sharing, and a smooth user experience.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://chat-app-phi-bay-81.vercel.app/login",
    code: "https://github.com/GuptaRohit2001/chat-app",
  },
  {
    title: "Dairy Management System",
    description: "A dairy management system built for milk collection and sales, managing records, tracking inventory, handling billing, and ensuring smooth daily dairy operations.",
    image: projectImg2,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://smart-dairy-manager.vercel.app/login",
    code: "https://github.com/GuptaRohit2001/dairy-management-system",
  },
];


export const workData = [
  {
    role: "Masters of Computer Application",
    company: "Jadavpur University",
    duration: "2024 - Present",
    description: "Pursuing Master of Computer Applications (MCA) at Jadavpur University, focusing on software development, database management, and modern computing technologies.",
    color: "purple"
  },
  {
    role: "B.Sc. (Hons.) in Mathematics",
    company: "University of Calcutta",
    duration: "2020 - 2023",
    description: "Graduated with B.Sc. (Hons.) in Mathematics from the University of Calcutta, mastering quantitative and logical reasoning skills.",
    color: "pink"
  }
];
