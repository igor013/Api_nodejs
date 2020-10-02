import express from "express";
import routes from "./routes.js";
import cors from "cors";
import "./database/index.js"

const app = express();

app.use(cors());

app.use(routes);


export default app;