import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Code2,
  Database,
  Brain,
  Briefcase
} from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  icon: React.ElementType;
  color: string;
  link?: string;
}

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications: Certification[] = [
    {
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      icon: Code2,
      color: 'from-green-500 to-emerald-600',
      link: 'https://drive.google.com/file/d/1rvK7JQ4jECCph4B69Mp9GvQ_7hIyUurR/view?usp=sharing'
    },
    {
      title: 'Data Structures in C++',
      issuer: 'Coding Ninjas',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      link: 'https://drive.google.com/file/d/18gco7-9Lm2cFirdpT7II2Zc4CghQrlvr/view?usp=sharing'
    },
    {
      title: 'Data Science with AI',
      issuer: 'Internshala',
      icon: Brain,
      color: 'from-blue-500 to-indigo-600',
      link: 'https://drive.google.com/file/d/1INroW_on7GCQqE9FLNOkWOLNUPDfHa96/view?usp=sharing'
    },
    {
      title: 'GEN-AI',
      issuer: 'Oracle',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      link: 'https://drive.google.com/file/d/1AFtjycGes3_Y8V2WENqtHUASATBrFxi-/view?usp=sharing'
    },
    {
      title: 'Software Engineer Intern',
      issuer: 'HackerRank',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      link: 'https://drive.google.com/file/d/1D2yiu8rIb1YRdg4bxMz7AKIrHZd_IT1z/view?usp=sharing'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications validating my technical skills and expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group bg-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-400 mb-4">{cert.issuer}</p>

              {/* Link */}
              {cert.link && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(cert.link, '_blank')}
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          ))}

          {/* ADD YOUR CERTIFICATION HERE - Placeholder Card */}
          
        </div>

        {/* Instructions for User */}
        
      </div>
    </section>
  );
};

export default Certifications;
