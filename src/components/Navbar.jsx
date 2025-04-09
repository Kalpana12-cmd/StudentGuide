import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, Compass, BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">StudentGuide</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
              <BookOpen className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/pathfinder" className="flex items-center space-x-1 hover:text-indigo-200">
              <Compass className="h-5 w-5" />
              <span>PathFinder</span>
            </Link>
            <Link to="/exam-calendar" className="flex items-center space-x-1 hover:text-indigo-200">
              <Calendar className="h-5 w-5" />
              <span>Exam Calendar</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;