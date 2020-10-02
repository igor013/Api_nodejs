import {Router} from "express";
import HomeController from "./app/HomeController";

const routes = new Router();

routes.get("/", HomeController.index);

export default routes;