import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" className="form-control" />
        <input type="email" placeholder="Your Email" className="form-control" />
        <textarea placeholder="Message" rows="4" className="form-control"></textarea>
        <button type="submit" className="btn-submit">Send</button>
      </form>
    </section>
  );
}

