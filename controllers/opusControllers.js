const db = require("../models");

// Defining methods for the booksController 

// need to reference usersbooks and ids for each users 
module.exports = {
  findAll: function (req, res) {
    db.Book
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Book
      .findOne({ where: { isbn: req.params.isbn } })
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
  
  shelfWant: function (req, res) {
    db.UsersBooks
      .findAll({ 
        where: { userId: req.params.userId, shelf: "Want to Read" }, 
        include: db.Book 
      })
      .then((ub) => {
        res.json(ub)
      })
    .catch((err) => res.status(422).json(err));
  },
  shelfRead: function (req, res) {
    db.UsersBooks
      .findAll({ 
        where: { userId: req.params.userId, shelf: "Read" }, 
        include: db.Book 
      })
      .then((ub) => {
        res.json(ub)
      })
    .catch((err) => res.status(422).json(err));
  },
  shelfCurrentRead: function (req, res) {
    db.UsersBooks
      .findAll({ 
        where: { userId: req.params.userId, shelf: "Currently Reading" }, 
        include: db.Book 
      })
      .then((ub) => {
        res.json(ub)
      })
    .catch((err) => res.status(422).json(err));
  },
  userShelf: function (req, res) {
    db.UsersBooks
      .findAll({ 
       where:{ userId: req.params.userId },
        include: db.Book 
      })
      .then((ub) => {
        res.json(ub)
      })
    .catch((err) => res.status(422).json(err));
  },
  updateSaved: function (req, res) {
    db.UsersBooks
    .findOne({
      where:{
      userId: req.body.userId,
      bookId: req.body.bookId
    }
  }).then((book) => {
    console.log(book.dataValues)
    db.UsersBooks.upsert({
      bookId: req.body.bookId,
      userId: req.body.userId,
      review: req.body.review,
      rating: req.body.rating,
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
