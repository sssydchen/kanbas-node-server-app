import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Retrieve assignments for a course
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  // Create an assignment
  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const newAssignment = { ...req.body, course: courseId };
    const assignment = await dao.createAssignment(newAssignment);
    res.json(assignment);
  });

  // Delete an assignment
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    await dao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });

  // Update an assignment
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const updates = req.body;
    const updatedAssignment = await dao.updateAssignment(assignmentId, updates);
    res.json(updatedAssignment);
  });
}
