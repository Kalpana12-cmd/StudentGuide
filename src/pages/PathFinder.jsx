import React, { useState } from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const PathFinder = () => {
  const [currentLevel, setCurrentLevel] = useState('');
  const [interests, setInterests] = useState([]);

  const educationLevels = [
    { id: '5th-7th', name: '5th - 7th Standard', icon: BookOpen },
    { id: '8th-10th', name: '8th - 10th Standard', icon: BookOpen },
    { id: 'intermediate', name: 'Intermediate', icon: GraduationCap },
    { id: 'undergraduate', name: 'Undergraduate', icon: GraduationCap },
    { id: 'postgraduate', name: 'Postgraduate', icon: Briefcase },
  ];

  const getInterestsByLevel = (level) => {
    const interestMap = {
      '5th-7th': [
        { id: 'science', name: 'Science & Experiments' },
        { id: 'math', name: 'Mathematics' },
        { id: 'arts', name: 'Arts & Crafts' },
        { id: 'languages', name: 'Languages' },
        { id: 'computers', name: 'Computers' },
        { id: 'sports', name: 'Sports' },
      ],
      '8th-10th': [
        { id: 'physics', name: 'Physics' },
        { id: 'chemistry', name: 'Chemistry' },
        { id: 'biology', name: 'Biology' },
        { id: 'computers', name: 'Computer Science' },
        { id: 'commerce', name: 'Commerce' },
        { id: 'humanities', name: 'Humanities' },
      ],
      'intermediate': [
        { id: 'mpc', name: 'MPC (Math, Physics, Chemistry)' },
        { id: 'bipc', name: 'BiPC (Biology, Physics, Chemistry)' },
        { id: 'cec', name: 'CEC (Commerce, Economics)' },
        { id: 'humanities', name: 'Humanities & Social Sciences' },
      ],
      'undergraduate': [
        { id: 'engineering', name: 'Engineering' },
        { id: 'medical', name: 'Medical Sciences' },
        { id: 'commerce', name: 'Commerce & Business' },
        { id: 'arts', name: 'Arts & Humanities' },
        { id: 'law', name: 'Law' },
        { id: 'design', name: 'Design' },
      ],
      'postgraduate': [
        { id: 'mtech', name: 'M.Tech' },
        { id: 'mba', name: 'MBA' },
        { id: 'msc', name: 'M.Sc' },
        { id: 'ma', name: 'MA' },
        { id: 'phd', name: 'PhD' },
      ],
    };

    return interestMap[level] || [];
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Educational Path</h1>
        <p className="text-gray-600">Discover the perfect educational journey based on your current level and interests</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-scale-in">
        <h2 className="text-xl font-semibold mb-4">Select Your Current Education Level</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {educationLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <button
                key={level.id}
                onClick={() => setCurrentLevel(level.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover-scale animate-fade-in ${
                  currentLevel === level.id
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="h-8 w-8 mb-2 mx-auto text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
                <span className="block text-center">{level.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {currentLevel && (
        <div className="bg-white rounded-lg shadow-md p-6 animate-scale-in">
          <h2 className="text-xl font-semibold mb-4">Select Your Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {getInterestsByLevel(currentLevel).map((interest, index) => (
              <button
                key={interest.id}
                onClick={() => {
                  setInterests((prev) =>
                    prev.includes(interest.id)
                      ? prev.filter((i) => i !== interest.id)
                      : [...prev, interest.id]
                  );
                }}
                className={`p-3 rounded-lg border-2 transition-all duration-300 hover-scale animate-fade-in ${
                  interests.includes(interest.id)
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {interest.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PathFinder;