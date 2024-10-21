import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import coursesData from './courseData';

const Courses = () => {
  const [progressData, setProgressData] = useState({});

  // Load progress data from local storage
  useEffect(() => {
    const storedProgress = {};
    coursesData.forEach((course) => {
      const progress = JSON.parse(localStorage.getItem(`course-${course.id}-progress`)) || {};
      const completedCount = Object.values(progress).filter(Boolean).length;
      storedProgress[course.id] = completedCount;
    });
    setProgressData(storedProgress);
  }, []);

  return (
    <div className="max-w-4xl p-6">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coursesData.map((course) => {
          const completedLessons = progressData[course.id] || 0;

          return (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                {/* Progress bar and completed lessons */}
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-green-600">{completedLessons}/{course.lessons.length}</p>
                  <div className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${(completedLessons / course.lessons.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <p className="text-gray-500">Lessons: {course.lessons.length}</p>
              <Link
                to={`/courses/${course.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
