import React from 'react';
//import Sidebar from './components/ui/Sidebar';
import Sidebar from './components/ui/Sidebar';
import StudyGuideForm from './components/ui/StudyGuideForm';
//import StudyGuideForm from './components/StudyGuideForm';
//import StudyGuide from './components/StudyGuide';
import StudyGuide from './components/ui/StudyGuide';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <h1>Welcome back, Student!</h1>
        <StudyGuideForm />
        <StudyGuide />
      </main>
    </div>
  );
}

export default App;
