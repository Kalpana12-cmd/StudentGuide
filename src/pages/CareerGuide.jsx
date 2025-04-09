import React from 'react';
import { Briefcase, TrendingUp, GraduationCap, BookOpen } from 'lucide-react';

const CareerGuide = () => {
  const trendingCareers = [
    {
      id: 1,
      title: 'Data Scientist',
      description: 'Analyze complex data sets to help organizations make better decisions',
      trending: true,
      averageSalary: '₹8,00,000 - ₹20,00,000 per year',
      requiredEducation: 'B.Tech/M.Tech in Computer Science or related field',
      keySkills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      description: 'Build and maintain web applications from front-end to back-end',
      trending: true,
      averageSalary: '₹6,00,000 - ₹18,00,000 per year',
      requiredEducation: 'B.Tech in Computer Science or related field',
      keySkills: ['JavaScript', 'React', 'Node.js', 'Database Management'],
    },
    {
      id: 3,
      title: 'AI/ML Engineer',
      description: 'Develop artificial intelligence and machine learning solutions',
      trending: true,
      averageSalary: '₹10,00,000 - ₹25,00,000 per year',
      requiredEducation: 'M.Tech in Computer Science/AI',
      keySkills: ['Python', 'Deep Learning', 'TensorFlow', 'Computer Vision'],
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      description: 'Design and implement cloud infrastructure solutions',
      trending: true,
      averageSalary: '₹15,00,000 - ₹30,00,000 per year',
      requiredEducation: 'B.Tech/M.Tech with cloud certifications',
      keySkills: ['AWS', 'Azure', 'Cloud Architecture', 'DevOps'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Guide</h1>
        <p className="text-gray-600">Explore career paths and make informed decisions about your future</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {trendingCareers.map((career, index) => (
          <div 
            key={career.id} 
            className="bg-white rounded-lg shadow-md p-6 hover-scale animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-xl font-semibold">{career.title}</h2>
              {career.trending && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-scale-in">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Trending
                </span>
              )}
            </div>
            <p className="text-gray-600 mb-4">{career.description}</p>
            <div className="space-y-3">
              <div className="flex items-center transition-all duration-300 hover:translate-x-2">
                <Briefcase className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm">Average Salary: {career.averageSalary}</span>
              </div>
              <div className="flex items-center transition-all duration-300 hover:translate-x-2">
                <GraduationCap className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm">Required Education: {career.requiredEducation}</span>
              </div>
              <div className="flex items-center transition-all duration-300 hover:translate-x-2">
                <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm">Key Skills: {career.keySkills.join(', ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerGuide;