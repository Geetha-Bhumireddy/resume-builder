import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const DraftList = ({ setResumeData }) => {
  const [drafts, setDrafts] = useState([]);
  const history = useHistory(); // Initialize the useHistory hook

  const loadDrafts = () => {
    const savedDrafts = localStorage.getItem('resumeDraft'); // Change variable name for clarity
    if (savedDrafts) {
      setDrafts([JSON.parse(savedDrafts)]); // If you're saving only one draft, this works fine
    } else {
      alert('No drafts found!');
    }
  };

  const handleLoadDraft = (draft) => {
    setResumeData(draft); // Load draft into the form for editing
    history.push('/'); // Use the history object to navigate back
  };

  return (
    <div className="p-6">
      <button onClick={loadDrafts} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Load Drafts
      </button>
      {drafts.length > 0 && (
        <div>
          {drafts.map((draft, index) => (
            <div key={index} className="border p-4 mb-4">
              <h2 className="text-lg font-bold">{draft.name}'s Resume</h2>
              <button onClick={() => handleLoadDraft(draft)} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                Edit Draft
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DraftList;
