import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown, Code2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-300">Computer Science Student</span>
        </div>

        {/* Main heading */}
        <h1 
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gradient">P. Ajay Kumar</span>
        </h1>

        {/* Role */}
        <h2 
          className={`text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Machine Learning & Backend Developer
        </h2>

        {/* Tagline */}
        <p 
          className={`text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          I build intelligent systems and scalable backend solutions that solve real-world problems.
          Passionate about turning data into actionable insights.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-8 py-6 text-lg font-medium rounded-xl glow-cyan transition-all duration-300 hover:scale-105"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://github.com/Ajay-29k14', '_blank')}
            className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <a
  href="/resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="outline"
    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
  >
    <Download className="w-5 h-5 mr-2" />
    Resume
  </Button>
</a>

        </div>

        {/* Social Links */}
        <div 
          className={`flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://github.com/Ajay-29k14"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-glass hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/p-ajay-kumar-/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-glass hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="mailto:ajay.p.14.kumar@gmail.com"
            className="p-3 rounded-full bg-glass hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
