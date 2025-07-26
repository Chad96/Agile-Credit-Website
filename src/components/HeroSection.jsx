import React from 'react';

const HeroSection = () => (
  <section className="hero-section">
    <div className="container-fluid px-4 px-lg-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10">
          <h1 className="display-2 fw-bold text-dark mb-4">
            Your Journey From Debt to Prosperity Starts Here
          </h1>
          <p className="lead fs-4 text-muted mb-5">
            Helping South Africans restore their credit, remove debt review and build a better financial future guided by integrity, godliness and real results.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-primary btn-lg px-5 py-3">Get Help Now</button>
            <button className="btn btn-outline-primary btn-lg px-5 py-3">Book Free Consultation</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
