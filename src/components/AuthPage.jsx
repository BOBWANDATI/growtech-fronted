import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = ({ onPageChange, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const API_BASE_URL = 'http://localhost:5000/api';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const validateForm = () => {
    if (!isLogin) {
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        if (isLogin) {
          // Store user data and token
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('user', JSON.stringify(result.data.user));
          
          setSuccess('Login successful! Redirecting...');
          
          // Notify parent component about login
          if (onLogin) {
            onLogin(result.data.user);
          }
          
          // Redirect to courses page after a brief delay
          setTimeout(() => {
            onPageChange('courses');
          }, 1500);
        } else {
          setSuccess(result.message || 'Registration successful! Please check your email for verification.');
          // Switch to login form after successful registration
          setTimeout(() => {
            setIsLogin(true);
            setFormData({
              name: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          }, 3000);
        }
      } else {
        setError(result.message || `Failed to ${isLogin ? 'login' : 'register'}. Please try again.`);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'demo@learnpro.com',
          password: 'demo123'
        }),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        
        setSuccess('Demo login successful! Redirecting...');
        
        if (onLogin) {
          onLogin(result.data.user);
        }
        
        setTimeout(() => {
          onPageChange('courses');
        }, 1500);
      } else {
        setError('Demo account not available. Please register normally.');
      }
    } catch (error) {
      setError('Demo login failed. Please register normally.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <div className="auth-header">
            <h1>{isLogin ? 'Welcome Back!' : 'Create Account'}</h1>
            <p>
              {isLogin 
                ? 'Sign in to continue your learning journey' 
                : 'Join thousands of students learning modern skills'
              }
            </p>
          </div>

          {/* Error and Success Messages */}
          {error && (
            <div className="alert alert-error">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}
          
          {success && (
            <div className="alert alert-success">
              <span>✅</span>
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
                disabled={isLoading}
                minLength={isLogin ? 1 : 6}
              />
              {!isLogin && (
                <small className="password-hint">
                  Password must be at least 6 characters long
                </small>
              )}
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!isLogin}
                  placeholder="Confirm your password"
                  disabled={isLoading}
                />
              </div>
            )}

            <button 
              type="submit" 
              className={`auth-submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  {isLogin ? 'Signing In...' : 'Creating Account...'}
                </>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>

            {isLogin && (
              <div className="demo-section">
                <div className="demo-divider">
                  <span>Or try demo</span>
                </div>
                <button 
                  type="button"
                  className="demo-btn"
                  onClick={handleDemoLogin}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading Demo...' : 'Try Demo Account'}
                </button>
              </div>
            )}
          </form>

          <div className="auth-switch">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                className="switch-btn"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setSuccess('');
                }}
                disabled={isLoading}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          <div className="auth-features">
            <h3>Why Join LearnPro?</h3>
            <div className="features-list">
              <div className="feature-item">
                <span>🎯</span>
                <div>
                  <strong>Personalized Learning</strong>
                  <p>Courses tailored to your skill level and goals</p>
                </div>
              </div>
              <div className="feature-item">
                <span>📚</span>
                <div>
                  <strong>Expert Instructors</strong>
                  <p>Learn from industry professionals</p>
                </div>
              </div>
              <div className="feature-item">
                <span>🏆</span>
                <div>
                  <strong>Career Advancement</strong>
                  <p>Skills that employers are looking for</p>
                </div>
              </div>
              <div className="feature-item">
                <span>🔐</span>
                <div>
                  <strong>Secure & Reliable</strong>
                  <p>Your data is protected with enterprise-grade security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;