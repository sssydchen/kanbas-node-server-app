import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    dueDate: Date,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" }, // One-to-Many relationship
  },
  { collection: "assignments" }
);

export default schema;
