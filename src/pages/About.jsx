import React from 'react';
import './About.css'; // To be created

function About() {
  return (
    <div className="about-page container">
      <header className="about-header">
        <h1>About Tech Friend NL</h1>
        <p className="tagline">
          Your trusted local partner for all things tech in Grand Falls-Windsor.
        </p>
      </header>

      <section className="about-section" id="our-story">
        <h2>Our Story</h2>
        <p>
          Tech Friend NL started with a simple idea: technology should be helpful, not frustrating. 
          Founded by [Founder's Name/Story Snippet, e.g., a long-time tech enthusiast with years of experience helping friends and family],
          we saw a need in Grand Falls-Windsor for friendly, reliable, and accessible tech support. 
          We're passionate about demystifying technology and empowering our community to make the most of their digital tools.
        </p>
      </section>

      <section className="about-section" id="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-notch, understandable, and affordable tech support to individuals and small businesses 
          in our local area. We strive to build lasting relationships with our clients based on trust, transparency, 
          and a genuine desire to help. We believe in clear communication, fair pricing, and solutions tailored to your specific needs.
        </p>
      </section>

      <section className="about-section" id="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Local & Trusted:</strong> We're part of your community and dedicated to serving our neighbors.
          </li>
          <li>
            <strong>Friendly & Patient:</strong> No jargon, just clear explanations and patient support.
          </li>
          <li>
            <strong>Experienced & Knowledgeable:</strong> Skilled in a wide range of tech issues and solutions.
          </li>
          <li>
            <strong>Fair & Transparent Pricing:</strong> Clear, upfront costs with no hidden fees.
          </li>
          <li>
            <strong>Personalized Service:</strong> We take the time to understand your needs and provide tailored solutions.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
