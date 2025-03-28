import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Shield, 
  Smartphone, 
  Users, 
  Brain, 
  FileCode2, 
  FileText, 
  Calendar,
  MessageSquare,
  Bot,
  Gamepad,
  Cloud,
  Database,
  Terminal,
  Cpu,
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Github
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roadmaps = [
    { icon: <Globe className="h-10 w-10" />, title: "Web Development", desc: "Master frontend and backend technologies with hands-on projects and expert guidance.", color: "from-blue-500 to-cyan-400" },
    { icon: <Shield className="h-10 w-10" />, title: "Cyber Security", desc: "Learn security principles, ethical hacking, and protect systems from threats.", color: "from-emerald-500 to-teal-400" },
    { icon: <Smartphone className="h-10 w-10" />, title: "App Development", desc: "Build professional mobile apps for iOS and Android platforms.", color: "from-orange-500 to-amber-400" },
    { icon: <Gamepad className="h-10 w-10" />, title: "Game Development", desc: "Create immersive games using modern engines and programming principles.", color: "from-purple-500 to-indigo-400" },
    { icon: <Cloud className="h-10 w-10" />, title: "Cloud Computing", desc: "Master cloud platforms and deploy scalable applications.", color: "from-cyan-500 to-blue-400" },
    { icon: <Database className="h-10 w-10" />, title: "Data Science", desc: "Analyze data and build machine learning models.", color: "from-teal-500 to-green-400" }
  ];

  const tools = [
    { icon: <FileCode2 />, title: "Code Complexity Analyzer", desc: "Optimize your code quality and performance with AI-powered analysis.", color: "from-blue-500 to-cyan-400" },
    { icon: <Users />, title: "Collaborative Coding", desc: "Code together in real-time with peers and get instant feedback.", color: "from-purple-500 to-pink-400" },
    { icon: <FileText />, title: "Resume Builder", desc: "Create ATS-friendly resumes tailored for tech positions.", color: "from-emerald-500 to-teal-400" },
    { icon: <Brain />, title: "Skill Analysis", desc: "Get data-driven insights for your ideal career path.", color: "from-orange-500 to-amber-400" },
    { icon: <Calendar />, title: "Expert Meetings", desc: "Book 1-on-1 sessions with industry veterans.", color: "from-indigo-500 to-blue-400" },
    { icon: <Bot />, title: "AI Assistant", desc: "Get 24/7 support for your coding challenges.", color: "from-pink-500 to-rose-400" },
    { icon: <Terminal />, title: "Interactive Tutorials", desc: "Learn by doing with our interactive coding environment.", color: "from-teal-500 to-green-400" },
    { icon: <Cpu />, title: "Performance Metrics", desc: "Track your progress and identify areas for improvement.", color: "from-violet-500 to-purple-400" },
    { icon: <MessageSquare />, title: "Community Forum", desc: "Connect with peers and share knowledge in our community.", color: "from-cyan-500 to-blue-400" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100",
      content: "CodeXprt transformed my career. The structured learning path and mentorship were invaluable."
    },
    {
      name: "Michael Chen",
      role: "Security Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100",
      content: "The cyber security roadmap was comprehensive and up-to-date with industry standards."
    },
    {
      name: "Emily Rodriguez",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100",
      content: "The hands-on projects and code reviews helped me land my dream job in app development."
    }
  ];

  const navigate = useNavigate();

  const handleExploreRoadmapsClick = () => {
    navigate('/welcome');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <Code2 className="h-8 w-8 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                CodeXprt
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#roadmaps" className="text-white/80 hover:text-white transition-colors">Roadmaps</a>
              <a href="#tools" className="text-white/80 hover:text-white transition-colors">Tools</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              <button 
                onClick={handleExploreRoadmapsClick}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5 rounded-full animate-float"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="block text-white">Master Your</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Tech Journey
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Choose from 20+ specialized roadmaps and unlock powerful tools to accelerate your tech career.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleExploreRoadmapsClick}
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Explore Roadmaps
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Developer"
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Section */}
      <section id="roadmaps" className="relative py-24 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your <span className="text-cyan-400">Learning Path</span>
            </h2>
            <p className="text-xl text-white/80">
              Select from our curated roadmaps designed by industry experts to guide you through your tech journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roadmaps.map((path, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all transform hover:-translate-y-2">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${path.color} mb-6 transform group-hover:scale-110 transition-transform`}>
                  {path.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{path.title}</h3>
                <p className="text-white/70 mb-6">{path.desc}</p>
                <button className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful <span className="text-cyan-400">Tools</span> for Your Success
            </h2>
            <p className="text-xl text-white/80">
              Access our suite of professional tools designed to accelerate your learning and career growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all transform hover:-translate-y-2">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${tool.color} mb-6 transform group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
                <p className="text-white/70">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our <span className="text-cyan-400">Students</span> Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Code2 className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold">CodeXprt</span>
              </div>
              <p className="text-white/70">
                Empowering developers to reach their full potential through structured learning paths and powerful tools.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Roadmaps</h3>
              <ul className="space-y-2 text-white/70">
                {roadmaps.map((path, index) => (
                  <li key={index} className="hover:text-white transition-colors cursor-pointer">
                    {path.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Tools</h3>
              <ul className="space-y-2 text-white/70">
                {tools.slice(0, 6).map((tool, index) => (
                  <li key={index} className="hover:text-white transition-colors cursor-pointer">
                    {tool.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
            <p>© 2025 CodeXprt. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(8deg); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
