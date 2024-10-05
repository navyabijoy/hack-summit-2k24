'use client';

import React, { useState } from 'react';

const courseData = {
  beginner: [
    {
      title: 'ASL Basics',
      description: 'Learn ASL basics with Bill Vicars',
      duration: '1 hour',
      url: 'https://www.youtube.com/watch?v=DBQINq0SsAw'
    },
    {
        title: 'ASL Beginner Course',
        description: 'Comprehensive ASL beginner lesson',
        duration: '34 minutes',
        url: 'https://www.youtube.com/watch?v=Y4stD_ypaAI'
    },
    {
        title: 'ASL Numbers & Alphabet',
        description: 'Master numbers and alphabet in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=_c--P6VRTUo'
    },
    {
        title: 'Basic ASL Phrases',
        description: 'Learn essential ASL phrases',
        duration: '15 minutes',
        url: 'https://www.youtube.com/watch?v=v1desDduz5M'
    },
    {
        title: 'ASL Common Words',
        description: 'Learn common everyday words in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=0M_33EKcPGE'
    }
],
intermediate: [
    {
        title: 'ASL Sentence Structure',
        description: 'Learn how to form complete sentences in ASL',
        duration: '8 minutes',
        url: 'https://www.youtube.com/watch?v=fDV9Al8Fgjk'
    },
    {
        title: 'Time Signs in ASL',
        description: 'Learn how to express time concepts in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=91foGHKuwL0'
    },
    {
        title: 'ASL Question Words',
        description: 'Master question words and phrases in ASL',
        duration: '5 minutes',
        url: 'https://www.youtube.com/watch?v=KHM-mgFuisA'
    },
    {
        title: 'ASL Conversation Practice',
        description: 'Practice conversational skills in ASL',
        duration: '12 minutes',
        url: 'https://www.youtube.com/watch?v=BopX7gr1BJ8'
    }
],
advanced: [
    {
        title: 'ASL Medical Terms',
        description: 'Learn advanced medical terminology in ASL',
        duration: '7 minutes',
        url: 'https://www.youtube.com/watch?v=gqFjJwiWoIA'
    },
    {
        title: 'Technical Terms in ASL',
        description: 'Master technical and specialized vocabulary',
        duration: 'Varied',
        url: 'https://www.youtube.com/results?search_query=technical+terms+sign+language'
    },
    {
        title: 'ASL Advanced Concepts',
        description: 'Advanced communication techniques in ASL',
        duration: '15 minutes',
        url: 'https://www.youtube.com/watch?v=C84gs5KeaRU'
    },
    {
        title: 'Complex ASL Numbers',
        description: 'Advanced number concepts in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=_c--P6VRTUo'
    }
  ]
};

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('beginner');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Language Courses</h1>
      
      <div className="flex justify-center mb-8 gap-4">
        {['beginner', 'intermediate', 'advanced'].map((tabName) => (
          <button
            key={tabName}
            className={`tab-button ${activeTab === tabName ? 'active' : ''}`}
            onClick={() => openTab(tabName)}
          >
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
          </button>
        ))}
      </div>

      {Object.keys(courseData).map((level) => (
        <div
          key={level}
          className={`tab-content ${activeTab === level ? 'active' : 'hidden'}`}
        >
          <div className="course-grid">
            {courseData[level].map((course, index) => (
              <div key={index} className="course-card">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                <p className="course-duration">Duration: {course.duration}</p>
                <a href={course.url} className="watch-button" target="_blank" rel="noopener noreferrer">
                  Watch Tutorial
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}