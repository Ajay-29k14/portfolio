import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  MapPin, 
  Phone,
  Download,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ajay.p.14.kumar@gmail.com',
      href: 'mailto:ajay.p.14.kumar@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7752087287',
      href: 'tel:+917752087287'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhilai, Chhattisgarh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ajay.p.14.kumar@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-glass rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always excited to connect with fellow developers, recruiters, and anyone 
                interested in technology. Whether you have a question, opportunity, or just 
                want to say hi, feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-500 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/20">
                  <Download className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Download My Resume</h4>
                  <p className="text-sm text-gray-400">Get a complete overview of my skills and experience</p>
                </div>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-glass rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                  <Textarea
                    placeholder="Hi Ajay, I'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2">
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
