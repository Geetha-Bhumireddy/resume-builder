import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeForm = ({ setResumeData }) => {
  // Load draft data from localStorage if it exists
  const savedDraft = JSON.parse(localStorage.getItem('resumeDraft'));

  // Initialize form state with draft or empty values
  const [formData, setFormData] = useState({
    name: savedDraft?.name || '',
    email: savedDraft?.email || '',
    phone: savedDraft?.phone || '',
    experience: savedDraft?.experience || '',
    education: savedDraft?.education || '',
    projects: savedDraft?.projects || '',
    achievements: savedDraft?.achievements || '',
    certifications: savedDraft?.certifications || '',
    skills: savedDraft?.skills || '' // Added skills
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveDraft = () => {
    localStorage.setItem('resumeDraft', JSON.stringify(formData));
    alert('Resume saved as draft!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/resumes', formData);
      alert('Resume saved successfully!');
      setResumeData(response.data);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        education: '',
        projects: '',
        achievements: '',
        certifications: '',
        skills: '' // Reset skills
      });
    } catch (error) {
      alert('Error saving resume: ' + error.message);
    }
  };

  const handlePreview = () => {
    setResumeData(formData);
    alert('Preview your resume!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <label className="font-bold mb-1 block">Name</label>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full" 
        required 
      />

      <label className="font-bold mb-1 block">Email</label>
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full" 
        required 
      />

      <label className="font-bold mb-1 block">Phone</label>
      <input 
        type="tel" 
        name="phone" 
        placeholder="Phone" 
        value={formData.phone} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full" 
        required 
      />

      <label className="font-bold mb-1 block underline">Experience</label>
      <textarea 
        name="experience" 
        placeholder="Experience" 
        value={formData.experience} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full h-32" // Increased height
        required 
      />

      <label className="font-bold mb-1 block">Education</label>
      <textarea 
        name="education" 
        placeholder="Education" 
        value={formData.education} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full" 
        required 
      />

      <label className="font-bold mb-1 block">Projects</label>
      <textarea 
        name="projects" 
        placeholder="Projects" 
        value={formData.projects} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full h-32" // Increased height
      />

      <label className="font-bold mb-1 block">Achievements</label>
      <textarea 
        name="achievements" 
        placeholder="Achievements" 
        value={formData.achievements} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full h-32" // Increased height
      />

      <label className="font-bold mb-1 block">Certifications</label>
      <textarea 
        name="certifications" 
        placeholder="Certifications" 
        value={formData.certifications} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full" 
      />

      <label className="font-bold mb-1 block">Skills</label>
      <textarea 
        name="skills" 
        placeholder="Skills" 
        value={formData.skills} 
        onChange={handleChange} 
        className="border p-2 mb-4 w-full h-32" // Increased height
      />

      <button 
        type="button" 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={handlePreview}>
        Preview Resume
      </button>
      <button 
        type="submit" 
        className="bg-green-500 text-white px-4 py-2 rounded ml-4">
        Save Resume
      </button>
      <button 
        type="button" 
        className="bg-yellow-500 text-white px-4 py-2 rounded ml-4" 
        onClick={handleSaveDraft}>
        Save as Draft
      </button>
    </form>
  );
};

export default ResumeForm;
