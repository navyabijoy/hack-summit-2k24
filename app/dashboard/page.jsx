"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

import Greeting from '../dashboard/components/greeting'

const Dashboard = () => {
  const { user } = useUser();
  const [userCourses, setUserCourses] = useState([]);
  const [userQuizzes, setUserQuizzes] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        // Simulate fetching user-specific courses and quizzes
        // Replace these with actual API calls in a real application
        const mockUserCourses = [
            {
                title: 'ASL Medical Terms',
                description: 'Learn advanced medical terminology in ASL',
                duration: '7 minutes',
                url: 'https://www.youtube.com/watch?v=gqFjJwiWoIA',
                thumbnailUrl: 'https://img.youtube.com/vi/gqFjJwiWoIA/hqdefault.jpg'
        
              },
          {
        title: 'Complex ASL Numbers',
        description: 'Advanced number concepts in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=_c--P6VRTUo',
        thumbnailUrl: 'https://img.youtube.com/vi/_c--P6VRTUo/hqdefault.jpg'

      }
        ];
        const mockUserQuizzes = [
          { id: 1, title: 'ASL Alphabet Quiz', score: 85 },
          { id: 2, title: 'Basic Phrases Quiz', score: 92 },
        ];

        setUserCourses(mockUserCourses);
        setUserQuizzes(mockUserQuizzes);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="dashboard-container">
      
      <Greeting />

      <div className="dashboard-section">
  <h2 className="section-title">Your Courses</h2>
  {userCourses.length > 0 ? (
    <ul className="course-list">
      {userCourses.map((course) => (
        <li key={course.id} className="course-item">
          <img src={course.thumbnailUrl} alt={course.title} className="course-thumbnail" />
          <div className="course-info">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-duration">Duration: {course.duration}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-courses">No courses found. Start learning today!</p>
  )}
      </div>

      {/* <div className="dashboard-section">
        <h2>Your Quizzes</h2>
        {userQuizzes.length > 0 ? (
          <ul className="quiz-list">
            {userQuizzes.map((quiz) => (
              <li key={quiz.id} className="quiz-item">
                <span>{quiz.title}</span>
                <span>Score: {quiz.score}%</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No quizzes taken yet. Test your knowledge!</p>
        )}
      </div> */}

      {/* <div className="dashboard-section">
        <h2>Available Courses</h2>
        <SignLanguageCourses />
      </div> */}

      <style jsx>{`
        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .dashboard-title {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        .user-greeting {
          font-size: 18px;
          color: #1c53a3;
          margin-bottom: 20px;
        }
          .dashboard-section {
      margin-bottom: 40px;
    }
    .section-title {
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .course-list {
      list-style-type: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .course-item {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .course-item:hover {
      transform: translateY(-5px);
    }
    .course-thumbnail {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    .course-info {
      padding: 15px;
    }
    .course-title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }
    .course-description {
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .course-duration {
      color: #888;
      font-size: 12px;
    }
    .no-courses {
      color: #666;
      font-style: italic;
    }
        
      `}</style>
    </div>
  );
};

export default Dashboard;