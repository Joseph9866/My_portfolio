import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  category: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The platform includes advanced features like product reviews, wishlist, and real-time inventory tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Socket.io'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/josephkeam/ecommerce',
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Development',
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Real-time Updates', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Automation',
      description: 'AWS CloudFormation templates and Terraform scripts for automated infrastructure deployment.',
      longDescription: 'A collection of Infrastructure as Code (IaC) templates and scripts for automating AWS cloud infrastructure deployment. Includes multi-environment setups, auto-scaling configurations, monitoring and alerting, security best practices, and cost optimization strategies.',
      technologies: ['AWS', 'Terraform', 'CloudFormation', 'Python', 'Docker', 'Jenkins'],
      liveUrl: 'https://infrastructure-demo.com',
      githubUrl: 'https://github.com/josephkeam/aws-infrastructure',
      imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Cloud Computing',
      features: ['Auto-scaling', 'Multi-environment', 'Cost Optimization', 'Security Hardening', 'Monitoring']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      longDescription: 'A modern task management application similar to Trello or Asana, featuring drag-and-drop functionality, real-time collaboration, project templates, time tracking, file attachments, and comprehensive reporting. Built with a focus on user experience and team productivity.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'PWA'],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/josephkeam/task-manager',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Development',
      features: ['Real-time Collaboration', 'Drag & Drop', 'Time Tracking', 'File Attachments', 'PWA Support']
    },
    {
      id: 4,
      title: 'Microservices Architecture',
      description: 'Scalable microservices architecture with Docker, Kubernetes, and API Gateway.',
      longDescription: 'A production-ready microservices architecture demonstrating best practices for containerization, orchestration, service discovery, load balancing, and monitoring. Includes CI/CD pipelines, centralized logging, distributed tracing, and security implementations.',
      technologies: ['Docker', 'Kubernetes', 'Kong', 'Prometheus', 'Grafana', 'ELK Stack'],
      liveUrl: 'https://microservices-demo.com',
      githubUrl: 'https://github.com/josephkeam/microservices',
      imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Cloud Computing',
      features: ['Service Discovery', 'Load Balancing', 'Distributed Tracing', 'Centralized Logging', 'Auto-healing']
    },
    {
      id: 5,
      title: 'Business Training Portal',
      description: 'Learning management system for SIYB training programs with progress tracking.',
      longDescription: 'A comprehensive Learning Management System (LMS) designed specifically for SIYB (Start and Improve Your Business) training programs. Features include course management, student progress tracking, interactive quizzes, certificate generation, and instructor dashboards.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Chart.js'],
      liveUrl: 'https://training-portal-demo.com',
      githubUrl: 'https://github.com/josephkeam/training-portal',
      imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Education',
      features: ['Course Management', 'Progress Tracking', 'Interactive Quizzes', 'Certificate Generation', 'Video Streaming']
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with multiple rooms, file sharing, and video calls.',
      longDescription: 'A feature-rich real-time chat application supporting multiple chat rooms, direct messaging, file sharing, emoji reactions, message encryption, and integrated video/voice calls. Built with modern web technologies and optimized for performance.',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Redis', 'MongoDB', 'Express'],
      liveUrl: 'https://chat-app-demo.com',
      githubUrl: 'https://github.com/josephkeam/chat-app',
      imageUrl: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Development',
      features: ['Real-time Messaging', 'Video/Voice Calls', 'File Sharing', 'Message Encryption', 'Multiple Rooms']
    },
    {
      id: 7,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business analytics with real-time data visualization.',
      longDescription: 'A comprehensive analytics dashboard providing real-time insights into business metrics, customer behavior, sales performance, and operational efficiency. Features interactive charts, customizable widgets, automated reporting, and data export capabilities.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://analytics-dashboard-demo.com',
      githubUrl: 'https://github.com/josephkeam/analytics-dashboard',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Data Science',
      features: ['Real-time Analytics', 'Interactive Charts', 'Custom Widgets', 'Automated Reports', 'Data Export']
    },
    {
      id: 8,
      title: 'Serverless Blog Platform',
      description: 'JAMstack blog platform with headless CMS and automated deployment.',
      longDescription: 'A modern, fast, and secure blog platform built with JAMstack architecture. Features include headless CMS integration, markdown support, SEO optimization, comment system, search functionality, and automated deployment with CI/CD pipelines.',
      technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify', 'Algolia', 'Disqus'],
      liveUrl: 'https://blog-platform-demo.com',
      githubUrl: 'https://github.com/josephkeam/blog-platform',
      imageUrl: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Development',
      features: ['Headless CMS', 'SEO Optimized', 'Search Functionality', 'Comment System', 'Auto Deployment']
    },
    {
      id: 9,
      title: 'IoT Monitoring System',
      description: 'IoT device monitoring and control system with cloud integration.',
      longDescription: 'A comprehensive IoT monitoring system for tracking and controlling various sensors and devices. Features include real-time data collection, alert notifications, device management, historical data analysis, and cloud-based dashboard for remote monitoring.',
      technologies: ['Python', 'MQTT', 'InfluxDB', 'Grafana', 'AWS IoT', 'Raspberry Pi'],
      liveUrl: 'https://iot-monitoring-demo.com',
      githubUrl: 'https://github.com/josephkeam/iot-monitoring',
      imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'IoT',
      features: ['Real-time Monitoring', 'Alert System', 'Device Management', 'Historical Analysis', 'Cloud Integration']
    },
    {
      id: 10,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication.',
      longDescription: 'A secure and user-friendly mobile banking application featuring biometric authentication, account management, money transfers, bill payments, transaction history, budget tracking, and customer support chat. Built with robust security measures and compliance standards.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth', 'Push Notifications'],
      liveUrl: 'https://banking-app-demo.com',
      githubUrl: 'https://github.com/josephkeam/banking-app',
      imageUrl: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Mobile Development',
      features: ['Biometric Auth', 'Money Transfers', 'Bill Payments', 'Budget Tracking', 'Push Notifications']
    },
    {
      id: 11,
      title: 'API Management Platform',
      description: 'Enterprise API gateway with rate limiting, analytics, and developer portal.',
      longDescription: 'A comprehensive API management platform providing API gateway functionality, rate limiting, authentication, analytics, monitoring, developer portal, API documentation, and marketplace features. Designed for enterprise-scale API operations.',
      technologies: ['Kong', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'OpenAPI'],
      liveUrl: 'https://api-platform-demo.com',
      githubUrl: 'https://github.com/josephkeam/api-platform',
      imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Cloud Computing',
      features: ['API Gateway', 'Rate Limiting', 'Developer Portal', 'API Analytics', 'Documentation']
    },
    {
      id: 12,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology.',
      longDescription: 'A secure, transparent, and tamper-proof voting system built on blockchain technology. Features include voter authentication, ballot creation, real-time vote counting, result verification, audit trails, and compliance with electoral standards.',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'MetaMask', 'Truffle'],
      liveUrl: 'https://voting-system-demo.com',
      githubUrl: 'https://github.com/josephkeam/blockchain-voting',
      imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Blockchain',
      features: ['Blockchain Security', 'Transparent Results', 'Audit Trails', 'Smart Contracts', 'Decentralized']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            A showcase of my work spanning web development, cloud computing, and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <figure className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="badge badge-primary">{project.category}</div>
                </div>
              </figure>
              
              <div className="card-body">
                <h3 className="card-title text-lg mb-2">{project.title}</h3>
                <p className="text-base-content/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <div key={tech} className="badge badge-outline badge-sm">{tech}</div>
                  ))}
                  {project.technologies.length > 3 && (
                    <div className="badge badge-outline badge-sm">+{project.technologies.length - 3}</div>
                  )}
                </div>

                <div className="card-actions justify-between items-center">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm btn-circle"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm btn-circle"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <div className="badge badge-primary">{selectedProject.category}</div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="btn btn-ghost btn-circle"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-bold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-3">Description</h4>
              <p className="text-base-content/80 leading-relaxed">{selectedProject.longDescription}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <div key={tech} className="badge badge-outline">{tech}</div>
                ))}
              </div>
            </div>

            <div className="modal-action">
              <a 
                href={selectedProject.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}></div>
        </div>
      )}
    </div>
  );
};

export default Projects;