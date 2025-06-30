import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      type: 'education',
      title: 'Bachelor of Science in Mathematics and Computer Science',
      institution: 'Muranga University of Technology',
      year: '2023-current',
      description: 'Specialized in Cloud Computing and Distributed Systems. Thesis on serverless architecture optimization.',
      gpa: '3.8/4.0'
    }
  ];

  const certifications = [
    {
      type: 'certification',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services Training and Certification',
      year: '2024',
      expiryYear: '2027',
      credentialId: 'e94bf1dd-c578-4c81-93f4-ec63bc627c04',
      description: 'Validates foundational knowledge of AWS Cloud concepts, services, billing, pricing, support, and security — ideal for non-technical and technical professionals beginning their cloud journey.',
      verificationUrl:'https://www.credly.com/badges/e94bf1dd-c578-4c81-93f4-ec63bc627c04'
    },
    {
      type: 'certification',
      title: 'Certified SIYB (Start and Improve Your Business) Trainer',
      issuer: 'International Labour Organization (ILO)',
      year: '2025',
      credentialId: 'ILO-SIYB-789012',
      description: 'Authorized to deliver ILO\'s Start and Improve Your Business training programs.',
      verificationUrl: '#'
    },
    {
      type: 'certification',
      title: 'LFS250: Kubernetes and Cloud Native Essentials',
      issuer: 'The Linux Foundation',
      year: '2025',
      expiryYear: null,
      credentialId: '707d939f-d337-48ec-a4f9-14f5b8667dac',
      description: 'Covers the fundamentals of Kubernetes, containers, microservices, CI/CD, observability, GitOps, and cloud-native tools and architecture.',
      verificationUrl: 'https://www.credly.com/badges/707d939f-d337-48ec-a4f9-14f5b8667dac'
    },
    {
      type: 'certification',
      title: 'KCNA: Kubernetes and Cloud Native Associate',
      issuer: 'The Linux Foundation',
      year: '2025',
      expiryYear: '2027',
      credentialId: '76352669-a952-4795-b551-4cd370d6dc3e',
      description:'Demonstrates foundational knowledge of Kubernetes, application containers, GitOps, service mesh, cloud native concepts, and clusters.',
      verificationUrl: 'https://www.credly.com/badges/76352669-a952-4795-b551-4cd370d6dc3e'
    }
  ];

  const allItems = [...education, ...certifications].sort((a, b) => {
    const yearA = parseInt(a.year.split('-')[0]);
    const yearB = parseInt(b.year.split('-')[0]);
    return yearB - yearA;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary/20"></div>

            {allItems.map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-lg z-10"></div>

                {/* Content */}
                <div 
                  className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {item.type === 'education' ? (
                            <GraduationCap className="w-6 h-6 text-primary" />
                          ) : (
                            <Award className="w-6 h-6 text-secondary" />
                          )}
                          <div className="flex items-center space-x-2 text-sm text-base-content/60">
                            <Calendar className="w-4 h-4" />
                            <span>{item.year}</span>
                            {item.type === 'certification' && 'expiryYear' in item && item.expiryYear && (
                              <span className="badge badge-outline badge-sm">Expires {item.expiryYear}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <h3 className="card-title text-lg mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-3">
                        {item.type === 'education' ? item.institution : item.issuer}
                      </p>
                      
                      <p className="text-base-content/70 mb-4">{item.description}</p>

                      {item.type === 'education' && 'gpa' in item && (
                        <div className="badge badge-primary badge-outline">GPA: {item.gpa}</div>
                      )}

                      {item.type === 'certification' && (
                        <div className="flex flex-col space-y-2">
                          <div className="text-sm text-base-content/60">
                            <strong>Credential ID:</strong> {item.credentialId}
                          </div>
                          {item.verificationUrl && (
                            <a 
                              href={item.verificationUrl}
                              className="btn btn-outline btn-sm w-fit"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Verify Credential
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <div className="text-base-content/70">Degrees Earned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">5</div>
              <div className="text-base-content/70">Professional Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-base-content/70">Years of Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;