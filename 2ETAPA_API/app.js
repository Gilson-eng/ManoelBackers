const express = require ("express");
const app = express();
const port = 8081;

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const produtosRouter = require('./routers/produtos');

app.use('/produtos',produtosRouter);

app.listen(port, () => console.log(`Escutando a porta ${port}`));

