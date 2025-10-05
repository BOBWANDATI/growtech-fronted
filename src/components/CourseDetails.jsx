import React, { useState } from 'react';
import './CourseDetails.css';

const CourseDetails = ({ course, onPageChange }) => {
  const [showApplication, setShowApplication] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // ✅ Use environment variable for backend URL (Render)
  const API_URL = import.meta.env.VITE_API_URL;

  const handleInputChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

<<<<<<< HEAD
 const handleSubmitApplication = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://growtech-wfn3.onrender.com/api/applications/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...applicationData,
        courseTitle: course.title
      }),
    });
=======
  const handleSubmitApplication = async (e) => {
    e.preventDefault();
>>>>>>> 5f30e27 (boyy)

    try {
      const response = await fetch(`${API_URL}/api/applications/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...applicationData,
          courseTitle: course.title,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        setShowApplication(false);
        setApplicationData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to submit application: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  if (!course) {
    return (
      <div className="course-details">
        <div className="container">
          <div className="error-message">
            <h2>Course not found</h2>
            <button
              className="btn-primary"
              onClick={() => onPageChange('courses')}
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-details">
      <div className="container">
        <button className="back-btn" onClick={() => onPageChange('courses')}>
          ← Back to Courses
        </button>

        <div className="course-details-content">
          <div className="course-info">
            <div className="course-header-details">
              <div className="course-icon-large">{course.icon}</div>
              <div>
                <h1 className="course-title-large">{course.title}</h1>
                <div className="course-meta">
                  <span className="meta-item">⏱️ {course.duration}</span>
                  <span className="meta-item">📊 {course.level}</span>
                  <span className="meta-item price-large">💰 {course.price}</span>
                </div>
              </div>
            </div>

            <div className="course-description-full">
              <h2>Course Description</h2>
              <p>
                {course.description} This comprehensive course is designed to
                take you from complete beginner to confident practitioner.
                You'll learn through hands-on projects, real-world examples, and
                expert guidance.
              </p>

              <h3>What You'll Learn</h3>
              <ul className="learning-list">
                <li>Fundamental concepts and principles</li>
                <li>Practical skills and techniques</li>
                <li>Industry best practices</li>
                <li>Project-based learning approach</li>
                <li>Career development guidance</li>
              </ul>

              <h3>Course Requirements</h3>
              <ul className="requirements-list">
                <li>Basic computer knowledge</li>
                <li>Internet connection</li>
                <li>Dedication to learn</li>
                <li>No prior experience required</li>
              </ul>
            </div>
          </div>

          <div className="course-actions">
            <div className="action-card">
              <h3>Ready to Start?</h3>
              <p>Join this course and begin your learning journey today!</p>

              <div className="pricing-info">
                <div className="original-price">$199</div>
                <div className="current-price">{course.price}</div>
                <div className="discount">Special Offer!</div>
              </div>

              <button
                className="btn-primary enroll-now-btn"
                onClick={() => setShowApplication(true)}
              >
                Enroll Now
              </button>

              <div className="course-features">
                <div className="feature">
                  <span>✅</span>
                  <span>Lifetime access</span>
                </div>
                <div className="feature">
                  <span>✅</span>
                  <span>Certificate of completion</span>
                </div>
                <div className="feature">
                  <span>✅</span>
                  <span>24/7 support</span>
                </div>
                <div className="feature">
                  <span>✅</span>
                  <span>Project portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showApplication && (
          <div className="application-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Enroll in {course.title}</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowApplication(false)}
                >
                  ×
                </button>
              </div>

              <form
                onSubmit={handleSubmitApplication}
                className="application-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Why are you interested in this course?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={applicationData.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    Submit Application
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setShowApplication(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
