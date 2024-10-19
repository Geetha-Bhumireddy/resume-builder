const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    experience: { type: String, required: true },
    education: { type: String, required: true },
    projects: { type: String },
    achievements: { type: String },
    certifications: { type: String },
    skills: { type: String }
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
