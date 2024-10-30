import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

function StudyGuide() {
  const recentGuides = [
    { id: 1, title: "Introduction to Biology" },
    { id: 2, title: "World War II: Causes and Effects" },
    { id: 3, title: "Basics of Algebra" },
  ];

  return (
    <section className="study-guide-display p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Study Guides</h2>
      <div className="space-y-2">
        {recentGuides.map((guide) => (
          <Link
            key={guide.id}
            to={`/guide/${guide.id}`}
            className="btn"
          >
            <BookOpen className="book-open" />
            <span className="recent-title">{guide.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default StudyGuide;
