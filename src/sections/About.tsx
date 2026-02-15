import { useEffect, useRef, useState } from 'react';
import { User, Target, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'CS student at KIIT University passionate about building impactful solutions'
    },
    {
      icon: Target,
      title: 'My Focus',
      description: 'Machine Learning, Backend Development, and API design'
    },
    {
      icon: Lightbulb,
      title: 'What I Build',
      description: 'End-to-end systems that solve real-world problems with data-driven insights'
    },
    {
      icon: Rocket,
      title: 'Current Goal',
      description: 'Deepening expertise in ML pipelines and cloud-native architectures'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
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
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div 
            className={`relative transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative bg-glass rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/images/profilepic.jpeg"
                  alt="P Ajay Kumar"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-cyan-400 font-medium">P. Ajay Kumar</p>
                  <p className="text-gray-400 text-sm">ML & Backend Developer</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* About Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Main description */}
            <div className="bg-glass rounded-2xl p-8 mb-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a <span className="text-cyan-400 font-medium">Computer Science student</span> at 
                KIIT University with a passion for building end-to-end solutions. I specialize in 
                <span className="text-purple-400 font-medium"> Machine Learning</span> and 
                <span className="text-pink-400 font-medium"> Backend Development</span>, creating 
                systems that are both intelligent and scalable.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy working on real-world problems and turning data into actionable insights. 
                Currently, I'm focused on deepening my expertise in ML pipelines and cloud-native architectures.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-glass rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover-lift ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
