const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: { type: String, required: true },           // Added required validation
    email: { type: String, required: true },          // Added required validation
    phone: { type: String, required: true },          // Added required validation
    education: [{ type: String }],
    experience: [{ type: String }],
    projects: [{ type: String }],
    achievements: [{ type: String }],
    certifications: [{ type: String }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }  // Ensuring user is required
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
