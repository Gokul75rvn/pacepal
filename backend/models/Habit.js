import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    default: 'daily',
  },
  category: {
    type: String,
    enum: ['health', 'productivity', 'learning', 'mindfulness', 'other'],
    default: 'other',
  },
  goal: {
    type: Number,
    default: 1,
  },
  completedDates: [{
    date: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
      default: '',
    },
  }],
  streak: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

// Create indexes
habitSchema.index({ userId: 1, name: 1 }, { unique: true });

const Habit = mongoose.model('Habit', habitSchema);

export default Habit;