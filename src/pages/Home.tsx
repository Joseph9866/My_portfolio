import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Users, Workflow } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-4xl" data-aos="fade-up">
            <div className="avatar mb-8">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img 
                  src="images/minerbg.png" 
                  alt="Joseph Kimani" 
                  fetchpriority="high"
                  loading="eager"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Joseph Kimani</span>
            </h1>
            <div className="text-xl md:text-2xl text-base-content/80 mb-8 space-y-2">
              <p>AI Automation Engineer | Cloud Computing Specialist</p>
              <p>AWS Certified Cloud Practitioner</p>
            </div>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-base-content/70">
              Specializing in workflow automation and scalable web systems that empower businesses 
              through technology. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn btn-primary btn-lg">
                Explore My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Combining technical expertise with business acumen to deliver comprehensive solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-4">Software Development</h3>
                <p className="text-base-content/70">
                  Creating modern, responsive web applications using cutting-edge technologies 
                  and best practices for optimal user experience.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-4">Cloud Computing</h3>
                <p className="text-base-content/70">
                  Designing and implementing scalable cloud solutions with AWS, 
                  helping businesses leverage cloud technology for growth.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="card-title justify-center text-xl mb-4">Business Training</h3>
                <p className="text-base-content/70">
                  As a certified SIYB ILO Trainer, I help entrepreneurs and small businesses 
                  develop skills for sustainable growth and success.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="400">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                  <Workflow className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="card-title justify-center text-xl mb-4">AI Automation & Workflow</h3>
                <p className="text-base-content/70">
                  Designing automation architecture and integrating AI-powered workflows using 
                  platforms like n8n, Make.com, HubSpot, and Zoho CRM to streamline business processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-base-content/70 mb-8">
              Let's collaborate to transform your business processes with automation solutions 
              that deliver measurable value and drive real results.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;