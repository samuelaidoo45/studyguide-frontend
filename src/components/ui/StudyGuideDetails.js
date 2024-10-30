import React from 'react';
import { useParams } from 'react-router-dom';

function StudyGuideDetails() {
  const { id } = useParams();
  
  // Fetch study guide details based on `id`
  // In a real app, you might retrieve this data from a backend or use context/state management
  const studyGuides = {
    1: { title: "Introduction to Biology", content: "Biology is the study of living organisms..." },
    2: { title: "World War II: Causes and Effects", content: "World War II began in 1939..." },
    3: { title: "Basics of Algebra", content: "Algebra is a branch of mathematics dealing with symbols..." },
  };
  
  const guide = studyGuides[id];

  if (!guide) {
    return <p>Study guide not found.</p>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-xl font-semibold mb-4">{guide.title}</h1>
      <p>{guide.content}</p>
    </div>
  );
}

export default StudyGuideDetails;
