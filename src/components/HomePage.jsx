import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = ({ onPageChange }) => {
  // Background images
  const images = [
    'https://github.com/BOBWANDATI/images/blob/main/francis-odeyemi-P6-3klZ9Ypw-unsplash.jpg?raw=true',
    'https://github.com/BOBWANDATI/images/blob/main/stanley-masinde-XwsmcJrXa2I-unsplash.jpg?raw=true',
    'https://github.com/BOBWANDATI/images/blob/main/micheal-ogungbe-SHgueDAHJFk-unsplash.jpg?raw=true',
    'https://github.com/BOBWANDATI/images/blob/main/iwaria-inc-vWqBjWbc_H4-unsplash.jpg?raw=true',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="hero-content">
            {/* Left Text */}
            <div className="hero-text">
              <h1 className="hero-title">
                Unlock Your <span className="text-blue">Potential</span> with 
                <span className="text-yellow"> Modern Skills</span>
              </h1>
              <p className="hero-description">
                Join thousands of students mastering digital skills that matter in today's world. 
                From programming to design, we provide the tools you need to succeed in the digital age.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn-primary"
                  onClick={() => onPageChange('courses')}
                >
                  Explore Courses
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => onPageChange('auth')}
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hero-image">
              <div className="floating-card card-1">
                <span>💻</span>
                <p>Programming</p>
              </div>
              <div className="floating-card card-2">
                <span>🎨</span>
                <p>Design</p>
              </div>
              <div className="floating-card card-3">
                <span>🚀</span>
                <p>Development</p>
              </div>
              <div className="hero-main-card">
                <h3>Start Learning Today!</h3>
                <p>Join our community of learners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">Why Choose GrowTech?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of experience in their fields.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>Up-to-date courses designed to meet current industry standards and demands.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community Support</h3>
              <p>Join a vibrant community of learners and get support when you need it.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Career Ready</h3>
              <p>Gain skills that employers are looking for in today's job market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of students who have transformed their careers with our courses.</p>
            <button 
              className="btn-secondary"
              onClick={() => onPageChange('auth')}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
