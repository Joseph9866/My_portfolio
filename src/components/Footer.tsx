import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Joseph Kimani</h3>
            <p className="text-sm opacity-80">
              Software Developer, Cloud Computing Specialist, and Certified SIYB ILO Trainer
              passionate about creating innovative digital solutions.
            </p>
            <div className="flex space-x-3">
              <a href="www.linkedin.com/in/joseph-kiarie-047a26264" className="btn btn-ghost btn-sm btn-circle">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/Joseph9866" className="btn btn-ghost btn-sm btn-circle">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://x.com/josekeam01" className="btn btn-ghost btn-sm btn-circle">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="link link-hover opacity-80">About Me</Link></li>
              <li><Link to="/projects" className="link link-hover opacity-80">Projects</Link></li>
              <li><Link to="/skills" className="link link-hover opacity-80">Skills</Link></li>
              <li><Link to="/education" className="link link-hover opacity-80">Education</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Software Development</li>
              <li>Cloud Solutions</li>
              <li>Business Training</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Mail className="w-4 h-4" />
                <span>josekeam01@email.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Phone className="w-4 h-4" />
                <span>+254 759 750 318</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <MapPin className="w-4 h-4" />
                <span>Murang'a, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60">
            © {currentYear} Joseph Kimani. All rights reserved.
          </p>
          <p className="text-sm opacity-60">
            Built with React, TypeScript & DaisyUI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;