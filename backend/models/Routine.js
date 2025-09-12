import mongoose from 'mongoose';

const routineSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  habits: [{
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Habit',
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
  }],
  estimatedDuration: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  schedule: {
    type: String,
    enum: ['morning', 'afternoon', 'evening', 'custom'],
    default: 'custom',
  },
}, { timestamps: true });

export default mongoose.model('Routine', routineSchema);