var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contatosRouter = require('./routes/contatos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contatos', contatosRouter);

module.exports = app;


// anotações 13/09 backend

// Criar uma estrutura do projeto rapidinho p vc

// —> cria uma pasta nova no visconde
// —> no terminal executar os comando:

// 1. npm install -D express-generator
// 2. npx express-generator --no-view (aceitar yes)

// Obs: pasta public = seria p um projeto com front (pode apagar)

// Teste automatico = npm install -D nodemon


