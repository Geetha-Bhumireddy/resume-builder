const express = require('express');
const {
    createResume,
    getResumeById,
    updateResume,
    deleteResume,
    getUserResumes
} = require('../controllers/resumeController');
const { protect } = require('../controllers/authController'); // Ensure this is correctly implemented

const router = express.Router();

// Protect routes with authentication
router.post('/', protect, createResume);  
router.get('/', protect, getUserResumes);  // Only logged-in user can view their resumes
router.get('/:id', protect, getResumeById); // Get resume by ID
router.put('/:id', protect, updateResume); // Update resume by ID
router.delete('/:id', protect, deleteResume); // Delete resume by ID

module.exports = router;
