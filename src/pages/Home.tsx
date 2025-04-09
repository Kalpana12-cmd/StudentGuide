import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Educational Journey Starts Here
        </h1>
        <p className="text-xl text-gray-600">
          Get personalized guidance for your academic and career path
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 hover-scale animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
            alt="Students studying"
            className="rounded-lg mb-4 w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl font-semibold mb-2">Find Your Path</h2>
          <p className="text-gray-600 mb-4">
            Discover the perfect educational path based on your interests and goals.
          </p>
          <Link
            to="/pathfinder"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-all duration-300 hover:translate-x-2"
          >
            Explore paths <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover-scale animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
            alt="Career guidance"
            className="rounded-lg mb-4 w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
          <p className="text-gray-600 mb-4">
            Keep track of important exam dates and educational opportunities.
          </p>
          <Link
            to="/exam-calendar"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-all duration-300 hover:translate-x-2"
          >
            View calendar <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home