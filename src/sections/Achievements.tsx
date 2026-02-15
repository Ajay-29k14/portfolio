import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  FolderGit2, 
  TrendingUp, 
  GraduationCap,
  Target,
  Zap
} from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters when visible
  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const stats = [300, 10, 80, 8.43];
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCounters(stats.map(target => {
          if (target === 8.43) {
            return Math.round(target * easeOut * 100) / 100;
          }
          return Math.floor(target * easeOut);
        }));

        if (step >= steps) {
          clearInterval(timer);
          setCounters(stats);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats: Stat[] = [
    {
      icon: Code2,
      value: counters[0],
      suffix: '+',
      label: 'DSA Problems Solved',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FolderGit2,
      value: counters[1],
      suffix: '+',
      label: 'ML Projects Completed',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      value: counters[2],
      suffix: '%',
      label: 'Model Accuracy',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: GraduationCap,
      value: counters[3],
      suffix: '',
      label: 'Current CGPA',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Solved 300+ DSA problems on LeetCode covering arrays, strings, hashing, recursion, trees, and graphs'
    },
    {
      icon: Zap,
      title: 'Technical Skills',
      description: 'Proficient in Python, C++, Machine Learning, FastAPI, and database management'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="achievements"
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
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Numbers that reflect my dedication and continuous growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group bg-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover-lift text-center ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-4xl sm:text-5xl font-bold text-gradient">
                  {stat.value === 8.43 ? stat.value.toFixed(2) : stat.value}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div 
          className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <highlight.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivation Quote */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block bg-glass rounded-2xl px-8 py-6 border border-white/10">
            <p className="text-lg text-gray-300 italic">
              "The only way to do great work is to love what you do."
            </p>
            <p className="text-cyan-400 mt-2">— Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
