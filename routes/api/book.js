const router = require("express").Router();
const opusController = require("../../controllers/opusController");

// Matches with "/api/books"
router.route("/")
  .get(opusController.findAll)
  .post(opusController.create); // add to a page? may not need 

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(opusController.findById)
  .put(opusController.update) // would update status of reading or review
  .delete(opusController.remove);

module.exports = router