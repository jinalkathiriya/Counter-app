import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [recognition, setRecognition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".counter-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let yearsTarget = 20;
      let projectsTarget = 500;
      let recognitionTarget = 800;

      const interval = setInterval(() => {
        setYears((prev) => (prev < yearsTarget ? prev + 1 : yearsTarget));
        setProjects((prev) => (prev < projectsTarget ? prev + 5 : projectsTarget));
        setRecognition((prev) => (prev < recognitionTarget ? prev + 5 : recognitionTarget));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Empowering Your Business with Innovation</h1>
        <p>We provide cutting-edge solutions to help businesses grow and succeed in a competitive world.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature fade-in">
          <h2>Quality Services</h2>
          <p>We offer top-notch services tailored to your needs, ensuring high-quality results.</p>
        </div>
        <div className="feature fade-in delay-1">
          <h2>Customer Satisfaction</h2>
          <p>Our priority is delivering outstanding experiences and exceeding customer expectations.</p>
        </div>
        <div className="feature fade-in delay-2">
          <h2>Innovative Solutions</h2>
          <p>We bring creativity and technology together to solve your business challenges.</p>
        </div>
      </section>

      {/* Counter Section */}
      <div className="counter-section">
        <div className="counter-header">
          <h1>Why Choose Us?</h1>
          <p>We deliver excellence with experience, successful projects, and global recognition.</p>
        </div>
        <div className="counter-container">
          <h2 className="counter-title">The Most Preferred And Trusted</h2>
          <div className="counter-items">
            <div className={`counter-item ${isVisible ? "fade-in" : ""}`}>
              <h3>{years}+</h3>
              <p>Years Experience</p>
            </div>
            <div className={`counter-item ${isVisible ? "fade-in delay-1" : ""}`}>
              <h3>{projects}+</h3>
              <p>Projects Finished</p>
            </div>
            <div className={`counter-item ${isVisible ? "fade-in delay-2" : ""}`}>
              <h3>{recognition}+</h3>
              <p>Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
