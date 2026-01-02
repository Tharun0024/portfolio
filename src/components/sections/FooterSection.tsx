import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';  // React Router import

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Tharun0024' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tharuneshvar-t-722049339/' },
];

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something
              <span className="text-primary"> Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Open to opportunities in AI/ML engineering and exciting collaborations. 
              Let's connect and create impact together.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              Designed & built with{' '}
              <span className="text-primary">passion</span>
            </p>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-primary transition-colors"
            >
              Back to top
              <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
            </button>

            <p>© 2026 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
