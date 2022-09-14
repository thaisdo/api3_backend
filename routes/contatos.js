var express = require('express');
var router = express.Router();

const contatosController = require('../controllers/contatos')

/* GET users listing. */
// get lista todos os contatos
router.get('/', contatosController.listar);

// get ID exibe um contato pelo ID
router.get('/:id', contatosController.exibir);

// POST cria um novo contato
router.post('/', contatosController.criar);

// PUT ID atualiza um contato pelo ID
router.put('/:id', contatosController.atualizar);

// DELETE ID remove um contato ID
 router.delete('/:id', contatosController.remover); 
 // function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
