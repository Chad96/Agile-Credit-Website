import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section-with-img">
    <img src="/images/bg1.jpg" alt="Hero" className="hero-img" />
    <div className="hero-content">
      <h1 className="display-2 fw-bold text-light mb-4">
        Your Journey From Debt to Prosperity Starts Here
      </h1>
      <p className="lead fs-4 text-light mb-5">
        Helping South Africans restore their credit, remove debt review and build a better financial future guided by integrity, godliness and real results.
      </p>
      <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
        <button className="btn btn-primary btn-lg px-5 py-3">Get Help Now</button>
        <button className="btn btn-outline-light btn-lg px-5 py-3">Book Free Consultation</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
