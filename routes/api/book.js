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

// /api/books/shelf/current
router.route("/shelf/current")
  .get(opusController.shelfCurrentRead)

module.exports = router;