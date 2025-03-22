import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import LiquidChrome from '../Effects/LiquidChrome';

const ContactPage = ({ onMouseEnter, onMouseLeave }) => {
  const [formRefInView, formInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const formElement = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Web Development'
  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_o6888id',
        'template_b2dws1k',
        formElement.current,
        '3faYT6apdGer9QmCS'
      )
      .then(
        () => {
          console.log('Email sent');
          setFormSubmitted(true);
          setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              message: '',
              service: 'Web Development'
            });
          }, 5000);
        },
        (error) => {
          console.error('Email error:', error);
        }
      );
  };

  const contactInfo = [
    {
      title: 'Email',
      content: 'office@justbettersites.com',
      link: 'mailto:office@justbettersites.com',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.25 1.13a11.042 11.042 0 005.52 5.52l1.13-2.25L19 17v2a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Address',
      content: 'Bucharest, Romania',
      link: 'https://maps.google.com',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-24">
      <section className="relative py-24 bg-white overflow-hidden" data-scroll-section>
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <LiquidChrome baseColor={[0.95, 0.75, 0.8]} speed={0.8} amplitude={0.5} interactive={true} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p className="text-xl text-gray-600 mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Have a project in mind? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      <section ref={formRefInView} className="py-24 bg-light" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                {formSubmitted ? (
                  <motion.div className="w-full bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully.</p>
                  </motion.div>
                ) : (
                  <form ref={formElement} onSubmit={handleSubmit}>
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />
                      <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />
                      <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    {/* Service */}
                    <div className="mb-6">
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {/* Message */}
                    <div className="mb-6">
                      <textarea name="message" rows="7" placeholder="Your message..." required value={formData.message} onChange={handleChange} className="w-full md:w-[100%] px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                    </div>
                    <motion.button type="submit" className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm h-full">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-light p-3 rounded-lg mr-4">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <a href={item.link} className="text-gray-600 hover:text-primary transition-colors">{item.content}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
