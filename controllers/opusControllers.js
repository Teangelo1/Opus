const db = require("../models");

// Defining methods for the booksController 

// need to reference usersbooks and ids for each users 
module.exports = {
  findAll: function(req, res) {
    db.Book
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findOne({where: {isbn: req.params.isbn}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book.findCreateFind({
      where: { isbn: req.body.book.isbn },
      defaults: req.body.book,
    })
      .then((book) => {
        db.UsersBooks.upsert({
            userId: req.body.userId,
            shelf: req.body.shelf,
            bookId: book[0].id,
          },
        )
          .then((ub) => {
            res.json(ub);
          })
          .catch((err) => {
            console.log(err);
            res.status(422).json(err);
          });
      })
      .catch((err) => res.status(422).json(err));
  },
  shelfWant: function(req, res) {
    db.Book
    .findAll({where: {shelf: "Want to Read"}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }, 
  shelfRead: function(req, res) {
    db.Book
    .findAll({where: {shelf: "Read"}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err)); 
  }
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};
