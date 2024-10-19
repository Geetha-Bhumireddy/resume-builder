const Resume = require('../models/resumeModel');

// Create a new resume
exports.createResume = async (req, res) => {
    const resume = new Resume({ ...req.body, user: req.user.id }); // Attach user ID
    try {
        const savedResume = await resume.save();
        res.status(201).json(savedResume); // Respond with the saved resume data
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle error
    }
};

// Get a specific resume by ID
exports.getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id); // Find resume by ID
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.status(200).json(resume); // Respond with the found resume
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
};

// Get all resumes for the authenticated user
exports.getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ user: req.user.id }); // Find resumes for the user
        res.status(200).json(resumes); // Respond with all resumes
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
};

// Update a resume by ID
exports.updateResume = async (req, res) => {
    try {
        const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation rules are applied
        });

        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json(updatedResume); // Respond with the updated resume
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle error
    }
};

// Delete a resume by ID
exports.deleteResume = async (req, res) => {
    try {
        const deletedResume = await Resume.findByIdAndDelete(req.params.id);

        if (!deletedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json({ message: 'Resume deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
};
