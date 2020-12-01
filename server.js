const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

const routes = require("./src/routes/usuarioRoutes")

routes(app)





const port = process.env.PORT || 3001;

app.listen(port)
console.log("Servidor funcionando, na porta: ", port);