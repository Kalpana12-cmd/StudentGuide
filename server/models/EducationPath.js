import mongoose from 'mongoose';

const educationPathSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
    enum: ['5th-7th', '8th-10th', 'intermediate', 'undergraduate', 'postgraduate']
  },
  stream: {
    type: String,
    required: true
  },
  courses: [{
    name: String,
    description: String,
    duration: String,
    skills: [String],
    careerOptions: [String]
  }],
  jobOpportunities: [{
    title: String,
    description: String,
    requiredSkills: [String],
    averageSalary: String,
    trending: Boolean
  }],
  recommendedResources: [{
    title: String,
    type: String,
    url: String
  }]
});

export const EducationPath = mongoose.model('EducationPath', educationPathSchema);