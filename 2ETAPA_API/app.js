const express = require ("express");
const app = express();
const port = 8081;

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const produtosRouter = require('./routers/produtos');
const categoriaRouter = require('./routers/categoria');
const perfilRouter = require('./routers/perfil');
const usuarioRouter = require('./routers/usuario');


app.use('/produtos',produtosRouter);
app.use('/categoria',categoriaRouter);
app.use('/perfil',perfilRouter);
app.use('/usuario', usuarioRouter);

app.listen(port, () => console.log(`Escutando a porta ${port}`));

