import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: Date,
    points: Number,
    course: String,
    availableFrom: Date,
    availableUntil: Date,
  },
  { collection: "assignments" }
);

export default assignmentSchema;