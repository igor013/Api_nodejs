import {Router} from "express";
import HomeController from "./app/Controllers/HomeController";
import UserController from "./app/Controllers/UserController";

const routes = new Router();

routes.get("/", HomeController.index);

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);


export default routes;