import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PathFinder from './pages/PathFinder';
import ExamCalendar from './pages/ExamCalendar';
import CareerGuide from './pages/CareerGuide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pathfinder" element={<PathFinder />} />
            <Route path="/exam-calendar" element={<ExamCalendar />} />
            <Route path="/career-guide" element={<CareerGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App