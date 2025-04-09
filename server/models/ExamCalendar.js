import mongoose from 'mongoose';

const examCalendarSchema = new mongoose.Schema({
  examName: {
    type: String,
    required: true
  },
  examType: {
    type: String,
    required: true,
    enum: ['entrance', 'government', 'scholarship']
  },
  date: {
    type: Date,
    required: true
  },
  registrationStartDate: Date,
  registrationEndDate: Date,
  eligibility: String,
  description: String,
  officialWebsite: String
});

export const ExamCalendar = mongoose.model('ExamCalendar', examCalendarSchema);