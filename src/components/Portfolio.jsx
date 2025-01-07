import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Twitter, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullText = "I'm a Full Stack Developer";

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 85 }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-yellow-500">
      {/* Fixed Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                Alex
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-3 py-2 transition-colors duration-300 ${
                    activeSection === id ? 'text-yellow-400' : 'hover:text-yellow-400'
                  }`}
                >
                  {label}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform origin-left transition-transform duration-300 ${
                      activeSection === id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-yellow-500/10 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden absolute left-0 right-0 bg-black/95 border-b border-yellow-500/20 transition-all duration-300 ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                    activeSection === id ? 'bg-yellow-500/20 text-yellow-400' : 'hover:bg-yellow-500/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with adjusted padding for fixed header */}
      <main className="pt-20">
        {/* Hero Section */}
        <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent animate-pulse" />
          <div className="z-10 text-center">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden 
                          border-4 border-yellow-500 shadow-lg shadow-yellow-500/50">
              <img
                src="/api/placeholder/192/192"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-500/20 animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Alex</h1>
            <p className="text-2xl font-light">{text}<span className="animate-pulse">|</span></p>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-20 px-4" data-animate>
          <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['Web Development', 'UI/UX Design', 'Mobile Development'].map((service) => (
              <div
                key={service}
                className="p-6 rounded-lg bg-yellow-500/5 hover:bg-yellow-500/10 
                         transform hover:-translate-y-2 transition-all duration-300
                         border border-yellow-500/20 hover:border-yellow-500"
              >
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-yellow-400/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-yellow-500/5" data-animate>
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-yellow-500/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                    style={{ width: `${isVisible['skills'] ? skill.level : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4" data-animate>
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-transparent border border-yellow-500/30 
                          rounded-lg focus:border-yellow-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-transparent border border-yellow-500/30 
                          rounded-lg focus:border-yellow-500 transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-transparent border border-yellow-500/30 
                          rounded-lg focus:border-yellow-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-500 text-black font-semibold rounded-lg
                         hover:bg-yellow-400 transform hover:-translate-y-1 transition-all"
              >
                Send Message
              </button>
            </form>

            <div className="flex justify-center space-x-6 mt-12">
              {[Github, Mail, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 border border-yellow-500/30 rounded-full
                           hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
