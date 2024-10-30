import React from 'react';
import { PlusCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function GenerateStudyGuide() {
  return (
    <section className="study-guide-form">
      <h2>Create New Study Guide</h2>
      <div className='input-container'>
        <NavLink to="/create-study-guide" className="generate-btn">
        <button className="generate-btn-main">
            <PlusCircle /> Generate Guide
        </button>
        </NavLink>
      </div>
      
    </section>
  );
}

export default GenerateStudyGuide;
