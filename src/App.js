// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIN";
import SignUp from "./components/SignUp";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import SearchedResults from "./components/SearchedResults";
import HomePage from "./components/HomePage";

const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/:id" element={<CourseDetails/>} /> 
          <Route path="/search" element={<SearchedResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
