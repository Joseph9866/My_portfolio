import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, MessageSquare, Send, Download, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [cvForm, setCvForm] = useState({
    name: '',
    email: '',
    purpose: ''
  });

  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [cvStatus, setCvStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showCvModal, setShowCvModal] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
          to_name: 'Joseph Keam',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setContactStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setContactStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setContactStatus('error');
      setTimeout(() => setContactStatus('idle'), 5000);
    }
  };

  const handleCvRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setCvStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_CV_TEMPLATE_ID', // Replace with your CV request template ID
        {
          from_name: cvForm.name,
          from_email: cvForm.email,
          purpose: cvForm.purpose,
          to_name: 'Joseph Kimani',
          subject: 'CV Download Request',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setCvStatus('success');
      setCvForm({ name: '', email: '', purpose: '' });
      
      setTimeout(() => {
        setCvStatus('idle');
        setShowCvModal(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending CV request:', error);
      setCvStatus('error');
      setTimeout(() => setCvStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'josekeam01@email.com',
      link: 'mailto:josekeam01@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 759 750318',
      link: 'tel:+254759750318'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+254 759 750 318',
      link: 'https://wa.me/254759750318'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Muranga Kenya',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    {info.link !== '#' ? (
                      <a 
                        href={info.link}
                        className="text-base-content/70 hover:text-primary transition-colors"
                        {...(info.title === 'WhatsApp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base-content/70">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CV Download Section */}
            <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">
                  <Download className="w-5 h-5" />
                  Download My CV
                </h3>
                <p className="text-base-content/70 mb-4">
                  Interested in my detailed resume? Request access to my CV by providing your information below.
                </p>
                <button 
                  onClick={() => setShowCvModal(true)}
                  className="btn btn-primary w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Request CV Download
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-8">Send Me a Message</h2>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="input input-bordered w-full"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="input input-bordered w-full"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject *</span>
                </label>
                <input
                  type="text"
                  required
                  className="input input-bordered w-full"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message *</span>
                </label>
                <textarea
                  required
                  rows={6}
                  className="textarea textarea-bordered w-full"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={contactStatus === 'sending'}
                className={`btn w-full ${
                  contactStatus === 'success' ? 'btn-success' :
                  contactStatus === 'error' ? 'btn-error' : 'btn-primary'
                }`}
              >
                {contactStatus === 'sending' && <span className="loading loading-spinner loading-sm"></span>}
                {contactStatus === 'success' && <CheckCircle className="w-4 h-4 mr-2" />}
                {contactStatus === 'error' && <AlertCircle className="w-4 h-4 mr-2" />}
                {contactStatus === 'idle' && <Send className="w-4 h-4 mr-2" />}
                
                {contactStatus === 'sending' ? 'Sending...' :
                 contactStatus === 'success' ? 'Message Sent!' :
                 contactStatus === 'error' ? 'Failed to Send' : 'Send Message'}
              </button>

              {contactStatus === 'success' && (
                <div className="alert alert-success">
                  <CheckCircle className="w-4 h-4" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {contactStatus === 'error' && (
                <div className="alert alert-error">
                  <AlertCircle className="w-4 h-4" />
                  <span>Sorry, there was an error sending your message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* CV Request Modal */}
      {showCvModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Request CV Download</h3>
              <button 
                onClick={() => setShowCvModal(false)}
                className="btn btn-ghost btn-circle"
              >
                ✕
              </button>
            </div>

            <p className="text-base-content/70 mb-6">
              Please provide your information below. I'll review your request and send you the CV link once approved.
            </p>

            <form onSubmit={handleCvRequest} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  className="input input-bordered w-full"
                  value={cvForm.name}
                  onChange={(e) => setCvForm({ ...cvForm, name: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  className="input input-bordered w-full"
                  value={cvForm.email}
                  onChange={(e) => setCvForm({ ...cvForm, email: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Purpose/Company *</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Please briefly describe the purpose (e.g., job opportunity at XYZ Company, freelance project, etc.)"
                  className="textarea textarea-bordered w-full"
                  value={cvForm.purpose}
                  onChange={(e) => setCvForm({ ...cvForm, purpose: e.target.value })}
                ></textarea>
              </div>

              <div className="modal-action">
                <button
                  type="submit"
                  disabled={cvStatus === 'sending'}
                  className={`btn ${
                    cvStatus === 'success' ? 'btn-success' :
                    cvStatus === 'error' ? 'btn-error' : 'btn-primary'
                  }`}
                >
                  {cvStatus === 'sending' && <span className="loading loading-spinner loading-sm"></span>}
                  {cvStatus === 'success' && <CheckCircle className="w-4 h-4 mr-2" />}
                  {cvStatus === 'error' && <AlertCircle className="w-4 h-4 mr-2" />}
                  {cvStatus === 'idle' && <Send className="w-4 h-4 mr-2" />}
                  
                  {cvStatus === 'sending' ? 'Sending Request...' :
                   cvStatus === 'success' ? 'Request Sent!' :
                   cvStatus === 'error' ? 'Failed to Send' : 'Send Request'}
                </button>
              </div>

              {cvStatus === 'success' && (
                <div className="alert alert-success">
                  <CheckCircle className="w-4 h-4" />
                  <span>Request sent! You'll receive the CV link once approved.</span>
                </div>
              )}

              {cvStatus === 'error' && (
                <div className="alert alert-error">
                  <AlertCircle className="w-4 h-4" />
                  <span>Error sending request. Please try again.</span>
                </div>
              )}
            </form>
          </div>
          <div className="modal-backdrop" onClick={() => setShowCvModal(false)}></div>
        </div>
      )}
    </div>
  );
};

export default Contact;