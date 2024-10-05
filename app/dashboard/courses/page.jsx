"use client"
import React, { useState } from 'react';

const SignLanguageCourses = () => {
  const [activeTab, setActiveTab] = useState('beginner');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  const courseData = {
    beginner: [
      {
        title: 'ASL Basics',
        description: 'Learn ASL basics with Bill Vicars',
        duration: '1 hour',
        url: 'https://www.youtube.com/watch?v=DBQINq0SsAw',
        thumbnailUrl: 'https://img.youtube.com/vi/DBQINq0SsAw/hqdefault.jpg'
      },
      {
        title: 'ASL Beginner Course',
        description: 'Comprehensive ASL beginner lesson',
        duration: '34 minutes',
        url: 'https://www.youtube.com/watch?v=Y4stD_ypaAI',
        thumbnailUrl: 'https://img.youtube.com/vi/Y4stD_ypaAI/hqdefault.jpg'
      },
      {
        title: 'ASL Numbers & Alphabet',
        description: 'Master numbers and alphabet in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=_c--P6VRTUo',
        thumbnailUrl: 'https://img.youtube.com/vi/_c--P6VRTUo/hqdefault.jpg'
      },
      {
        title: 'Basic ASL Phrases',
        description: 'Learn essential ASL phrases',
        duration: '15 minutes',
        url: 'https://www.youtube.com/watch?v=v1desDduz5M',
        thumbnailUrl: 'https://img.youtube.com/vi/v1desDduz5M/hqdefault.jpg'
      },
      {
        title: 'ASL Common Words',
        description: 'Learn common everyday words in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=0M_33EKcPGE',
        thumbnailUrl: 'https://img.youtube.com/vi/0M_33EKcPGE/hqdefault.jpg'
      }
    ],
    intermediate: [
      {
        title: 'ASL Sentence Structure',
        description: 'Learn how to form complete sentences in ASL',
        duration: '8 minutes',
        url: 'https://www.youtube.com/watch?v=fDV9Al8Fgjk',
        thumbnailUrl: 'https://img.youtube.com/vi/fDV9Al8Fgjk/hqdefault.jpg'

      },
      {
        title: 'Time Signs in ASL',
        description: 'Learn how to express time concepts in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=91foGHKuwL0',
        thumbnailUrl: 'https://img.youtube.com/vi/91foGHKuwL0/hqdefault.jpg'

      },
      {
        title: 'ASL Question Words',
        description: 'Master question words and phrases in ASL',
        duration: '5 minutes',
        url: 'https://www.youtube.com/watch?v=KHM-mgFuisA',
        thumbnailUrl: 'https://img.youtube.com/vi/KHM-mgFuisA/hqdefault.jpg'

      },
      {
        title: 'ASL Conversation Practice',
        description: 'Practice conversational skills in ASL',
        duration: '12 minutes',
        url: 'https://www.youtube.com/watch?v=BopX7gr1BJ8',
        thumbnailUrl: 'https://img.youtube.com/vi/BopX7gr1BJ8/hqdefault.jpg'

      }
    ],
    advanced: [
      {
        title: 'ASL Medical Terms',
        description: 'Learn advanced medical terminology in ASL',
        duration: '7 minutes',
        url: 'https://www.youtube.com/watch?v=gqFjJwiWoIA',
        thumbnailUrl: 'https://img.youtube.com/vi/gqFjJwiWoIA/hqdefault.jpg'

      },
    //   {
    //     title: 'Technical Terms in ASL',
    //     description: 'Master technical and specialized vocabulary',
    //     duration: 'Varied',
    //     url: 'https://youtu.be/qa9qSPsj840?si=F4PKeuYZLGlrB7qj',
    //     thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg'

    //   },
      {
        title: 'ASL Advanced Concepts',
        description: 'Advanced communication techniques in ASL',
        duration: '15 minutes',
        url: 'https://www.youtube.com/watch?v=C84gs5KeaRU',
        thumbnailUrl: 'https://img.youtube.com/vi/C84gs5KeaRU/hqdefault.jpg'

      },
      {
        title: 'Complex ASL Numbers',
        description: 'Advanced number concepts in ASL',
        duration: '10 minutes',
        url: 'https://www.youtube.com/watch?v=_c--P6VRTUo',
        thumbnailUrl: 'https://img.youtube.com/vi/_c--P6VRTUo/hqdefault.jpg'

      }
    ]
  };

  const filterCourses = (courses) => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterLevel === 'all' || filterLevel === activeTab;
      return matchesSearch && matchesFilter;
    });
  };

  const CourseCard = ({ course }) => (
    <div className="course-card">
      <img src={course.thumbnailUrl} alt="YouTube Video Thumbnail" />
      <h2 className="course-title">{course.title}</h2>
      <p className="course-description">{course.description}</p>
      <p className="course-duration">Duration: {course.duration}</p>
      <a href={course.url} className="watch-button" target="_blank" rel="noopener noreferrer">Watch Tutorial</a>
    </div>
  );

  return (
    <div className="container">
      <h1 className='text-2xl'>Sign Language Courses</h1>

      <div className="search-filter-container">
        <input
          type="text"
          id="searchBar"
          className="search-bar"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          id="filterDropdown"
          className="filter-dropdown"
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="tabs">
        {['beginner', 'intermediate', 'advanced'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {['beginner', 'intermediate', 'advanced'].map((tab) => (
        <div key={tab} id={tab} className={`tab-content ${activeTab === tab ? 'active' : ''}`}>
          <div className="course-grid">
            {filterCourses(courseData[tab]).map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          margin: 0;
          padding: 20px;
          background-color: #f5f5f5;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 25px;
        }

        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          gap: 10px;
        }

        .tab-button {
          padding: 12px 24px;
          border: none;
          background-color: #e0e0e0;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
          border-radius: 4px;
          min-width: 120px;
        }

        .tab-button:hover {
          background-color: #d0d0d0;
        }

        .tab-button.active {
          background-color: #1c53a3;
          color: white;
        }

        .tab-content {
          display: none;
        }

        .tab-content.active {
          display: block;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .course-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
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

        .watch-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #1c53a3;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
          text-align: center;
        }

        .watch-button:hover {
          background-color: #1c53a3;
        }

        .search-filter-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          gap: 10px;
        }

        .search-bar, .filter-dropdown {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .search-bar {
          width: 300px;
        }

        .filter-dropdown {
          min-width: 150px;
        }

        .img{
        height: 180;
        width: 300;
        objectFit: 'cover';
        marginBottom: '1rem';
        borderRadius: '4px';
        }

      `}</style>
    </div>
  );
};

export default SignLanguageCourses;