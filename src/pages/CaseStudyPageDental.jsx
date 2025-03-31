import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Import dental client images
import den1 from '../assets/dental/den1.png';
import den2 from '../assets/dental/den2.png';
import den3 from '../assets/dental/den3.png';
import den4 from '../assets/dental/den4.png';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CaseStudyPageDental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState({
    metrics: false,
    timeline: false,
    testimonials: false
  });

  // Scroll observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.observe-section');
    
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Client satisfaction data for pie chart (updated colors to blue spectrum)
  const satisfactionData = [
    { name: 'Very Satisfied', value: 75, color: '#2563eb' },
    { name: 'Satisfied', value: 15, color: '#60a5fa' },
    { name: 'Neutral', value: 7, color: '#93c5fd' },
    { name: 'Unsatisfied', value: 3, color: '#bfdbfe' }
  ];

  // Monthly growth data for line chart (updated stroke colors)
  const growthData = [
    { month: 'Jan', before: 30, after: 35 },
    { month: 'Feb', before: 32, after: 40 },
    { month: 'Mar', before: 28, after: 45 },
    { month: 'Apr', before: 33, after: 52 },
    { month: 'May', before: 35, after: 58 },
    { month: 'Jun', before: 34, after: 63 }
  ];

  // Key metrics data
  const metricsData = [
    { 
      title: 'Client Satisfaction', 
      value: '90%', 
      icon: '😀', 
      description: 'Significant improvement in customer satisfaction ratings from website visitors'
    },
    { 
      title: 'Conversion Rate', 
      value: '75%', 
      icon: '📈', 
      description: 'Higher conversion rate resulting in more appointment bookings and sales'
    },
    { 
      title: 'Time Saved', 
      value: '15 hrs/week', 
      icon: '⏱️', 
      description: 'Reduced time spent on website maintenance through our support package'
    },
    { 
      title: 'ROI', 
      value: '280%', 
      icon: '💰', 
      description: 'Return on investment in just the first 6 months after site launch'
    }
  ];

  // Project stages
  const projectStages = [
    { title: 'Discovery & Planning', description: 'In-depth analysis of client needs, target audience, and competition' },
    { title: 'Design & Prototyping', description: 'Creation of wireframes and design mockups for client approval' },
    { title: 'Development', description: 'Building the website with cutting-edge technologies and optimization' },
    { title: 'Testing & Launch', description: 'Rigorous testing and smooth transition to the live environment' },
    { title: 'Ongoing Support', description: 'Regular maintenance and updates to ensure optimal performance' }
  ];

  // Testimonials
  const testimonials = [
    { 
      name: 'Dr. Maria Ionescu', 
      role: 'Lead Dentist, SmileDental', 
      quote: 'JustBetter has transformed our online presence. The website has made managing appointments effortless, and patients love the easy navigation.'
    },
    { 
      name: 'Andrei Popescu', 
      role: 'Office Manager, SmileDental', 
      quote: 'The maintenance package has saved us countless hours that we now dedicate to our patients. The team at JustBetter is responsive and professional.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
          <img 
            src={den1} 
            alt="SmileDental Clinic" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={slideUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              SmileDental Success Story
            </motion.h1>
            <motion.p 
              variants={slideUp}
              className="text-xl md:text-2xl text-white/90 mb-10"
            >
              How JustBetter transformed a dental practice online presence and business metrics
            </motion.p>
            <motion.div
              variants={slideUp}
            >
              <a 
                href="#overview" 
                className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-100 transition-colors shadow-lg"
              >
                Explore the Case Study
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Project Overview</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              SmileDental approached JustBetter with a challenge: their outdated website was failing to attract new patients and did not reflect their modern approach to dental care. Our mission was to create a digital experience that would showcase their expertise, streamline appointment booking, and build trust with potential patients.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={slideUp} className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">The Challenge</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Outdated website with poor user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>No online appointment booking functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Limited online visibility in search results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>High time investment in website maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">The Solution</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Modern, responsive website design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Integrated appointment booking system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>SEO optimization for higher visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Comprehensive maintenance package</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div variants={slideUp} className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={den1} 
                alt="SmileDental Website Homepage" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Results Section */}
      <section id="metrics" className="py-20 bg-white observe-section">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate={isVisible.metrics ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-3">Key Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solution delivered measurable improvements across all key performance indicators
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isVisible.metrics ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {metricsData.map((metric, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{metric.title}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-3">{metric.value}</div>
                <p className="text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-3">Performance Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The impact of our website redesign and maintenance package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Client Satisfaction Rating
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {satisfactionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Monthly Appointment Growth
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={growthData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="before" 
                      name="Before Redesign" 
                      stroke="#64748b" 
                      strokeWidth={2} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="after" 
                      name="After Redesign" 
                      stroke="#2563eb" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-3">The New Website</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A modern, user-friendly design that perfectly represents SmileDental brand
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[den1, den2, den3, den4].map((image, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="overflow-hidden rounded-xl shadow-lg group"
              >
                <motion.img 
                  src={image} 
                  alt={`SmileDental Website - View ${index + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Timeline Section - Modified */}
      <section id="timeline" className="py-20 bg-blue-900 text-white observe-section">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate={isVisible.timeline ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-3">Project Timeline</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              How we transformed SmileDental digital presence
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isVisible.timeline ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            
            {projectStages.map((stage, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12">
                      <div className="bg-blue-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                        <p className="text-blue-100">{stage.description}</p>
                      </div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-lg mx-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-lg mx-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="w-5/12">
                      <div className="bg-blue-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                        <p className="text-blue-100">{stage.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white observe-section">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate={isVisible.testimonials ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-3">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What the SmileDental team has to say about our collaboration
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isVisible.testimonials ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-lg border border-blue-100"
              >
                <svg className="w-12 h-12 text-blue-400 mb-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3h3V8h-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3h3V8h-4z"></path>
                </svg>
                <p className="text-lg text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Maintenance Package Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-3">Maintenance Package</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive maintenance solution that keeps SmileDental website running smoothly
              </p>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">What Included</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">24/7 website monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Regular security updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Content updates (4 hours/month)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Monthly analytics reports</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">15+ hours saved weekly on maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Improved website security</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Faster loading times</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Continuous improvement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                      <span className="text-gray-700">Data-driven decision making</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={slideUp}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Ready to transform your business?
            </motion.h2>
            <motion.p 
              variants={slideUp}
              className="text-xl text-blue-100 mb-10"
            >
              Let create a digital experience that drives results for your business
            </motion.p>
            <motion.div
              variants={slideUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/contact" 
                className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-100 transition-colors shadow-lg"
              >
                Let Talk About Your Project
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPageDental;
