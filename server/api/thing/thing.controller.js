/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';
var books = require('../../model/books');

// Gets a list of Things
exports.index = function(req, res) {
  res.json(books.list());
};

exports.create = function(req, res) {
  var book = req.body;

  books.save({
    isbn: book.isbn,
    nome: book.nome,
    ano: book.ano,
    autores: book.autores,
    editoras: book.editora,
    criticas: book.criticas
  });

  res.send("Salvo com sucesso");
};

exports.update = function(req, res) {
  var id = req.params.id;
  var book = req.body;

  if(id && id <= books.list().length) {
    books.update(id, {
      isbn: book.isbn,
      nome: book.nome,
      ano: book.ano,
      autores: book.autores,
      editoras: book.editora,
      criticas: book.criticas
    });

      res.send("Salvo com sucesso");
  } else {
      res.send("Id inválido");
  }  
};

exports.get = function(req, res) {
  var id = req.params.id;
  if(id && id <= books.list().length) {
    var book = books.findBy(id);

    res.json(book);
  } else {
    res.send("Id inválido");
  }
};

exports.delete = function(req, res) {
  var id = req.params.id;
  if(id && id <= books.list().length) {
    books.delete(id);
    res.send("Deletado com sucesso");
  } else {
    res.send("Id inválido");
  }
};
