import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
  app.get("/api/modules", async (req, res) => {
    try {
      const modules = await modulesDao.findAllModules();
      res.json(modules);
    } catch (error) {
      console.error("Error fetching modules:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    try {
      const modules = await modulesDao.findModulesForCourse(courseId);
      res.json(modules);
    } catch (error) {
      console.error("Error fetching modules for course:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const newModule = { ...req.body, course: courseId };
    try {
      const module = await modulesDao.createModule(newModule);
      res.json(module);
    } catch (error) {
      console.error("Error creating module:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  // app.put("/api/modules/:moduleId", async (req, res) => {
  //   const { moduleId } = req.params;
  //   const moduleUpdates = req.body;
  //   const status = await modulesDao.updateModule(moduleId, moduleUpdates);
  //   res.send(status);
  // });
  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = { ...req.body };
    if (moduleUpdates._id) delete moduleUpdates._id; 
    try {
      const status = await modulesDao.updateModule(moduleId, moduleUpdates);
      res.json(status);
    } catch (error) {
      console.error("Error updating module:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
 app.delete("/api/modules/:moduleId", async (req, res) => {
   const { moduleId } = req.params;
   const status = await modulesDao.deleteModule(moduleId);
   res.send(status);
 });
}
