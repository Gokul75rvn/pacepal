const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'daily' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    streak: { type: Number, default: 0 },
    lastCompletedAt: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Habit', habitSchema);