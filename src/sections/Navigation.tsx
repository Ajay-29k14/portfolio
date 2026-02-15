import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'achievements', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0e27]/90 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-xl font-bold text-gradient"
            >
              Ajay Kumar
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
{/* CTA Button */}
<div className="hidden lg:block">
  <a
    href="/resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="sm"
      variant="outline"
      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
    >
      <Download className="w-4 h-4 mr-2" />
      Resume
    </Button>
  </a>
</div>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 left-4 right-4 bg-[#161b40] rounded-2xl border border-white/10 p-6 shadow-2xl transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <Button
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
