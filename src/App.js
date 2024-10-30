import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/ui/Sidebar';
import StudyGuideForm from './components/ui/StudyGuideForm';
import StudyGuide from './components/ui/StudyGuide';
//import Favorites from './components/ui/CreateStudyGuide';
import CreateStudyGuide from './components/ui/CreateStudyGuide';
import MyStudyGuides from './components/ui/MyStudyGuides'; 
import Settings from './components/ui/Settings'; 
import GenerateStudyGuide from './components/ui/GenerateStudyGuide';
import StudyGuideDetails from './components/ui/StudyGuideDetails';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<><h1>Welcome back, Student!</h1><GenerateStudyGuide /><StudyGuide /></>} />
            <Route path="/create-study-guide" element={< CreateStudyGuide/>} />
            <Route path="/my-study-guides" element={<MyStudyGuides />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/guide/:id" element={<StudyGuideDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
