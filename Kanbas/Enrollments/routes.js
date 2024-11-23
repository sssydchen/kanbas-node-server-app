import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const newEnrollment = dao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollment);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(204);
  });

  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.getEnrollmentsForUser(userId);
    res.json(enrollments);
  });
}
