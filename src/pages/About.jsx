import React from 'react';
import './About.css'; // Assuming this CSS file exists or will be created

function About() {
  return (
    <div className="about-page container">
      <header className="about-header">
        <h1>About Tech Friend NL</h1>
        <p className="tagline">
          Your Friendly Tech Support Neighbor in Grand Falls-Windsor
        </p>
      </header>

      <section className="about-section" id="our-story">
        <h2>Our Story</h2>
        <p>
          Tech Friend NL was born out of one simple truth: tech shouldn’t feel like a barrier—it should feel like a friend.
        </p>
        <p>
          Too often, people are left to wrestle with confusing pop-ups, Wi-Fi that won’t connect, printers that won’t print, or passwords they can’t remember—with no one to turn to except a busy relative or a corporate service desk that feels worlds away.
        </p>
        <p>
          We wanted to change that.
        </p>
        <p>
          Founded by a lifelong tech tinkerer and community builder right here in Grand Falls-Windsor, Tech Friend NL offers something most tech companies don’t: patience, clarity, and real human help. Whether you’re a senior learning to use a smartphone, a small business needing a bit of guidance, or someone who just wants their computer to stop acting up—we’re here for you.
        </p>
      </section>

      <section className="about-section" id="our-mission">
        <h2>Our Mission</h2>
        <p>
          To make technology less intimidating and more accessible, one neighbor at a time.
        </p>
        <p>
          We provide simple, honest, and practical tech support to individuals, families, and small businesses in Grand Falls-Windsor. From in-home visits to over-the-phone advice, our goal is to build trust—not just fix problems.
        </p>
        <p>
          We want you to feel confident using your devices, not overwhelmed by them.
        </p>
      </section>

      <section className="about-section" id="why-choose-us">
        <h2>Why Locals Choose Tech Friend NL</h2>
        <ul>
          <li>
            <strong>🧑‍🔧 Local & Personal:</strong> We’re not a call center—we’re your neighbor. You’ll always speak to someone who knows the area and cares about the people in it.
          </li>
          <li>
            <strong>💬 Friendly, No-Jargon Support:</strong> We explain things in plain English. No tech-speak, no condescension—just patient, respectful help.
          </li>
          <li>
            <strong>💡 From Pop-Ups to Passwords:</strong> Viruses, forms, Wi-Fi, printers, email setup, online safety—we handle the everyday issues that others overlook.
          </li>
          <li>
            <strong>🔐 Fair, Upfront Pricing:</strong> No hidden fees. No surprises. Just clear rates for real work.
          </li>
          <li>
            <strong>🛠️ Practical Tech Lessons Available:</strong> Want to learn how to use your smartphone better? Set up an email? We offer one-on-one lessons at your pace.
          </li>
        </ul>
      </section>

      <section className="about-section" id="conclusion">
        <p>
          Whether you need help with a glitchy laptop, setting up a new device, or just figuring out how to navigate an online form, Tech Friend NL is here to make technology feel like it’s working with you—not against you.
        </p>
        <p>We’re here to help.</p>
        <p>We’re here to listen.</p>
        <p><strong>We’re your tech friend.</strong></p>
      </section>
    </div>
  );
}

export default About;
