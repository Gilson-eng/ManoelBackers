const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const perfilRoute = require("./routes/perfilRoute");

app.use("/perfil", perfilRoute);

app.listen(PORT, () => console.log("Escutando a porta " + PORT));