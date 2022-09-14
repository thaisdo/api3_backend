const express = require('express');

const contatos = [
    {id: 1, nome: "thai", celular: "1234-5678"},
    {id: 2, nome: "amanda", celular: "8765-4321"}
];


function listar(req, res, next) {
    res.json(contatos);
}

function exibir(req, res, next) {
    const contatoLocalizado = contatos.find(contato => 
        contato.id === Number(req.params.id)
    );
    if (!contatoLocalizado) {
        return res.status(404).json( {msg: 'contato nao localizado'} );
    }
    res.json(contatoLocalizado);
}

function criar(req, res, next) {
    const novoContato = {
        id: contatos.length + 1,
        nome: req.body.nome,
        celular: req.body.celular
    }
    contatos.push(novoContato);
    res.status(201).json(novoContato);
}

function atualizar(req, res, next) {
    const contatoLocalizado = contatos.find(contato => 
        contato.id === Number(req.params.id)
    );
    if (!contatoLocalizado) {
        return res.status(404).json( {msg: 'Contato não localizado'} );
    }
   contatoLocalizado.nome = req.body.nome;
   contatoLocalizado.celular = req.body.celular;
   res.status(204).end();
}
function remover(req, res, next) {
    const posicaoContato = contatos.findIndex( contato => 
        contato.id === Number(req.params.id));
    if(posicaoContato < 0) {
        return res.status(404).json( {msg: 'Contato nao localizado'} );
    }
    contatos.splice(posicaoContato, 1);
    res.status(204).end();
}

module.exports = { listar, exibir, criar, atualizar, remover };