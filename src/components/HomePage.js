// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import coursesData from './courseData';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to E-Learning</h1>
          <p className="text-lg mb-8">Learn new skills, advance your career, and explore a world of knowledge.</p>
          <Link to="/courses" className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-gray-600 mb-8">Discover popular courses that help you enhance your skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
          {/* Fetching courses from the coursesData */}
          {coursesData.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link to={`/courses/${course.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
              <p className="mb-4">"This platform has transformed my learning experience. Highly recommend!"</p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
              <p className="mb-4">"The courses are well structured and easy to follow. I learned a lot!"</p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
        <p className="mb-6">Sign up today to start your journey towards mastering new skills.</p>
        <Link to="/signup" className="bg-blue-800 px-6 py-3 rounded hover:bg-blue-700 transition">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
