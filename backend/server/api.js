const express = require('express');
const cors = require('cors');
require('dotenv').config();

const produtos = require('./routes/produtos');
const estoque = require('./routes/estoque');
const users = require('./routes/usuarios');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/cadastroProduto', produtos);
app.use('/estoque', estoque);
app.use('/users', users);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});