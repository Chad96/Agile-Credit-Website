import React from 'react';
import { CheckCircle, Shield, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    title: "Debt Review Removal",
    description: "We help you remove your name from debt review the legal way - so you can qualify for credit again.",
    icon: <CheckCircle size={48} className="text-primary mb-3" />
  },
  {
    title: "Blacklisted Assistance",
    description: "If you've been blacklisted, we will guide you in clearing your name and starting fresh.",
    icon: <Shield size={48} className="text-primary mb-3" />
  },
  {
    title: "Adverse & Judgment Removal",
    description: "We assist in removing negative listings, adverse accounts, and court judgments from your credit profile.",
    icon: <TrendingUp size={48} className="text-primary mb-3" />
  },
  {
    title: "Prescribed Debt Removal",
    description: "Some debts expire after a certain period. We check and help you legally remove any prescribed debts you're no longer responsible for.",
    icon: <CheckCircle size={48} className="text-primary mb-3" />
  },
  {
    title: "Credit Score Education",
    description: "Learn how credit works, how to fix your credit score, and how to maintain a strong financial profile.",
    icon: <Users size={48} className="text-primary mb-3" />
  },
  {
    title: "One-on-One Support",
    description: "You don't have to do this alone. We provide personal guidance every step of the way with care and confidentiality.",
    icon: <Users size={48} className="text-primary mb-3" />
  }
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2 className="display-4 fw-bold mb-3">Our Services</h2>
          <p className="lead text-muted">From Debt to Prosperity</p>
        </div>
      </div>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card service-card h-100 p-4 text-center">
              <div className="card-body">
                {service.icon}
                <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
