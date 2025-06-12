import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import './Home.css'; // We'll create this for specific Home page styles

function Home() {
  // Updated with ultra-specific problem examples that people recognize
  const servicesPreview = [
    { 
      title: 'Pop-ups & Fake Virus Warnings', 
      description: 'Your browser keeps showing "Your computer is infected!" warnings? I\'ll remove the fake alerts and show you how to avoid them.', 
      icon: '🛡️' 
    },
    { 
      title: 'Can\'t Log Into Email or Social Media', 
      description: 'Forgot your password? Account locked? I\'ll help you get back in safely and set up easy password management.', 
      icon: '🔐' 
    },
    { 
      title: 'Computer Running Super Slow', 
      description: 'Takes forever to start up? Programs freezing? I\'ll clean it up and get it running smoothly again.', 
      icon: '⚡' 
    },
  ];

  const faqData = [
    {
      question: "How much do you charge?",
      answer: "Most common fixes are $40-80, plus a $20 travel fee within Grand Falls-Windsor. I always give you a free estimate over the phone first, so you know what to expect before I arrive."
    },
    {
      question: "How quickly can you help me?",
      answer: "Same-day help is often available! I usually respond to calls within 2 hours, and for urgent issues (like being locked out of important accounts), I can often walk you through a solution over the phone immediately."
    },
    {
      question: "What if you can't fix my problem?",
      answer: "If I can't solve your issue, you don't pay. I'll also help you find someone who can, or guide you on next steps. No hidden fees, no surprises."
    },
    {
      question: "Do you work on Macs and PCs?",
      answer: "Yes! I work on Windows PCs, Macs, iPhones, Android phones, tablets, and most other devices. If you use it, I can probably help with it."
    },
    {
      question: "Are you insured and trustworthy?",
      answer: "Absolutely. I'm a local Grand Falls-Windsor resident with full insurance coverage. I understand you're inviting me into your home or trusting me with personal information — that responsibility isn't taken lightly."
    },
    {
      question: "What if I have a really basic question?",
      answer: "No question is too basic! I specialize in helping people who feel intimidated by technology. Whether it's 'How do I send a photo?' or 'Why won't this work?', I'm here to help with patience and zero judgment."
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      <section className="services-preview-section">
        <h2>Problems We Fix Every Day</h2>
        <div className="services-grid">
          {servicesPreview.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </section>

      {/* New Pricing Transparency Section */}
      <section className="pricing-section">
        <div className="pricing-container">
          <h2>💰 Simple, Fair Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-item">
              <div className="pricing-bullet">•</div>
              <div>Most common fixes: <strong>$40-80</strong></div>
            </div>
            
            <div className="pricing-item">
              <div className="pricing-bullet">•</div>
              <div>Free estimate over the phone</div>
            </div>
            <div className="pricing-item">
              <div className="pricing-bullet">•</div>
              <div>No hidden fees - you know the cost upfront</div>
            </div>
          </div>
          
          <div className="process-section">
            <h3>🔧 How It Works</h3>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">1</span>
                <span>Call or text me your problem</span>
              </div>
              <div className="process-step">
                <span className="step-number">2</span>
                <span>I'll give you a rough estimate</span>
              </div>
              <div className="process-step">
                <span className="step-number">3</span>
                <span>We schedule a time that works for you</span>
              </div>
              <div className="process-step">
                <span className="step-number">4</span>
                <span>I fix it and explain what happened</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Common Questions</h2>
          <div className="faq-grid">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-snippet-section">
        <h2>About Tech Friend NL</h2>
        <p>
          We are your local, friendly, and reliable tech support service in Grand Falls-Windsor. 
          Our mission is to provide clear, understandable, and effective help 
          to our community. No jargon, just help!
        </p>
        {/* Link to full about page could go here */}
      </section>

      <CTA 
        title="Need Tech Help?"
        text="Don't let tech troubles frustrate you. Call now for a free estimate!"
        buttonText="Call (709) 727-0484"
        buttonLink="tel:+17097270484"
      />
    </div>
  );
}

export default Home;
