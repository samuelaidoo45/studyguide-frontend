import React from 'react';
import { PlusCircle } from 'lucide-react';

function StudyGuideForm() {
  return (
    <section className="study-guide-form">
      <h2>Create New Study Guide</h2>
      <div className='input-container'>
        <input type="text" placeholder="Enter your topic or subject..." />
        <button className="generate-btn">
            <PlusCircle /> Generate Guide
        </button>
      </div>
      
    </section>
  );
}

export default StudyGuideForm;
