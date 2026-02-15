import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const Education = () => {
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

  const education = {
    degree: 'B.Tech in Computer Science and Communication Engineering',
    university: 'Kalinga Institute of Industrial Technology (KIIT)',
    location: 'Bhubaneswar, Odisha',
    duration: 'July 2023 - May 2027',
    cgpa: '8.43',
    coursework: [
      'Data Structures and Algorithms',
      'Machine Learning',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks'
    ]
  };

  return (
    <section
      ref={sectionRef}
      id="education"
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
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic foundation and ongoing learning journey
          </p>
        </div>

        {/* Education Card */}
        <div 
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="bg-glass rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                <p className="text-lg text-cyan-400 mb-3">{education.university}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {education.duration}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full">
                    <MapPin className="w-4 h-4" />
                    {education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA */}
            <div className="flex items-center gap-4 mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
              <Award className="w-8 h-8 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Current CGPA</p>
                <p className="text-3xl font-bold text-gradient">{education.cgpa}</p>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div 
          className={`mt-8 grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-glass rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Expected Graduation</h4>
            <p className="text-gray-400">May 2027</p>
          </div>
          <div className="bg-glass rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Current Status</h4>
            <p className="text-gray-400">3rd Year Undergraduate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
