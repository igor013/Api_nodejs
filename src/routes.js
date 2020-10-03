import {Router} from "express";
import HomeController from "./app/controlles/HomeController.js"
import UserController from "./app/controlles/UserController.js";
import AdressController from "./app/controlles/AdressController.js";
const routes = new Router();
//-------------------------------------------------------------------------------
routes.get("/", HomeController.index);
//-------------------------------------------------------------------------------

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

//-------------------------------------------------------------------------------

routes.get("/address", AdressController.index);
routes.post("/address", AdressController.store);
routes.put("/address/:id", AdressController.update);
routes.delete("/address/:id", AdressController.destroy);



export default routes;