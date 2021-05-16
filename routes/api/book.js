const router = require("express").Router();
const opusController = require("../../controllers/opusControllers");

// Matches with "/api/books"
router.route("/")
  .get(opusController.findAll)
  .post(opusController.create)
  
// /api/books/isbn
router.route("/:isbn")
  .get(opusController.findById)

// /api/books/:bookId-- doing same as above maybe? bookId
// router.route("/load/test")
//   .get(opusController.loadOne)

// /api/books/shelf/want
router.route("/shelf/want")
  .get(opusController.shelfWant)

// /api/books/shelf/read
router.route("/shelf/read")
  .get(opusController.shelfRead)

// /api/books/shelf/current
router.route("/shelf/current")
  .get(opusController.shelfCurrentRead)

// /api/books/shelf/user-- this is getting the users entire shelf 
router.route("/shelf/user")
  .get(opusController.userShelf)
  .post(opusController.updateSaved)

module.exports = router;