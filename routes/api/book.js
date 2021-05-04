//const router = require("express").Router();
//const opusController = require("../../controllers/opusControllers");

const db = require("../../models/book")

// // Matches with "/api/books"
// router.route(app)
//   .get(opusController.findAll)
//   .post(opusController.create); // add to a page? may not need 

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(opusController.findById)
//   .put(opusController.update) // would update status of reading or review
//   .delete(opusController.remove);

module.exports = (app) => {
  app.get("/api/books", (req, res) => {
    db.book.findAll({})
    .then((dbRoute) => {
      res.json(dbRoute); 
    })
  })
}