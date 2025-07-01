import React from 'react';
import { Code, Cloud, Database, Globe, Smartphone, Cog as Cogs } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        'React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
        'Next.js', 'Vue.js', 'Sass/SCSS', 'Responsive Design', 'Progressive Web Apps'
      ]
    },
    {
      title: 'Backend Development',
      icon: Code,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      skills: [
        'Node.js', 'Python', 'Express.js', 'FastAPI', 'RESTful APIs', 'GraphQL',
        'Microservices', 'WebSocket', 'JWT Authentication', 'API Security'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        'AWS (EC2, S3, Lambda, RDS)', 'Google Cloud Platform', 'Microsoft Azure',
        'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Jenkins', 'GitHub Actions'
      ]
    },
    {
      title: 'Database Technologies',
      icon: Database,
      color: 'text-info',
      bgColor: 'bg-info/10',
      skills: [
        'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'InfluxDB',
        'Database Design', 'Query Optimization', 'Data Modeling'
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-success',
      bgColor: 'bg-success/10',
      skills: [
        'React Native', 'Flutter', 'iOS Development', 'Android Development',
        'Mobile UI/UX', 'App Store Optimization', 'Push Notifications'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Cogs,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      skills: [
        'Git & GitHub', 'Linux/Unix', 'Nginx', 'Apache', 'Elasticsearch',
        'Monitoring & Logging', 'Performance Optimization', 'Security Best Practices'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'KCNA: Kubernetes and Cloud Native Associate',
    'LFS250: Kubernetes and Cloud Native Essentials',
    'Certified SIYB ILO Trainer',
    'Career Essentials in Software Development by Microsoft and LinkedIn',
    'Ajira Digital Program Certificate - Artificial Intelligence',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-body">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="card-title text-lg">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-base-200 transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 ${category.color.replace('text-', 'bg-')} rounded-full`}></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <div className="mb-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-lg text-base-content/70">
              Industry-recognized certifications that validate my expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert}
                className="card bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm">{cert}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Experience Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-base-content/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-base-content/70">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <div className="text-base-content/70">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-info mb-2">5</div>
              <div className="text-base-content/70">Certifications Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;