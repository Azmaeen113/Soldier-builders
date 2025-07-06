import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectInterest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compose email body with all form data
    const emailBody = `
Contact Form Submission from Soldiers Builders BD Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Interest: ${formData.projectInterest || 'Not specified'}

Message:
${formData.message}

---
This message was sent from the Soldiers Builders BD website contact form.
    `.trim();

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=soldiers.builders.bd@gmail.com&su=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };

  const handleScheduleVisit = () => {
    // Compose email body for visit scheduling
    const emailBody = `
Visit Scheduling Request from Soldiers Builders BD Website

Name: ${formData.name || '[Please fill your name]'}
Email: ${formData.email || '[Please fill your email]'}
Phone: ${formData.phone || '[Please fill your phone]'}
Project Interest: ${formData.projectInterest || 'Not specified'}

I would like to schedule a visit to your project site. Please contact me to arrange a convenient time.

Additional Message:
${formData.message || 'No additional message'}

---
This request was sent from the Soldiers Builders BD website contact form.
    `.trim();

    // Create Gmail compose URL for visit scheduling
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=soldiers.builders.bd@gmail.com&su=${encodeURIComponent('Visit Scheduling Request')}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: "Plot 16, Road 504H, Sector 16, Jolshiri Abashon, Dhaka",
      color: "bg-red-500"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "+880 1769-100680\n+880 1711-164217",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "soldiers.builders.bd@gmail.com",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Saturday - Thursday: 9:00 AM - 6:00 PM\nFriday: Closed",
      color: "bg-purple-500"
    }
  ];

  const projects = [
    "Harun's Nest",
    "Tilottoma",
    "Mollick's Dream",
    "Mehnaz",
    "Habib's Utopia",
    "Chandra Neer",
    "Lutfor's Uttorayon",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your dream home or investment opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className={`${info.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                <p className="text-gray-400 whitespace-pre-line">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectInterest" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Interest
                    </label>
                    <select
                      id="projectInterest"
                      name="projectInterest"
                      value={formData.projectInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                    >
                      <option value="">Select a project</option>
                      {projects.map((project, index) => (
                        <option key={index} value={project}>{project}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={handleScheduleVisit}
                    className="flex-1 border-2 border-yellow-400 text-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Schedule Visit</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-900 rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                  <p className="text-gray-400">
                    Our office location and project sites will be displayed here
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Need Immediate Assistance?</h3>
                <div className="space-y-4">
                  <a href="tel:+8801769100680" className="flex items-center space-x-4 hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200">
                    <div className="bg-green-500 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Call us directly</p>
                      <p className="text-gray-400 hover:text-yellow-400">+880 1769-100680</p>
                    </div>
                  </a>
                  <a href="mailto:soldiers.builders.bd@gmail.com" className="flex items-center space-x-4 hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email us</p>
                      <p className="text-gray-400 hover:text-yellow-400">soldiers.builders.bd@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quick answers to common questions about our projects and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is the booking process?",
                answer: "Contact us to schedule a site visit, choose your preferred unit, complete the booking form, and make the initial payment as per our payment plan."
              },
              {
                question: "What payment plans do you offer?",
                answer: "We offer flexible payment plans including installment options. Contact our sales team for detailed payment schedules tailored to your needs."
              },
              {
                question: "How long does construction take?",
                answer: "Our typical construction timeline is 24-30 months from groundbreaking to handover, depending on the project size and complexity."
              },
              {
                question: "Do you provide after-sales service?",
                answer: "Yes, we provide comprehensive after-sales service including maintenance support and warranty coverage for structural and finishing elements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;