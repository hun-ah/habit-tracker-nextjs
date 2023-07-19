import mongoose from 'mongoose';

const { Schema } = mongoose;

const habitSchema = new Schema(
  {
    username: {
      type: String,
    },
    habitName: {
      type: String,
      required: true,
    },
    streak: {
      type: Number,
    },
    lastCompleted: {
      type: Date,
    },
    lastCompletedMs: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Habit || mongoose.model('Habit', habitSchema);
