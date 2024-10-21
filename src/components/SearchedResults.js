import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import coursesData from './courseData';

const SearchedResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredCourses.length === 0) {
    return <p className="p-6 text-red-600">No courses found for "{query}"</p>;
  }

  return (
    <div className="max-w-4xl p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-gray-500">Lessons: {course.lessons.length}</p>
            <Link
              to={`/courses/${course.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchedResults;
