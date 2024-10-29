import React from 'react';
import { BookOpen } from 'lucide-react';

function StudyGuide() {
  const recentGuides = [
    { id: 1, title: "Introduction to Biology" },
    { id: 2, title: "World War II: Causes and Effects" },
    { id: 3, title: "Basics of Algebra" },
  ];

  const handleGuideClick = (id) => {
    // Navigate to the study guide page based on `id`
    console.log("Navigating to guide:", id);
    // You might use something like React Router here, e.g., `navigate(`/guide/${id}`)`
  };

  return (
    <section className="study-guide-display p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Study Guides</h2>
      <div className="space-y-2">
        {recentGuides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => handleGuideClick(guide.id)}
            // className="flex items-center w-full p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            className='btn'
          >
            <BookOpen className='book-open' />
            <span className="recent-title">{guide.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default StudyGuide;
