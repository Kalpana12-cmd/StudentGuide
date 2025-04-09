import React, { useState } from 'react';
import { Calendar as CalendarIcon, Filter, Search } from 'lucide-react';

const ExamCalendar = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const examTypes = [
    { id: 'all', name: 'All Exams' },
    { id: 'entrance', name: 'Entrance Exams' },
    { id: 'government', name: 'Government Exams' },
    { id: 'scholarship', name: 'Scholarships' },
  ];

  const mockExams = [
    {
      id: 1,
      name: 'JEE Main 2024',
      type: 'entrance',
      description: 'Joint Entrance Examination for Engineering',
      date: 'April 1, 2024',
      registrationStart: 'Jan 1, 2024',
      registrationEnd: 'Feb 1, 2024',
    },
    {
      id: 2,
      name: 'NEET 2024',
      type: 'entrance',
      description: 'National Eligibility cum Entrance Test for Medical',
      date: 'May 5, 2024',
      registrationStart: 'Feb 1, 2024',
      registrationEnd: 'March 1, 2024',
    },
    {
      id: 3,
      name: 'UPSC CSE 2024',
      type: 'government',
      description: 'Civil Services Examination',
      date: 'June 15, 2024',
      registrationStart: 'March 1, 2024',
      registrationEnd: 'April 1, 2024',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Exam Calendar</h1>
        <p className="text-gray-600">Stay updated with important exam dates and deadlines</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-scale-in">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search exams..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Filter className="h-5 w-5 mt-3 text-gray-400" />
            <select
              className="border rounded-lg px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {examTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {mockExams.map((exam, index) => (
            <div
              key={exam.id}
              className="border rounded-lg p-4 hover:border-indigo-300 transition-all duration-300 hover-scale animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{exam.name}</h3>
                  <p className="text-gray-600 text-sm">{exam.description}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {exam.type}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>Exam Date: {exam.date}</span>
                </div>
                <div>
                  Registration: {exam.registrationStart} - {exam.registrationEnd}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamCalendar;