import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
  return Database.assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, updates) {
  const assignment = Database.assignments.find((a) => a._id === assignmentId);
  Object.assign(assignment, updates);
  return assignment;
}
