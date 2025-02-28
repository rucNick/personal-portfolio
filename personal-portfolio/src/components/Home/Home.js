// src/components/Home/Home.jsx
import React from 'react';
import Review from '../Review/Review';
import Skill from '../Skill/Skills';
// ... other imports

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-8">
      {/* Your hero and about sections */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-green-400 mb-4 animate-fadeIn">
          Hello, I'm YourName
        </h1>
        <p className="text-lg text-green-300 mb-6 animate-fadeIn delay-100">
          I’m a software engineer passionate about creating intuitive digital experiences.
        </p>
      </section>
      
      {/* Add Reviews Section */}
      <Review />

      {/* Add Skills Section */}
      <Skill />
    </div>
  );
};

export default Home;
