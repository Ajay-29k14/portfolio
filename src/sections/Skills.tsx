import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Brain, 
  Server, 
  Database, 
  Wrench,
  Terminal
} from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: string[];
}

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Python', 'C++', 'C', 'Java', 'SQL']
    },
    {
      icon: Brain,
      title: 'ML / Data Science',
      color: 'from-purple-500 to-purple-600',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      color: 'from-pink-500 to-pink-600',
      skills: ['FastAPI', 'Flask', 'REST APIs']
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-emerald-500 to-emerald-600',
      skills: ['MySQL', 'SQLite']
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'from-amber-500 to-amber-600',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Tableau', 'Linux']
    },
    {
      icon: Terminal,
      title: 'Operating Systems',
      color: 'from-rose-500 to-rose-600',
      skills: ['Linux', 'Windows']
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
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
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build intelligent and scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group bg-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div 
          className={`mt-16 flex justify-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 text-gray-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-600" />
            <span className="text-sm">Always learning new technologies</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
