import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Calendar, MapPin, ExternalLink, Terminal, Users, Cloud, Database, Code2, BookOpen, Brain, Globe, Shield, Smartphone, Server, Layout, TestTube, Layers, Cpu, FileCode, FileSearch, FileText, Box as Cube, FileText as FileTextIcon, FilePen, CalendarCheck, Award, ArrowUp, TrendingUp, CheckCircle, Star, Gamepad2 as GameController, Network, TextCursor, Box as Container, Boxes as Blocks, Bot, Glasses, Box as BoxIcon } from 'lucide-react';

const mockHackathons = [
  {
    id: '1',
    title: 'Tech Innovators Hackathon',
    organization: 'Innovate India',
    startDate: '2025-07-15',
    endDate: '2025-07-17',
    location: 'Bangalore, India',
    description: 'A national-level hackathon focused on innovative tech solutions.',
    url: 'https://example.com/hackathon1',
    icon: Code,
    color: 'text-blue-500'
  },
  {
    id: '2',
    title: 'Code for a Better India',
    organization: 'Code Brigade',
    startDate: '2025-08-01',
    endDate: '2025-08-03',
    location: 'Mumbai, India',
    description: 'A hackathon aimed at solving social problems using technology.',
    url: 'https://example.com/hackathon2',
    icon: Users,
    color: 'text-green-500'
  },
  {
    id: '3',
    title: 'AI & Machine Learning Challenge',
    organization: 'AI Innovators',
    startDate: '2025-09-10',
    endDate: '2025-09-12',
    location: 'Delhi, India',
    description: 'A hackathon focused on AI and machine learning applications.',
    url: 'https://example.com/hackathon3',
    icon: Brain,
    color: 'text-purple-500'
  },
  {
    id: '4',
    title: 'Web3 Hackathon',
    organization: 'Web3 India',
    startDate: '2025-10-01',
    endDate: '2025-10-03',
    location: 'Pune, India',
    description: 'A hackathon focused on Web3 and blockchain technologies.',
    url: 'https://example.com/hackathon4',
    icon: Network,
    color: 'text-yellow-500'
  },
  {
    id: '5',
    title: 'Mobile App Development Contest',
    organization: 'AppDev India',
    startDate: '2025-11-15',
    endDate: '2025-11-17',
    location: 'Chennai, India',
    description: 'A hackathon focused on mobile app development for Android and iOS.',
    url: 'https://example.com/hackathon5',
    icon: Smartphone,
    color: 'text-red-500'
  },
  {
    id: '6',
    title: 'Cybersecurity Hackathon',
    organization: 'Secure India',
    startDate: '2025-12-01',
    endDate: '2025-12-03',
    location: 'Hyderabad, India',
    description: 'A hackathon focused on cybersecurity and ethical hacking.',
    url: 'https://example.com/hackathon6',
    icon: Shield,
    color: 'text-teal-500'
  },
  {
    id: '7',
    title: 'Data Science Hackathon',
    organization: 'Data Science India',
    startDate: '2025-01-10',
    endDate: '2025-01-12',
    location: 'Kolkata, India',
    description: 'A hackathon focused on data science and machine learning applications.',
    url: 'https://example.com/hackathon7',
    icon: Database,
    color: 'text-orange-500'
  },
  {
    id: '8',
    title: 'Cloud Computing Challenge',
    organization: 'Cloud India',
    startDate: '2025-02-15',
    endDate: '2025-02-17',
    location: 'Ahmedabad, India',
    description: 'A hackathon focused on cloud computing and serverless technologies.',
    url: 'https://example.com/hackathon8',
    icon: Cloud,
    color: 'text-pink-500'
  },
  {
    id: '9',
    title: 'IoT Innovation Challenge',
    organization: 'IoT India',
    startDate: '2025-03-01',
    endDate: '2025-03-03',
    location: 'Mumbai, India',
    description: 'A hackathon focused on innovative IoT solutions for smart cities.',
    url: 'https://example.com/hackathon9',
    icon: Terminal,
    color: 'text-lime-500'
  },
  {
    id: '10',
    title: 'Blockchain for Social Good',
    organization: 'Blockchain India',
    startDate: '2025-04-15',
    endDate: '2025-04-17',
    location: 'Bangalore, India',
    description: 'A hackathon focused on using blockchain for social impact.',
    url: 'https://example.com/hackathon10',
    icon: Network,
    color: 'text-indigo-500'
  },
  {
    id: '11',
    title: 'AI in Healthcare Hackathon',
    organization: 'HealthTech India',
    startDate: '2025-05-01',
    endDate: '2025-05-03',
    location: 'Delhi, India',
    description: 'A hackathon focused on using AI to improve healthcare outcomes.',
    url: 'https://example.com/hackathon11',
    icon: Brain,
    color: 'text-cyan-500'
  },
  {
    id: '12',
    title: 'EdTech Innovation Challenge',
    organization: 'EdTech India',
    startDate: '2025-06-15',
    endDate: '2025-06-17',
    location: 'Chennai, India',
    description: 'A hackathon focused on creating innovative educational tools.',
    url: 'https://example.com/hackathon12',
    icon: BookOpen,
    color: 'text-rose-500'
  },
  {
    id: '13',
    title: 'FinTech Hackathon',
    organization: 'FinTech India',
    startDate: '2025-07-01',
    endDate: '2025-07-03',
    location: 'Mumbai, India',
    description: 'A hackathon focused on creating innovative financial solutions.',
    url: 'https://example.com/hackathon13',
    icon: Code2,
    color: 'text-amber-500'
  },
  {
    id: '14',
    title: 'Smart City Hackathon',
    organization: 'Smart City India',
    startDate: '2025-08-15',
    endDate: '2025-08-17',
    location: 'Pune, India',
    description: 'A hackathon focused on creating smart city solutions.',
    url: 'https://example.com/hackathon14',
    icon: Globe,
    color: 'text-sky-500'
  },
  {
    id: '15',
    title: 'Gaming Innovation Challenge',
    organization: 'GameDev India',
    startDate: '2025-09-01',
    endDate: '2025-09-03',
    location: 'Bangalore, India',
    description: 'A hackathon focused on creating innovative gaming experiences.',
    url: 'https://example.com/hackathon15',
    icon: GameController,
    color: 'text-fuchsia-500'
  }
];

const Hackathons = () => {
  const [hackathons, setHackathons] = useState(mockHackathons);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        <span style={{ color: '#3A83F6' }}>Code</span>
        <span style={{ color: '#A855F8' }}>Xprt</span>
        <span style={{ marginLeft: '10px' }}>Hackathons</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Explore a curated list of hackathons across India, spanning various technologies and skill levels.
        Find the perfect event to showcase your talent, collaborate with peers, and build innovative solutions.
      </p>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon) => (
              <motion.div
                key={hackathon.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-2">
                  <hackathon.icon className={`w-6 h-6 mr-2 ${hackathon.color}`} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {hackathon.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {hackathon.description}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {hackathon.location}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Organized by: {hackathon.organization}
                  </span>
                  <a
                    href={hackathon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Hackathons;
