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
      title: 'MIA Health Solutions Website Revamp',
      description: 'Modern, responsive healthcare website redesign focused on clarity, accessibility, and performance.',
      longDescription: 'A complete redesign and redevelopment of the MIA Health Solutions website to improve user experience, visual consistency, and content structure. Built using React with Vite and TypeScript for a scalable, maintainable architecture, and styled with Tailwind CSS for responsive, utility-first design. The platform emphasizes clear service presentation, intuitive navigation, optimized performance, and cross-device compatibility to effectively communicate the organization’s healthcare mission and offerings.',
      technologies: ['React (Vite)', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://miahealthsolutions.org/',
      githubUrl: 'https://github.com/Joseph9866/MIA--health.git',
      imageUrl: 'images/MIA.png',
      category: 'Web Development',
      features: ['Responsive Design', 'Component-Based Architecture', 'Optimized Performance', 'Improved Navigation', 'Accessible UI']
    },
    {
     id: 2,
     title: 'ALJana Tech Corporate Website with Admin Panel',
     description: 'Modern corporate website with integrated admin dashboard for content management.',
     longDescription: 'A fully responsive corporate website developed for ALJana Tech to showcase branding, digital marketing, and technology services. Built using React (Vite) and TypeScript for scalable, type-safe development, and styled with Tailwind CSS for a clean, modern interface. The platform includes a custom admin panel that enables dynamic content management, service updates, and structured data control without modifying source code. Designed with reusable components, optimized performance, and clear service presentation to support business growth and digital visibility.',
     technologies: ['React (Vite)', 'TypeScript', 'Tailwind CSS'],
     liveUrl: 'https://aljana.vercel.app/',
     githubUrl: 'https://github.com/Joseph9866/ALJana-Tech.git',
     imageUrl: 'images/Aljana.png',
     category: 'Web Development',
     features: ['Admin Dashboard', 'Dynamic Content Management', 'Responsive Design', 'Component-Based Architecture', 'Performance Optimization']
    },
    {
      id: 3,
      title: 'ACK Mt. Kenya Guest House Website',
      description: 'Responsive hospitality website for accommodation booking and guest information.',
      longDescription: 'A modern, responsive website developed for ACK Mt. Kenya Guest House to showcase accommodation services, facilities, and booking information. Built with React (Vite) and TypeScript for a scalable and maintainable frontend architecture, and styled using Tailwind CSS for clean, responsive layouts. The platform focuses on clear room presentation, service highlights, structured navigation, and optimized performance to enhance user experience and online visibility.',
      technologies: ['React (Vite)', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://ack-guesthousewebsite.vercel.app/',
      githubUrl: 'https://github.com/Joseph9866/ackMERNweb.git',
      imageUrl: 'images/ACK.png',
      category: 'Web Development',
      features: ['Responsive Design', 'Service Showcase', 'Structured Navigation', 'Optimized Performance', 'Component-Based Architecture']
    },
    {
      id: 4,
      title: 'Professional Portfolio Website',
      description: 'Responsive personal brand website for showcasing services, projects, and professional profile.',
      longDescription: 'A modern portfolio and personal brand website designed to present professional services, projects, and contact information in a structured and visually engaging format. Developed using React (Vite) and TypeScript for scalable, type-safe architecture, and styled with Tailwind CSS for responsive, utility-first design. The platform emphasizes clean UI, reusable components, optimized performance, and cross-device compatibility to strengthen online presence and digital credibility.',
      technologies: ['React (Vite)', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://simonwebsite.vercel.app/',
      githubUrl: 'https://github.com/Joseph9866/simon-repo.git',
      imageUrl: 'images/Simonportfolio.png',
      category: 'Web Development',
      features: ['Responsive Design', 'Project Showcase', 'Service Presentation', 'Reusable Components', 'Optimized Performance']
    },
    {
      id: 5,
      title: 'Task Management Web Application',
      description: 'Productivity-focused task management system with structured workflow organization.',
      longDescription: 'A responsive task management application designed to help users organize, prioritize, and track daily activities efficiently. Built using React (Vite) and TypeScript for scalable, maintainable frontend architecture, and styled with Tailwind CSS for a clean and responsive interface. The application emphasizes structured task organization, state management, reusable components, and optimized performance to deliver a smooth user experience across devices.',
      technologies: ['React (Vite)', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://task-manager-smoky-sigma.vercel.app/',
      githubUrl: 'https://github.com/Joseph9866/Task_manager-my-.git',
      imageUrl: 'images/Taskmanager.png',
      category: 'Web Development',
      features: ['Task Organization', 'Responsive Design', 'State Management', 'Reusable Components', 'Optimized Performance']
    },
    {
      id: 6,
      title: 'Kamsio Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and contact information.',
      longDescription: 'A responsive and interactive portfolio website built to highlight web development projects, technical skills, and professional experience. Includes smooth navigation, project galleries, contact forms, and optimized performance for desktop and mobile devices.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      liveUrl: 'https://kamsio-portfolio.vercel.app/',
      githubUrl: 'https://github.com/Joseph9866/kamsio-portfolio.git',
      imageUrl: 'images/Kamsiyoportfolio.png',
      category: 'Web Development',
      features: ['Responsive Design', 'Project Showcase', 'Contact Form', 'Smooth Navigation', 'Performance Optimized']
    },
    {
      id: 7,
      title: 'AI Inbox Automation Bot',
      description: 'WhatsApp AI agent that responds intelligently to client messages using your business data.',
      longDescription: 'An AI-powered WhatsApp chatbot that automatically responds to client inquiries using a knowledge base built from your business data. The agent learns from interactions to provide accurate, context-aware replies. Only the business owner can access, update, or delete the data, ensuring privacy and control. Reduces response time and improves customer engagement.',
      technologies: ['Node.js', 'WhatsApp API', 'OpenAI GPT', 'MongoDB', 'Express'],
      liveUrl: 'https://www.youtube.com/shorts/IsSniPqJPQQ',
      githubUrl: '',
      imageUrl: 'images/RAGagent.png',
      category: 'AI & Automation',
      features: ['Intelligent Responses', 'WhatsApp Integration', 'Business Data Memory', 'Privacy Controlled', 'Automated Customer Engagement']
    },
    {
      id: 8,
      title: 'Voice Agent',
      description: 'Voice agent powered by ElevenLabs for handling enquiries, bookings, support, and lead collection.',
      longDescription: 'An AI-driven voice agent capable of managing customer interactions over calls. Handles enquiries, schedules bookings, provides support, and collects leads automatically. Integrates seamlessly into customer support workflows, reducing manual workload and improving response efficiency.',
      technologies: ['ElevenLabs', 'Node.js', 'Twilio', 'AI Speech Recognition', 'Cloud Functions'],
      liveUrl: 'https://customcx-leads-chatbot.netlify.app/',
      githubUrl: '',
      imageUrl: 'images/Voiceagent.png',
      category: 'Customer Support',
      features: ['Voice Interaction', 'Lead Collection', 'Automated Support', 'Bookings Management', 'AI-powered Responses']
    },
    {
      id: 9,
      title: 'AI Voice Assistant Agent',
      description: '24/7 voice-powered sales and support assistant for websites, handling inquiries and qualifying leads automatically.',
      longDescription: 'The CustomCX Voice Agent interacts with website visitors in a natural, human-like tone. It answers questions, explains services, and qualifies leads without human intervention. Operates continuously, providing professional customer support, automating sales and support workflows, and enabling business growth around the clock.',
      technologies: ['AI Speech Recognition', 'Node.js', 'Twilio', 'ElevenLabs', 'Web Integration'],
      liveUrl: 'https://youtu.be/L5CCKwKB5VI?si=ncyus4blRhu7Q167',
      githubUrl: '',
      imageUrl: 'images/AIvoiceassistantagent.png',
      category: 'Customer Support',
      features: ['Voice Interaction', 'Lead Qualification', '24/7 Availability', 'Automated Customer Support', 'Website Integration']
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
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <figure className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
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
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(project);
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <span 
                      className="btn btn-ghost btn-sm btn-circle"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </span>
                    <span 
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="btn btn-ghost btn-sm btn-circle"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
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