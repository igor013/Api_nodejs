import express from "express";
import cors from "cors";
import routes from "./routes.js";
import "./database/index"
import path from "path";


const app = express();

app.use(cors());
app.use(express.json());

/*
app.use("/", express.static(path.join(__dirname,'public')));
app.set("views", path.join(__dirname,'src','app','views'));
app.engine("html", require('ejs').renderFile);
*/

app.set('view engine', 'ejs');
app.get("/teste",(req, res) => {

    res.render(path.join(__dirname,'app','views','teste'));

})



app.use(routes);

//Implementacao de Middleware para Rotas Invalidas
// comentario Gill
    app.use(function (req, res, next) {
        res.status(404).send("Não encontrado a rota digitada!")
    })

export default app;