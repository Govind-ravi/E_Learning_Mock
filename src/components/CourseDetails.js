import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import coursesData from './courseData';

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === parseInt(id));
  const [completedLessons, setCompletedLessons] = useState({});

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem(`course-${id}-progress`)) || {};
    setCompletedLessons(storedProgress);
  }, [id]);

  const handleLessonToggle = (lessonId) => {
    const updatedProgress = {
      ...completedLessons,
      [lessonId]: !completedLessons[lessonId],
    };
    setCompletedLessons(updatedProgress);
    localStorage.setItem(`course-${id}-progress`, JSON.stringify(updatedProgress));
  };

  const completedCount = Object.values(completedLessons).filter((completed) => completed).length;

  if (!course) {
    return <div className="p-6 text-red-600">Course not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>

      <div className="w-1/2 bg-gray-300 rounded-full h-3">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{
            width: `${(completedCount / course.lessons.length) * 100}%`,
          }}
        ></div>
      </div>

      <p className="text-gray-600 mb-4">
        {completedCount} out of {course.lessons.length} lessons completed.
      </p>

      <p className="text-gray-700 mb-4">{course.description}</p>

      <h3 className="text-xl font-semibold mb-2">Lessons</h3>
      <ul className="mb-6">
        {course.lessons.map((lesson) => (
          <li key={lesson.id} className="mb-2 flex items-center">
            <input
              type="checkbox"
              id={`lesson-${lesson.id}`}
              className="mr-2"
              checked={completedLessons[lesson.id] || false}
              onChange={() => handleLessonToggle(lesson.id)}
            />
            <label htmlFor={`lesson-${lesson.id}`} className="text-gray-700">
              {lesson.name}
            </label>
          </li>
        ))}
      </ul>

      <Link to="/courses" className="text-blue-500 hover:underline mt-4 block">
        Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetails;
