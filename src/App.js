import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/ui/Sidebar';
import StudyGuideForm from './components/ui/StudyGuideForm';
import StudyGuide from './components/ui/StudyGuide';
import Favorites from './components/ui/Favorite';
import MyStudyGuides from './components/ui/MyStudyGuides'; // Create this component
import Settings from './components/ui/Settings'; // Create this component
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<><h1>Welcome back, Student!</h1><StudyGuideForm /><StudyGuide /></>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/my-study-guides" element={<MyStudyGuides />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
