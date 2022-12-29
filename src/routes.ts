import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

// User
routes.post("/register", new UserController().create);
routes.post("/login", new UserController().read);
routes.get("/profile", ensureAuthenticated, new UserController().profile);
routes.put("/user", ensureAuthenticated, new UserController().update);
routes.delete("/user", ensureAuthenticated, new UserController().delete);

export default routes;