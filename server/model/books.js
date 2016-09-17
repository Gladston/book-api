

  var books = [];

  exports.findBy = function(id) {
      return books[id - 1];
    }

  exports.save = function(book, callback) {
      books.push({
          isbn: book.isbn,
          nome: book.nome,
          ano: book.ano,
          autores: book.autores,
          editoras: book.editora,
          criticas: book.criticas
      });
    }

    exports.update = function(id, book) {
        books[id - 1] = book;
    }

  exports.delete = function(id) {
      if(books.length == 1) {
          books = [];
      } else {
        books.splice(id, 1);
      }
      
    }

  exports.list = function(callback) {
      var l = [];
      for(var i = 0; i < books.length; i++) {
          var book = books[i];
          book.id = i + 1;

          l.push(book);
      }

      return l;
    }