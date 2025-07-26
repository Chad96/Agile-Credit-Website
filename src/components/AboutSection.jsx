import React from 'react';
import { CheckCircle, Shield, Users, TrendingUp } from 'lucide-react';

const values = [
  { title: "Trust and Integrity", icon: <Shield size={24} className="text-primary me-2" /> },
  { title: "Godliness", icon: <CheckCircle size={24} className="text-primary me-2" /> },
  { title: "Professionalism", icon: <Users size={24} className="text-primary me-2" /> },
  { title: "Financial Growth", icon: <TrendingUp size={24} className="text-primary me-2" /> }
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h2 className="display-4 fw-bold mb-4">About Us</h2>
          <p className="lead mb-4">
            At Agile Credit Solutions, we believe everyone deserves a second chance.
          </p>
          <div className="row g-3">
            {values.map((value, index) => (
              <div key={index} className="col-md-6">
                <div className="d-flex align-items-center">
                  {value.icon}
                  <span className="fw-semibold">{value.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h3 className="h4 fw-bold mb-4">Our Values</h3>
              <ul className="list-unstyled">
                {values.map((value, index) => (
                  <li key={index} className="d-flex align-items-center mb-3">
                    <CheckCircle size={20} className="text-success me-3" />
                    <span>{value.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
