const db = require("../models");

// Defining methods for the booksController
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
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
