require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require ('express');
const cors = require('cors');

const Alunos = require("./src/routes/Alunos");


//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use("/Alunos", Alunos);
    

app.listen(PORT, () => {
    console.log('Ainda bem que foi, rodando na porta ' + PORT);
});
