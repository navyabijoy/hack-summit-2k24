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
        <h2>Your Courses</h2>
        {userCourses.length > 0 ? (
          <ul className="course-list">
            {userCourses.map((course) => (
              <li key={course.id} className="course-item">
                      
                      
                 <img src={course.thumbnailUrl} alt="YouTube Video Thumbnail" />

                <h3 className='course-title'>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <p className="course-duration">Duration: {course.duration}</p>
              </li>
            ))}
          </ul>
          
        ) : (
          <p>No courses found. Start learning today!</p>
        )}
      </div>

      <div className="dashboard-section">
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
      </div>

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
          margin-bottom: 30px;
        }
        .dashboard-section h2 {
          font-size: 20px;
          color: #333;
          margin-bottom: 15px;
        }
        .course-list, .quiz-list {
          list-style-type: none;
          padding: 0;
        }
          .course-title {
          font-size: 20px;
          margin-bottom: 10px;
          color: #333;
        }

        .course-description {
          color: #666;
          margin-bottom: 15px;
          flex-grow: 1;
        }

        .course-duration {
          color: #888;
          font-size: 14px;
          margin-bottom: 15px;
        }
        .course-item, .quiz-item {
          background-color: #f5f5f5;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .progress-bar {
          width: 100px;
          height: 10px;
          background-color: #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          background-color: #1c53a3;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;