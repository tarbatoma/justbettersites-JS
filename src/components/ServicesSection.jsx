import React, { memo } from 'react';
import { useInView } from 'react-intersection-observer';

const ServicesSection = ({ service, showTitle = false, onMouseEnter, onMouseLeave }) => {
  const [ref] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-light" data-scroll-section>
      <div className="container mx-auto px-6">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of services designed to help your business thrive in the digital landscape.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img
              loading="lazy"
              src={service.image}
              alt={service.title}
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
