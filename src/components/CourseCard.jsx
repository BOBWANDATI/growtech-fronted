import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onEnrollClick }) => {
  return (
    <div className="course-card">
      <div className="course-header">
        <div className="course-icon">{course.icon}</div>
        <div className="course-badge">{course.level}</div>
      </div>
      
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        
        <div className="course-details">
          <div className="course-detail">
            <span className="detail-label">Duration:</span>
            <span className="detail-value">{course.duration}</span>
          </div>
          <div className="course-detail">
            <span className="detail-label">Price:</span>
            <span className="detail-value price">{course.price}</span>
          </div>
        </div>
      </div>
      
      <div className="course-footer">
        <button 
          className="enroll-btn"
          onClick={() => onEnrollClick(course)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;