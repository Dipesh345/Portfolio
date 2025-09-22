import React from "react";
import "../styles/contact.css";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hello? Fill out the form
          below and I'll get back to you soon.
        </p>

        <form className="contact-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Your Name" className="form-control" />
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Your Email" className="form-control" />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="form-control textarea"
          ></textarea>
          <button type="submit" className="btn-submit">
            <FaPaperPlane className="btn-icon" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
