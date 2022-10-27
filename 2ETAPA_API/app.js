const express = require("express");
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const perfilRoute = require("./routes/perfilRoute");
app.use("/perfil", perfilRoute);

const produtosRoute = require("./routes/produtosRoute");
app.use("/produtos", produtosRoute);

const categoriaRoute = require("./routes/categoriaRoute");
app.use("/categoria", categoriaRoute);

const usuarioRoute = require("./routes/usuarioRoute");
app.use("/usuario", usuarioRoute);

const movimentoRoute = require("./routes/movimentoRoute");
app.use("/movimento", movimentoRoute);

const unidadeMedidaRoute = require ("./routes/unidadeMedidaRoute");
app.use("/unidadeMedida", unidadeMedidaRoute);

app.listen(PORT, () => console.log("Escutando a porta " + PORT));