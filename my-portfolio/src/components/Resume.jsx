import React from "react";
import "../styles/resume.css";

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2>Resume</h2>
        <p className="resume-intro">
          A snapshot of my <strong>education</strong> and{" "}
          <strong>projects</strong>.  
          Focused on building practical solutions through creativity and
          technology.
        </p>

        <div className="resume-content">
          {/* Education */}
          <div className="resume-box">
            <h3>Education</h3>

            <div className="resume-item">
              <h4>Bachelor in Information Technology</h4>
              <span className="resume-date">2021 – 2025</span>
              <p>
                Nepal College of Information Technology (NCIT) – Studying
                modern web technologies, programming, and software development.
              </p>
            </div>

            <div className="resume-item">
              <h4>High School (Science)</h4>
              <span className="resume-date">2018 – 2020</span>
              <p>
                Little Angels’ College – Completed +2 in Science with a focus on
                Computer Science and Mathematics.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="resume-box">
            <h3>Projects</h3>

            <div className="resume-item">
              <h4>Travel Website (College Project)</h4>
              <span className="resume-date">2023</span>
              <p>
                Designed and developed a responsive travel website for trip
                planning and booking.
              </p>
                <strong>Technologies:</strong> HTML, CSS, JavaScript, Django
                
            </div>

            <div className="resume-item">
              <h4>Car Sales & Rental System</h4>
              <span className="resume-date">2024</span>
              <p>
                Built a complete web application for car sales and rentals.
                <br />
                <strong>Technologies:</strong> HTML, CSS, JavaScript, Django
                <br />
                <strong>Features:</strong> OTP verification for secure signup,
                Khalti payment gateway integration, and rental booking system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
