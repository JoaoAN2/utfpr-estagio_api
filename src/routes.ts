import { Router } from "express";
import { CourseController } from "./controllers/CourseController";
import { StudentController } from "./controllers/StudentController";
import { UserController } from "./controllers/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

const userController = new UserController();
const studentController = new StudentController();
const courseController = new CourseController();

// User
routes.post("/register", userController.create);
routes.post("/login", userController.read);
routes.get("/profile", ensureAuthenticated, userController.profile);
routes.put("/user", ensureAuthenticated, userController.update);
routes.delete("/user", ensureAuthenticated, userController.delete);

// Aluno
routes.post("/student", ensureAuthenticated, studentController.create);
routes.get("/student", studentController.read);

// Curso
routes.post("/course", courseController.create);
routes.get("/course", courseController.read);
routes.get("/courses", courseController.listCourse);
routes.put("/course", courseController.update);
routes.delete("/course", courseController.delete)

export default routes;