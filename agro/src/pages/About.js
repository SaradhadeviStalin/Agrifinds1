import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="intro">
        <h1>Welcome to AgriFinds</h1>
        <p>
          At AgriFinds, we're transforming agriculture through innovative technology and sustainable practices. Our solutions are designed to enhance efficiency and support farmers worldwide.
        </p>
      </section>

      <section className="milestones">
        <h2>Our Milestones</h2>
        <div className="milestones-container">
          <div className="milestones-expand">
            <div className="milestone">
              <div className="milestone-date">2024</div>
              <div className="milestone-content">
                <h3>Flagship Product Launch</h3>
                <p>We introduced our advanced product line featuring state-of-the-art farming tools aimed at improving productivity and efficiency.</p>
              </div>
            </div>
            <br/>
            <div className="milestone">
              <div className="milestone-date">2023</div>
              <div className="milestone-content">
                <h3>Major Agricultural Scheme</h3>
                <p>We implemented innovative irrigation techniques and crop management strategies to enhance yields and reduce water usage.</p>
              </div>
            </div>
            <br/>
            <div className="milestone">
              <div className="milestone-date">2022</div>
              <div className="milestone-content">
                <h3>Company Foundation</h3>
                <p>Founded with a vision to revolutionize agriculture, starting with strategic collaborations with top experts and innovators.</p>
              </div>
            </div>
            <br/>
            <div className="milestone">
              <div className="milestone-date">2021</div>
              <div className="milestone-content">
                <h3>First Pilot Project</h3>
                <p>Launched our first pilot project to test new farming technologies in real-world conditions, gathering valuable feedback and data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-values">
        <div className="team">
          <h2>Meet Our Team</h2>
          <p>Our team of dedicated professionals brings together expertise in agriculture, technology, and sustainability to address modern farming challenges with innovative solutions. We leverage cutting-edge research and data-driven insights to optimize productivity, enhance resource efficiency, and promote environmental stewardship, ensuring that our approaches not only meet today’s needs but also pave the way for a resilient and sustainable agricultural future.</p>
        
        </div>
<br/>
        <div className="values">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Developing cutting-edge solutions for modern agriculture.</li>
            <li><strong>Sustainability:</strong> Prioritizing eco-friendly practices for a better future.</li>
            <li><strong>Collaboration:</strong> Partnering with farmers and stakeholders to achieve common goals.</li>
            <li><strong>Excellence:</strong> Striving for the highest standards in everything we do.</li>
          </ul>
        </div>
      </section>
<br/>
      <section className="contact-social">
        <div className="contact">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Reach out through the following:</p>
          <ul>
            <li><strong>Email:</strong> contact@agrifinds.com</li>
            <li><strong>Phone:</strong> +91-987-654-3210</li>
          </ul>
        </div>

        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/AgriFinds" target="_blank" rel="noopener noreferrer" className="facebook" title="Facebook"></a>
            <a href="https://twitter.com/AgriFinds" target="_blank" rel="noopener noreferrer" className="twitter" title="Twitter"></a>
            <a href="https://www.linkedin.com/company/agrifinds" target="_blank" rel="noopener noreferrer" className="linkedin" title="LinkedIn"></a>
            <a href="https://www.instagram.com/agrifinds" target="_blank" rel="noopener noreferrer" className="instagram" title="Instagram"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
