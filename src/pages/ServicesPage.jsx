import { useInView } from 'react-intersection-observer'
import HeroSection from '../HeroSections/HeroSection'
import ProcessSection from '../components/ProcessSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'
import { useEffect, useState } from 'react'
import ServicesSection from '../components/ServicesSection'
import { FiChevronRight } from 'react-icons/fi'

const FAQSectionComponent = ({ faqRef, faqInView, faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section 
      ref={faqRef}
      className="py-16 sm:py-20 bg-gradient-to-r from-purple-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-md shadow-sm"
              >
                {/* Întrebare */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full justify-between items-center px-5 py-4 focus:outline-none border-b border-gray-200"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-700">
                    {item.question}
                  </span>
                  <FiChevronRight
                    className={`transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                    size={20}
                    color="#4B5563"
                  />
                </button>
                {/* Răspuns */}
                <div
                  className="px-5 overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="py-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(0)
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  // Actualizare: doar cele 8 servicii cerute
  const services = [
    {
      title: 'Custom Websites',
      description:
        'Get a stunning, responsive website tailored to your brand. We build fast, user-friendly, and mobile-optimized sites that captivate visitors and drive engagement.',
      features: [
        'Bespoke design aligned with your brand identity',
        'Mobile-first approach',
        'High-performance & SEO-friendly structure',
        'Scalable architecture'
      ],
      image:
        'https://images.unsplash.com/photo-1551732991-2b9e6c2a9c98?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Web Applications',
      description:
        'Transform your business with custom web apps. We develop powerful, secure, and scalable applications for automation, data management, and seamless user interactions.',
      features: [
        'Tailored solutions for unique processes',
        'Secure authentication & data handling',
        'Scalable cloud deployment',
        'Modern tech stack'
      ],
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Online Shops',
      description:
        'Launch a high-performing online store with easy product management, secure payments, and a smooth shopping experience designed to increase conversions.',
      features: [
        'User-friendly product management',
        'Multiple payment gateways',
        'Optimized checkout flow',
        'Conversion-driven design'
      ],
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Digital Archiving',
      description:
        'Organize and secure your documents with digital archiving. Easily store, retrieve, and manage important files while ensuring data protection and accessibility.',
      features: [
        'Centralized document management',
        'Secure encryption & backups',
        'Easy retrieval & search',
        'Compliance support'
      ],
      image:
        'https://images.unsplash.com/photo-1616436587514-72c65749eab2?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Landing Pages',
      description:
        'Make a strong first impression with high-converting landing pages. Designed for speed, clarity, and action—perfect for promotions, campaigns, or product launches.',
      features: [
        'Compelling copy & visuals',
        'A/B testing & conversion tracking',
        'Fast loading times',
        'Clear CTAs'
      ],
      image:
        'https://images.unsplash.com/photo-1522199794611-d049dee2eacc?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Mobile Apps',
      description:
        'Reach your audience anytime, anywhere. We create user-friendly iOS and Android apps with intuitive design, seamless navigation, and powerful functionality.',
      features: [
        'Cross-platform or native solutions',
        'Push notifications & real-time updates',
        'Offline mode & data sync',
        'App Store & Play Store publishing'
      ],
      image:
        'https://images.unsplash.com/photo-1616253888401-87bba24f0f47?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Business Automation',
      description:
        'Automate your business processes with custom solutions. Streamline operations, reduce manual tasks, and increase efficiency with our tailored automation tools.',
      features: [
        'Workflow optimization',
        'Third-party API integration',
        'Real-time monitoring',
        'Scalable solutions'
      ],
      image:
        'https://images.unsplash.com/photo-1581091012184-7c5f6c2a9c98?auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'Ai Solutions',
      description:
        'Leverage the power of artificial intelligence to transform your business. From predictive analytics to intelligent automation, we design AI solutions that drive innovation.',
      features: [
        'Machine learning models',
        'Data-driven insights',
        'Predictive analytics',
        'Seamless integration'
      ],
      image:
        'https://images.unsplash.com/photo-1581093588401-fb10666bb6a9?auto=format&fit=crop&w=1000&q=60'
    }
  ]

  // FAQ-urile (le poți modifica după nevoie)
  const faqs = [
    {
      question: 'What is your development process?',
      answer:
        'Our process includes discovery, planning, design, development, testing, and deployment. We collaborate closely with clients every step of the way.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'A simple website takes 4-6 weeks; complex apps may take 3-6 months. You\'ll get a timeline at project start.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we offer update packages, maintenance, and performance monitoring to keep your product running smoothly.'
    },
    {
      question: 'How do you price projects?',
      answer:
        'We provide transparent, tailored pricing. Fixed-price or time & materials depending on your needs.'
    },
    {
      question: 'What technologies do you use?',
      answer:
        'React, Vue.js, Node.js, Python, PHP, Kotlin, Swift, and more – we choose what fits your project best.'
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'Testing at every stage: unit, integration, UAT. Plus code reviews and adherence to industry standards.'
    }
  ]

  return (
    <div className="pt-28">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your business needs. From custom websites to AI solutions, we've got you covered."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 border-b mb-8">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedService(idx)}
              className={`py-2 px-3 sm:px-4 text-xs sm:text-sm md:text-base font-semibold transition-colors rounded-t-lg ${
                selectedService === idx
                  ? 'text-blue-600 border-b-4 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
        <div>
          <ServicesSection service={services[selectedService]} showTitle />
        </div>
      </div>
      <ProcessSection processRef={processRef} processInView={processInView} />
      <FAQSectionComponent faqRef={faqRef} faqInView={faqInView} faqs={faqs} />
      <CTASection />
    </div>
  )
}

export default ServicesPage
