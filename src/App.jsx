import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursePage';
import CourseDetails from './components/CourseDetails';
import AuthPage from './components/AuthPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return <CoursesPage onCourseSelect={setSelectedCourse} onPageChange={setCurrentPage} />;
      case 'course-details':
        return <CourseDetails course={selectedCourse} onPageChange={setCurrentPage} />;
      case 'auth':
        return <AuthPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;