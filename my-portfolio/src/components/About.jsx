import React from "react";
import "../styles/about.css";
import img2 from "../assets/img4.jpg"; // profile image

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>About</h2>
        <p className="about-intro">
          I am a developer passionate about building beautiful and functional
          web applications. I enjoy working with React, JavaScript, and
          constantly learning new technologies to improve my skills. My goal is
          to create clean, user-friendly, and efficient digital experiences.
        </p>

        <div className="about-content">
          {/* Image Left */}
          <div className="about-img">
            <img src={img2} alt="Dipesh Thapa Magar" />
          </div>

          {/* Info Right */}
          <div className="about-info">
            <h3>Frontend Developer & Designer.</h3>
            <p className="fst-italic">
              With a strong focus on modern web technologies and design, I love
              transforming ideas into interactive, responsive, and visually
              appealing applications.
            </p>

            <div className="about-details">
              <ul>
                <li>
                  <span className="arrow">›</span> <strong>Birthday:</strong>{" "}
                  <span>25 April 2002</span>
                </li>
                <li>
                  <span className="arrow">›</span> <strong>Website:</strong>{" "}
                  <span>www.example.com</span>
                </li>
                <li>
                  <span className="arrow">›</span> <strong>Phone:</strong>{" "}
                  <span>+977 9862772747</span>
                </li>
                <li>
                  <span className="arrow">›</span> <strong>City:</strong>{" "}
                  <span>Phidim, Nepal</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className="arrow">›</span> <strong>Age:</strong>{" "}
                  <span>23</span>
                </li>
                <li>
                  <span className="arrow">›</span> <strong>Degree:</strong>{" "}
                  <span>Bachelor of Engineering in Information Technology</span>
                </li>
                <li>
                  <span className="arrow">›</span> <strong>Email:</strong>{" "}
                  <span>thapadipesh722@gmail.com</span>
                </li>
                <li>
                  <span className="arrow">›</span> <strong>Freelance:</strong>{" "}
                  <span>Available</span>
                </li>
              </ul>
            </div>

            <p>
              I believe in continuous learning and adapting to new technologies.
              Beyond coding, I’m passionate about creativity, problem-solving,
              and delivering value through my work. My aim is to grow as a
              professional developer and contribute to meaningful projects that
              make a difference.
            </p>
          </div>
        </div>

        {/* ✅ Skills Section */}
        <div className="skills">
          <h2>Skills</h2>
          <p className="skills-intro">
            These are the core skills and tools I use to design and build
            modern, responsive, and user-friendly web applications.
          </p>

          <div className="skills-content">
            <div className="skill">
              <span>HTML</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <span className="percent">100%</span>
            </div>
            <div className="skill">
              <span>CSS</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "95%" }}></div>
              </div>
              <span className="percent">95%</span>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>
              <span className="percent">70%</span> 
            </div>
            <div className="skill">
              <span>React</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
              <span className="percent">75%</span>
            </div>
            <div className="skill">
              <span>Python</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "30%" }}></div>
              </div>
              <span className="percent">30%</span>
            </div>
            <div className="skill">
              <span>Photoshop</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "60%" }}></div>
              </div>
              <span className="percent">60%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
