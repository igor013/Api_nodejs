import express from "express";
import routes from "./routes.js";
import cors from "cors";
import "./database/index.js"

const app = express();

app.use(cors());

app.use(express.json());

// Utiliza as rotas no servidor, conforme importado do arquivo
app.use(routes);


export default app;