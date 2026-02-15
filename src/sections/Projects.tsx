import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  problem: string;
  features: string[];
  result?: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
}

const Projects = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: 'Mental Health Prediction',
      description: 'ML pipeline to classify mental health conditions using DASS-21 questionnaire data',
      problem: 'Classifying Depression, Anxiety, and Stress levels from questionnaire responses',
      features: [
        'End-to-end ML pipeline for multi-class classification',
        'Data preprocessing and DASS-21 score computation',
        'Model evaluation with confusion matrices',
        'Backend-ready prediction workflow'
      ],
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: '/images/project-mental-health.jpg',
      github: 'https://github.com/Ajay-29k14/mental-health-model-dass21'
    },
    {
      title: 'Employee Turnover Prediction',
      description: 'Predictive model for employee attrition using HR analytics data',
      problem: 'Identifying employees at risk of leaving to help HR take preventive action',
      features: [
        'End-to-end ML pipeline for binary classification',
        'SMOTE for handling imbalanced datasets',
        'Random Forest with hyperparameter tuning',
        'Feature engineering for HR metrics'
      ],
      result: '80% accuracy with improved recall for attrition cases',
      tech: ['Python', 'Machine Learning', 'SMOTE', 'Random Forest'],
      image: '/images/project-employee-turnover.jpg',
      github: 'https://github.com/Ajay-29k14/Employee-Turnover-Prediction'
    },
    {
      title: 'Car Price Prediction System',
      description: 'Web application for real-time used car price predictions',
      problem: 'Helping buyers and sellers determine fair market value of used cars',
      features: [
        'Random Forest regression for price prediction',
        'Feature engineering with One-Hot Encoding',
        'Flask-based REST API backend',
        'Interactive web interface for predictions'
      ],
      result: 'High R² score with low MAE on test data',
      tech: ['Flask', 'Machine Learning', 'Random Forest', 'REST API'],
      image: '/images/project-car-price.jpg',
      github: 'https://github.com/Ajay-29k14/Car-price-predictor',
      demo: '#'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects showcasing my expertise in Machine Learning and Backend Development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${150 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b40] to-transparent" />
                
                {/* Tech badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-black/50 backdrop-blur-sm text-cyan-400 rounded-md border border-cyan-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-cyan-400 mb-3">
                  Problem: {project.problem}
                </p>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Result */}
                {project.result && (
                  <div className="mb-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <p className="text-sm text-cyan-400 font-medium">{project.result}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 border-gray-600 text-white hover:bg-white/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/', '_blank')}
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8"
          >
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
