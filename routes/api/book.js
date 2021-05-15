const router = require("express").Router();
const opusController = require("../../controllers/opusControllers");

// Matches with "/api/books"
router.route("/")
  .get(opusController.findAll)
  .post(opusController.create);
  
// /api/books/isbn
router.route("/:isbn")
  .get(opusController.findById); 

// /api/books/shelf/want
router.route("/shelf/want")
  .get(opusController.shelfWant);

// /api/books/shelf/read
router.route("/shelf/read")
  .get(opusController.shelfRead);

router.route("/shelf/currentlyreading")
  .get(opusController.shelfCurrentRead)

  // // api/books/api/bookshelf
  // router.get('/api/bookshelf', (req, res) => {
  //   console.log(req.body)
  //   db.Book.findAll({
  //     where: {
  //       shelf: req.body.shelf
  //     }
  //   }).then(response => {
  //     return res.render("results", {
  //       results: response
  //     })
  //   })
  //   console.log(response)
  // }) // look at activity 13 post routes for giving user an ID

  // router.get('/api/bookshelf/:id', (req, res) => {
  //   db.Book.findById({
  //     where: {
  //       id: req.body.id,
  //       shelf: req.body.shelf // may have to associate shelf with user with FK that references the users PK
  //     }
  //   }).then(response => {
  //     return res.render("results", {
  //       results: response
  //     })
  //   })
  // })


  // router.route("/existing").get(
//   db.User.findAll({})
//   .then(dbModel => res.json(dbModel))
//   .catch(err => res.status(422).json(err))

// )
// /api/books/shelf/read


  // router.get('/shelf/read', function(req, res) {
  //   db.Book.findOne({
  //     where: {
  //       id: 1
  //     }
  //   })
  //   .then(dbModel => res.json(dbModel)
  // )
  //   });

  // router.get('/shelf/want', (req, res) => {
  //   db.Book.findAll({
  //     where: {
  //       shelf: "Want to Read"
  //     }
  //   }).then(response => {
  //     return res.render("results", {
  //       results: response
  //     })
  //   })
  // })

  // })

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(opusController.findById)
//   .put(opusController.update) // would update status of reading or review
//   .delete(opusController.remove);

// module.exports = (app) => {
//   app.get("/api/books", (req, res) => {
//     db.book.findAll({})
//     .then((dbRoute) => {
//       res.json(dbRoute); 
//     })
//   })
// }
module.exports = router;