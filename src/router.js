const express =require('express');

const router = express.Router();

const pessoas = require('./database/pessoas.json');

const PessoasController = require('./controllers/PessoasController')

router.get("/" , PessoasController.listarPessoas );

router.get('/:id' , PessoasController.mostrarPessoa)

    

module.exports = router;

