// src/components/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md bg-gray-200 p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="w-full px-3 py-2 border rounded-md" 
              id="email" 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              className="w-full px-3 py-2 border rounded-md" 
              id="password" 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input 
              className="w-full px-3 py-2 border rounded-md" 
              id="confirm-password" 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/signin" className="text-blue-500">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
