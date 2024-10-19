import React from 'react';
import { FaEnvelope, FaPhone, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaAward, FaCertificate } from 'react-icons/fa';
import jsPDF from 'jspdf';

const ResumePreview = ({ resumeData }) => {

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${resumeData.name}`, 10, 10);
    doc.text(`Email: ${resumeData.email}`, 10, 20);
    doc.text(`Phone: ${resumeData.phone}`, 10, 30);
    doc.text(`Experience: ${resumeData.experience}`, 10, 40);
    doc.text(`Education: ${resumeData.education}`, 10, 50);
    doc.text(`Projects: ${resumeData.projects}`, 10, 60);
    doc.text(`Achievements: ${resumeData.achievements}`, 10, 70);
    doc.text(`Certifications: ${resumeData.certifications}`, 10, 80);
    doc.text(`Skills: ${resumeData.skills}`, 10, 90); // Added skills to PDF
    doc.save('resume.pdf');
  };

  return (
    <div className="p-6 border rounded shadow-lg max-w-3xl mx-auto h-278">
      <h1 className="text-3xl font-bold text-center mb-4">{resumeData.name}</h1>

      {/* Responsive container for email and phone */}
      <div className="flex flex-col sm:flex-row justify-center mb-4">
        <div className="flex items-center mb-2 sm:mb-0 sm:mr-4"> {/* Adjust margins for mobile */}
          <FaEnvelope className="mr-1" /> 
          <span>{resumeData.email}</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-1" /> 
          <span>{resumeData.phone}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2 underline"><FaBriefcase className="inline mr-1" /> Experience</h2>
        <p>{resumeData.experience}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2 underline"><FaGraduationCap className="inline mr-1" /> Education</h2>
        <p>{resumeData.education}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2 underline"><FaProjectDiagram className="inline mr-1" /> Projects</h2>
        <p>{resumeData.projects}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2 underline"><FaAward className="inline mr-1" /> Achievements</h2>
        <p>{resumeData.achievements}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2 underline"><FaCertificate className="inline mr-1" /> Certifications</h2>
        <p>{resumeData.certifications}</p>
      </div>

      {/* Added Skills Section */}
      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2 underline"><FaTools className="inline mr-1" /> Skills</h2> {/* Added skills icon */}
        <p>{resumeData.skills}</p> {/* Display skills */}
      </div>

      <div className="flex justify-center mt-6">
        <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded">Download</button>
      </div>
    </div>
  );
};

export default ResumePreview;
