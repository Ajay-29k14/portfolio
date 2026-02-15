import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      role: 'Data Science Virtual Intern',
      company: 'AICTE EduSkills (Altair)',
      location: 'Remote',
      duration: 'Jul 2025 - Sep 2025',
      type: 'Internship',
      description: 'Gained hands-on experience in end-to-end ML workflows from data cleaning to model evaluation.',
      achievements: [
        'Performed data preprocessing, exploratory data analysis, and feature engineering on real-world datasets',
        'Built and evaluated machine learning models using Scikit-learn with focus on accuracy and confusion matrices',
        'Gained hands-on experience in end-to-end ML workflows from data cleaning to model evaluation'
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and hands-on learning experiences
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden sm:block" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0a0e27] hidden sm:block z-10" />

                <div className="sm:ml-20">
                  <div className="bg-glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover-lift">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey Note */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-glass rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-400">Open to new opportunities and internships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
