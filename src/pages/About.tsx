import React from 'react';
import { Heart, Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'I love what I do and believe in continuous learning and growth in technology.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong relationships and working together to achieve common goals.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Get to know the person behind the code - my journey, values, and what drives me
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
          <div data-aos="fade-right">
            <div className="avatar mb-8">
              <div className="w-64 rounded-2xl shadow-2xl">
                <img src="images/my photo.png" alt="Joseph Kimani" />
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Hello! I'm Joseph Kimani, an AI Automation Engineer and Cloud Computing Specialist 
              based in Murang'a, Kenya. As a third-year student, I've focused on building practical 
              experience through hands-on projects and production-ready solutions that bridge 
              technology and business.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              My journey began with a curiosity about how websites work, which evolved into a 
              passion for creating digital experiences that drive real business value. As a certified 
              AWS Cloud Practitioner and SIYB ILO Trainer, I specialize in translating complex 
              technical systems into business solutions. I apply SIYB standards to create 
              revenue-driven solutions that empower businesses through technology.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              When I'm not coding or training entrepreneurs, you'll find me exploring new 
              technologies, contributing to open-source projects, or mentoring fellow students and 
              aspiring developers. I believe in the power of technology to transform businesses 
              and improve lives through practical, scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="badge badge-primary badge-lg">AWS Certified</div>
              <div className="badge badge-secondary badge-lg">SIYB Certified Trainer</div>
              <div className="badge badge-accent badge-lg">AI Automation Engineer</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Values</h2>
            <p className="text-lg text-base-content/70">
              The principles that guide my work and interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="card-title justify-center text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-base-content/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Beyond Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card bg-base-200">
              <div className="card-body text-center">
                <h3 className="card-title justify-center mb-2">Technology Enthusiast</h3>
                <p className="text-sm">Always exploring emerging technologies and their potential applications</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body text-center">
                <h3 className="card-title justify-center mb-2">Business & Entrepreneurship</h3>
                <p className="text-sm">Combining technical expertise with business acumen to build scalable, revenue-driven solutions</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body text-center">
                <h3 className="card-title justify-center mb-2">Mentorship & Leadership</h3>
                <p className="text-sm">Guiding fellow students and aspiring developers in their tech journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;