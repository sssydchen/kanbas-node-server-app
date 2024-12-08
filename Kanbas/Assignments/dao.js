import model from "./model.js";

export async function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export async function createAssignment(assignment) {
  delete assignment._id; 
  return model.create(assignment);
}

export async function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export async function updateAssignment(assignmentId, updates) {
  return model.updateOne({ _id: assignmentId }, updates);
}

