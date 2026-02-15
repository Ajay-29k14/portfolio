import { ArrowUp, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Ajay Kumar</h3>
            <p className="text-gray-400 text-sm">Machine Learning & Backend Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-glass border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Ajay Kumar. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and lots of</span>
            <Code2 className="w-4 h-4 text-cyan-400" />
          </div>
          
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-cyan-400">React</span>
            <span>+</span>
            <span className="text-purple-400">Vite</span>
            <span>+</span>
            <span className="text-pink-400">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
