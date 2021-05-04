const router = require("express").Router();
const  userBooks = require("./book");

// Book routes
router.use("/books", userBooks);

module.exports = router