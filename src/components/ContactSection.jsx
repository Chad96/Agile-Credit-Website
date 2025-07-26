import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => (
  <section id="contact" className="section-padding bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2 className="display-4 fw-bold mb-3">Contact Us</h2>
          <p className="lead text-muted">Service Area: Nationwide (Remote Support)</p>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 text-center">
          <div className="contact-icon"><Phone size={32} className="text-primary" /></div>
          <h3 className="h5 fw-bold mb-3">Phone</h3>
          <p className="text-muted mb-1">Mobile: 075 154 0808</p>
          <p className="text-muted">Tel: 087 255 3598</p>
        </div>
        <div className="col-lg-4 text-center">
          <div className="contact-icon"><Mail size={32} className="text-primary" /></div>
          <h3 className="h5 fw-bold mb-3">Email</h3>
          <p className="text-muted">info@agilecreditsolutions.co.za</p>
        </div>
        <div className="col-lg-4 text-center">
          <div className="contact-icon"><MessageCircle size={32} className="text-primary" /></div>
          <h3 className="h5 fw-bold mb-3">WhatsApp</h3>
          <button className="btn btn-success px-4 py-2">Click to Chat</button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
