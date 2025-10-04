import React from 'react';
import './CoursePage.css';
import CourseCard from './CourseCard';

const CoursesPage = ({ onCourseSelect, onPageChange }) => {
  const courses = [
    {
      id: 1,
      title: "Modern Digital Computer Skills",
      description: "Master essential digital skills for the modern workplace",
      duration: "2weeks",
      level: "Beginner",
      price: "$25",
      icon: "💻"
    },
    {
      id: 2,
      title: "Graphics Design",
      description: "Learn professional design principles and tools",
      duration: "2 weeks",
      level: "Beginner",
      price: "$25",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Scratch Programming",
      description: "Introduction to programming through visual blocks",
      duration: "2.5weeks",
      level: "Beginner",
      price: "$50",
      icon: "🧩"
    },
    {
      id: 4,
      title: "HTML & CSS",
      description: "Build beautiful websites with HTML and CSS",
      duration: "3 weeks",
      level: "Beginner",
      price: "$90",
      icon: "🌐"
    },
    {
      id: 5,
      title: "JavaScript",
      description: "Make your websites interactive with JavaScript",
      duration: "3 weeks",
      level: "Beginner",
      price: "$100",
      icon: "⚡"
    },
    {
      id: 6,
      title: "Git & GitHub",
      description: "Master version control and collaboration",
      duration: "1 weeks",
      level: "Beginner",
      price: "$20",
      icon: "📚"
    }
  ];

  const handleEnrollClick = (course) => {
    onCourseSelect(course);
    onPageChange('course-details');
  };

  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-header">
          <h1 className="courses-title">Our Courses</h1>
          <p className="courses-subtitle">
            Choose from our carefully crafted courses designed to take you from beginner to pro
          </p>
        </div>
        
        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onEnrollClick={handleEnrollClick}
            />
          ))}
        </div>
        
        <div className="courses-cta">
          <h2>Not Sure Which Course to Choose?</h2>
          <p>Contact us for personalized guidance on your learning journey.</p>
          <button className="btn-primary">Get Guidance</button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;