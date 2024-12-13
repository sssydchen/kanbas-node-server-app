import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    startDate: Date,
    dueDate: Date,
    points: Number,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
    availableFrom: Date,
    availableUntil: Date,
  },
  { collection: "assignments" }
);

export default assignmentSchema;